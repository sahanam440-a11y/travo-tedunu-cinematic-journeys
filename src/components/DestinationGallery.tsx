import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface DestinationGalleryProps {
  images: { image: string; caption: string }[];
  title: string;
}

export const DestinationGallery = ({ images, title }: DestinationGalleryProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();

  const handleThumbnailClick = (index: number) => {
    api?.scrollTo(index);
  };

  // Update current index when carousel changes
  if (api) {
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }

  // Autoplay for mobile
  useEffect(() => {
    if (!isMobile || !api) return;

    const interval = setInterval(() => {
      const nextIndex = (current + 1) % images.length;
      api.scrollTo(nextIndex);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isMobile, api, current, images.length]);

  return (
    <div className="space-y-3 md:space-y-4">
      {/* Main Carousel */}
      <Carousel 
        setApi={setApi} 
        className="w-full"
        opts={{
          loop: isMobile, // Enable loop on mobile for seamless autoplay
        }}
      >
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={`${title} - ${item.caption}`}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                  <p className="text-white text-sm sm:text-base md:text-lg font-medium drop-shadow-lg">
                    {item.caption}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Hide navigation buttons on mobile for cleaner autoplay experience */}
        {!isMobile && (
          <>
            <CarouselPrevious className="left-2 md:left-4 h-8 w-8 md:h-10 md:w-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 border-border/50" />
            <CarouselNext className="right-2 md:right-4 h-8 w-8 md:h-10 md:w-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 border-border/50" />
          </>
        )}
      </Carousel>

      {/* Thumbnail Navigation - Only show on desktop */}
      {!isMobile && (
        <div className="flex gap-2 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {images.map((item, index) => (
            <button
              key={index}
              onClick={() => handleThumbnailClick(index)}
              className={cn(
                "relative flex-shrink-0 w-20 h-16 md:w-24 md:h-20 rounded-md overflow-hidden transition-all duration-300",
                "hover:ring-2 hover:ring-primary hover:scale-105",
                current === index
                  ? "ring-2 ring-primary scale-105 shadow-glow"
                  : "opacity-60 hover:opacity-100"
              )}
            >
              <img
                src={item.image}
                alt={`${title} thumbnail - ${item.caption}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Progress indicators for mobile */}
      {isMobile && (
        <div className="flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-primary/30"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};
