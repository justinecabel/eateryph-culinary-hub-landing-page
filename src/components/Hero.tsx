import { Search, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import DomainForSaleModal from "@/components/DomainForSaleModal";
import { useDomainForSale } from "@/hooks/useDomainForSale";
import filipinoAdobo from "@/assets/filipino-adobo.jpg";
import filipinoLechon from "@/assets/filipino-lechon.jpg";
import filipinoSinigang from "@/assets/filipino-sinigang.jpg";
import filipinoHalohalo from "@/assets/filipino-halohalo.jpg";
import filipinoLumpia from "@/assets/filipino-lumpia.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const { isModalOpen, showModal, hideModal } = useDomainForSale();
  
  const slideImages = [
    { image: filipinoAdobo, title: "Authentic Adobo", description: "Traditional Filipino comfort food" },
    { image: filipinoLechon, title: "Crispy Lechon", description: "Perfect for celebrations" },
    { image: filipinoSinigang, title: "Sinigang Soup", description: "Sour and savory perfection" },
    { image: filipinoHalohalo, title: "Halo-Halo Delight", description: "Tropical shaved ice dessert" },
    { image: filipinoLumpia, title: "Golden Lumpia", description: "Crispy Filipino spring rolls" }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slideImages.length]);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  const handleFindRestaurants = () => {
    navigate("/restaurants");
  };

  const handleExploreRestaurants = () => {
    navigate("/restaurants");
  };

  const handleJoinRestaurant = () => {
    showModal();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slideImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
          </div>
        ))}
      </div>
      
      {/* Slideshow Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md rounded-full p-3 hover:bg-white/30 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Discover the Best
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Filipino Eateries
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-2xl mx-auto px-4">
            From street food to fine dining, explore authentic Filipino flavors across the Philippines
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            <div className="flex flex-col gap-3 sm:gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search restaurants, dishes..."
                  className="pl-12 h-12 sm:h-14 bg-white/90 border-0 text-foreground text-sm sm:text-lg placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    placeholder="Location"
                    className="pl-12 h-12 sm:h-14 bg-white/90 border-0 text-foreground"
                  />
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-lg font-semibold whitespace-nowrap"
                  onClick={handleFindRestaurants}
                >
                  Find Restaurants
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 px-4">
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-accent">5,000+</div>
              <div className="text-xs sm:text-sm text-gray-300">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-accent">50,000+</div>
              <div className="text-xs sm:text-sm text-gray-300">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-accent">100+</div>
              <div className="text-xs sm:text-sm text-gray-300">Cities</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-sm sm:text-lg h-12 sm:h-auto"
              onClick={handleExploreRestaurants}
            >
              Explore Restaurants
            </Button>
            <Button 
              variant="fresh" 
              size="lg" 
              className="text-sm sm:text-lg h-12 sm:h-auto"
              onClick={handleJoinRestaurant}
            >
              Join as Restaurant
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
          <Star className="h-8 w-8 text-accent" fill="currentColor" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
          <MapPin className="h-8 w-8 text-accent" />
        </div>
      </div>
      
      <DomainForSaleModal isOpen={isModalOpen} onClose={hideModal} />
    </section>
  );
};

export default Hero;