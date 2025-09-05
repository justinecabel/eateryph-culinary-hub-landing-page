import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Store, Users, Utensils } from "lucide-react";
import metroManilaImg from "@/assets/location-metro-manila.jpg";
import cebuCityImg from "@/assets/location-cebu-city.jpg";
import davaoCityImg from "@/assets/location-davao-city.jpg";
import baguioCityImg from "@/assets/location-baguio-city.jpg";
import iloiloCityImg from "@/assets/location-iloilo-city.jpg";
import cagayanDeOroImg from "@/assets/location-cagayan-de-oro.jpg";

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Metro Manila",
      description: "The heart of Filipino cuisine with diverse dining options",
      restaurantCount: 1200,
      popularCuisines: ["Filipino", "Chinese", "Japanese", "Korean"],
      image: metroManilaImg,
      areas: ["Makati", "BGC", "Ortigas", "Quezon City", "Manila", "Pasig"]
    },
    {
      id: 2,
      name: "Cebu City",
      description: "Famous for lechon and vibrant food scene",
      restaurantCount: 450,
      popularCuisines: ["Cebuano", "Filipino", "Seafood"],
      image: cebuCityImg,
      areas: ["IT Park", "Lahug", "Colon", "Capitol Site"]
    },
    {
      id: 3,
      name: "Davao City",
      description: "Southern Philippines culinary capital",
      restaurantCount: 320,
      popularCuisines: ["Mindanaoan", "Filipino", "Durian Specialties"],
      image: davaoCityImg,
      areas: ["Poblacion", "Lanang", "Buhangin", "Talomo"]
    },
    {
      id: 4,
      name: "Baguio City",
      description: "Mountain cuisine and cool weather dining",
      restaurantCount: 280,
      popularCuisines: ["Cordilleran", "Filipino", "Strawberry Treats"],
      image: baguioCityImg,
      areas: ["Session Road", "Burnham Park", "Camp John Hay"]
    },
    {
      id: 5,
      name: "Iloilo City",
      description: "Home of La Paz batchoy and Ilonggo cuisine",
      restaurantCount: 220,
      popularCuisines: ["Ilonggo", "Filipino", "Seafood"],
      image: iloiloCityImg,
      areas: ["Jaro", "La Paz", "Molo", "City Proper"]
    },
    {
      id: 6,
      name: "Cagayan de Oro",
      description: "Northern Mindanao's food hub",
      restaurantCount: 180,
      popularCuisines: ["Kagay-anon", "Filipino", "Grilled Specialties"],
      image: cagayanDeOroImg,
      areas: ["Divisoria", "Cogon", "Carmen", "Gusa"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Restaurant Locations
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover amazing Filipino restaurants across the Philippines. From bustling cities to charming towns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">2,650+</div>
                <div className="text-sm opacity-90">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-90">Cities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm opacity-90">Regions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm opacity-90">Cuisines</div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Card key={location.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={location.image} 
                      alt={`${location.name} cityscape`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-foreground">
                        {location.restaurantCount} restaurants
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      {location.name}
                    </CardTitle>
                    <CardDescription>
                      {location.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Utensils className="h-4 w-4" />
                        Popular Cuisines
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.popularCuisines.map((cuisine) => (
                          <Badge key={cuisine} variant="secondary" className="text-xs">
                            {cuisine}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Store className="h-4 w-4" />
                        Popular Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {location.areas.map((area) => (
                          <Badge key={area} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{location.restaurantCount} restaurants</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find Your City?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We're constantly expanding our coverage. Let us know where you'd like to see eatery.ph next!
            </p>
            <div className="max-w-md mx-auto">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Request New Location</h3>
                <p className="text-sm text-muted-foreground">
                  Send us an email with your city name and we'll prioritize adding it to our platform.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Locations;