import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { restaurants } from "@/data/restaurants";
import { additionalRestaurants } from "@/data/additionalRestaurants";
import { useState } from "react";

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const allRestaurants = [...restaurants, ...additionalRestaurants];

  const filteredRestaurants = allRestaurants
    .filter(restaurant => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCuisine = selectedCuisine === "all" || restaurant.cuisine === selectedCuisine;
      return matchesSearch && matchesCuisine;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        case "deliveryTime":
          return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
        default:
          return 0;
      }
    });

  const cuisines = [...new Set(allRestaurants.map(r => r.cuisine))];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Perfect Restaurant
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Discover amazing Filipino restaurants near you. From traditional to modern cuisine.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search restaurants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Cuisine Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cuisines</SelectItem>
                  {cuisines.map(cuisine => (
                    <SelectItem key={cuisine} value={cuisine}>{cuisine}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="deliveryTime">Delivery Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Restaurant Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <Card key={restaurant.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300 group">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className={`absolute top-4 right-4 ${
                        restaurant.isOpen 
                          ? 'bg-green-500 hover:bg-green-600' 
                          : 'bg-red-500 hover:bg-red-600'
                      }`}
                    >
                      {restaurant.isOpen ? 'Open' : 'Closed'}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">{restaurant.name}</CardTitle>
                        <CardDescription className="text-sm mb-3">
                          {restaurant.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{restaurant.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{restaurant.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {restaurant.cuisine}
                      </Badge>
                      <div className="flex gap-2">
                        <Link to={`/restaurant/${restaurant.id}`}>
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No restaurants found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Restaurants;