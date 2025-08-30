import { Star, MapPin, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";

const FeaturedRestaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Mama's Kitchen",
      cuisine: "Traditional Filipino",
      rating: 4.8,
      reviews: 324,
      location: "Makati, Manila",
      image: restaurantInterior,
      specialties: ["Adobo", "Lechon", "Kare-kare"],
      priceRange: "₱₱",
      isOpen: true,
    },
    {
      id: 2,
      name: "The Modern Filipino",
      cuisine: "Contemporary Filipino",
      rating: 4.9,
      reviews: 567,
      location: "BGC, Taguig",
      image: chefCooking,
      specialties: ["Sisig", "Lumpia", "Pancit"],
      priceRange: "₱₱₱",
      isOpen: true,
    },
    {
      id: 3,
      name: "Lola's Heritage",
      cuisine: "Regional Filipino",
      rating: 4.7,
      reviews: 892,
      location: "Quezon City",
      image: restaurantInterior,
      specialties: ["Bicol Express", "Laing", "Pinakbet"],
      priceRange: "₱₱",
      isOpen: false,
    },
  ];

  return (
    <section id="restaurants" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Restaurants
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional dining experiences from our carefully curated selection of restaurants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <Card 
              key={restaurant.id} 
              className="group hover:shadow-elegant transition-smooth overflow-hidden border-0 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/90 hover:bg-white h-8 w-8 rounded-full"
                  >
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      restaurant.isOpen
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-destructive text-destructive-foreground"
                    }`}
                  >
                    {restaurant.isOpen ? "Open Now" : "Closed"}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {restaurant.name}
                    </h3>
                    <p className="text-muted-foreground">{restaurant.cuisine}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="font-semibold">{restaurant.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ({restaurant.reviews} reviews)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{restaurant.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.priceRange}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.slice(0, 3).map((specialty) => (
                      <span
                        key={specialty}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Restaurants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;