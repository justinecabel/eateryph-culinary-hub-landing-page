import { Search, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroFood})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover the Best
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Filipino Eateries
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            From street food to fine dining, explore authentic Filipino flavors across the Philippines
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search for restaurants, dishes, or cuisines..."
                  className="pl-12 h-14 bg-white/90 border-0 text-foreground text-lg placeholder:text-muted-foreground"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Location"
                  className="pl-12 h-14 bg-white/90 border-0 text-foreground min-w-[200px]"
                />
              </div>
              <Button variant="hero" size="lg" className="h-14 px-8 text-lg font-semibold">
                Find Restaurants
              </Button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5,000+</div>
              <div className="text-gray-300">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50,000+</div>
              <div className="text-gray-300">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100+</div>
              <div className="text-gray-300">Cities</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg">
              Explore Restaurants
            </Button>
            <Button variant="fresh" size="lg" className="text-lg">
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
    </section>
  );
};

export default Hero;