import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface DestinationGalleryProps {
  images: { image: string; caption: string }[];
  title: string;
}

export const DestinationGallery = ({ images, title }: DestinationGalleryProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const handleThumbnailClick = (index: number) => {
    api?.scrollTo(index);
  };

  // Update current index when carousel changes
  if (api) {
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }

  return (
    <div className="space-y-3 md:space-y-4">
      {/* Main Carousel */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.caption}
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
        <CarouselPrevious className="left-2 md:left-4 h-8 w-8 md:h-10 md:w-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 border-border/50" />
        <CarouselNext className="right-2 md:right-4 h-8 w-8 md:h-10 md:w-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 border-border/50" />
      </Carousel>

      {/* Thumbnail Navigation */}
      <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 px-1 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 rounded-md overflow-hidden transition-all duration-300",
              "hover:ring-2 hover:ring-primary hover:scale-105",
              current === index
                ? "ring-2 ring-primary scale-105 shadow-glow"
                : "opacity-60 hover:opacity-100"
            )}
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
