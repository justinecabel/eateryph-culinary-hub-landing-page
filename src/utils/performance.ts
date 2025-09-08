// Performance optimization utilities

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload hero image
  const heroImage = new Image();
  heroImage.src = "/src/assets/hero-food.jpg";
  
  // Preload key assets
  const criticalImages = [
    "/src/assets/hero-food.jpg",
    "/src/assets/filipino-adobo.jpg",
    "/src/assets/filipino-lechon.jpg"
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimize images for different screen sizes
export const getOptimizedImageUrl = (originalUrl: string, width?: number, quality = 85) => {
  // In a real app, this would integrate with an image optimization service
  // For now, return the original URL
  return originalUrl;
};

// Lazy load non-critical resources
export const lazyLoadSecondaryResources = () => {
  // Load non-critical CSS
  const loadCSS = (href: string) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print';
    link.onload = () => {
      link.media = 'all';
    };
    document.head.appendChild(link);
  };

  // Load analytics after initial page load
  setTimeout(() => {
    // Load additional analytics or tracking scripts here
  }, 3000);
};

// Cache API responses
export const cacheManager = {
  set: (key: string, data: any, ttl = 3600000) => { // 1 hour default
    const item = {
      data,
      timestamp: Date.now(),
      ttl
    };
    localStorage.setItem(`eatery_cache_${key}`, JSON.stringify(item));
  },
  
  get: (key: string) => {
    const item = localStorage.getItem(`eatery_cache_${key}`);
    if (!item) return null;
    
    const parsed = JSON.parse(item);
    if (Date.now() - parsed.timestamp > parsed.ttl) {
      localStorage.removeItem(`eatery_cache_${key}`);
      return null;
    }
    
    return parsed.data;
  },
  
  clear: () => {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('eatery_cache_')) {
        localStorage.removeItem(key);
      }
    });
  }
};

// Web Vitals tracking
export const trackWebVitals = () => {
  // Track Core Web Vitals
  if ('web-vital' in window) {
    // This would integrate with a real analytics service
    console.log('Web Vitals tracking enabled');
  }
};

// Service Worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', registration);
    } catch (error) {
      console.log('Service Worker registration failed:', error);
    }
  }
};