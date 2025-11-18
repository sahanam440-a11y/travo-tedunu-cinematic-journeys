import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Custom hook for automatic SEO tracking and optimization
export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Auto-scroll to top on route change for better UX
    window.scrollTo(0, 0);

    // Update document language
    document.documentElement.lang = "en-IN";

    // Track page view (ready for Google Analytics integration)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "GA_MEASUREMENT_ID", {
        page_path: location.pathname + location.search,
      });
    }

    // Performance: Mark navigation timing
    if (performance && performance.mark) {
      performance.mark(`route-${location.pathname}`);
    }
  }, [location]);

  return { location };
};

// Preload images for next page
export const preloadImage = (src: string) => {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  }
};

// Lazy load images with Intersection Observer
export const useLazyLoad = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              observer.unobserve(img);
            }
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (ref.current) {
      const images = ref.current.querySelectorAll("img[data-src]");
      images.forEach((img) => observer.observe(img));
    }

    return () => observer.disconnect();
  }, [ref]);
};
