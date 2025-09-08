import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  loading?: "lazy" | "eager";
}

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48cGF0aCBmaWxsPSIjZjVmNWY1IiBkPSJNMCAwaDMyMHYyNDBIMHoiLz48cGF0aCBmaWxsPSIjZGRkIiBkPSJNMTQ5IDE0Mmg4djVoLTh6bTggMGg1djVoLTV6bTAtNWgtOHY1aDh6Ii8+PC9nPjwvc3ZnPg==",
  loading = "lazy"
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current && loading === "lazy") {
      observer.observe(imgRef.current);
    } else {
      setIsInView(true);
    }

    return () => observer.disconnect();
  }, [loading]);

  return (
    <img
      ref={imgRef}
      src={isInView ? src : placeholder}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
      loading={loading}
      onLoad={() => setIsLoaded(true)}
      onError={() => setIsLoaded(true)}
      decoding="async"
    />
  );
};

export default LazyImage;