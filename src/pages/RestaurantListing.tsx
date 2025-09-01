import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DomainForSaleModal from "@/components/DomainForSaleModal";
import AdContainer from "@/components/AdContainer";
import { useDomainForSale } from "@/hooks/useDomainForSale";
import { restaurants, cuisines } from "@/data/restaurants";

const RestaurantListing = () => {
  const navigate = useNavigate();
  const { isModalOpen, showModal, hideModal } = useDomainForSale();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [sortBy, setSortBy] = useState("rating");

  const filteredRestaurants = useMemo(() => {
    let filtered = restaurants.filter(restaurant => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          restaurant.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCuisine = selectedCuisine === "All" || 
                           restaurant.cuisine.toLowerCase().includes(selectedCuisine.toLowerCase());
      
      return matchesSearch && matchesCuisine;
    });

    // Sort restaurants
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCuisine, sortBy]);

  const handleRestaurantClick = (id: string) => {
    navigate(`/restaurant/${id}`);
  };

  const handleOrder = (e: React.MouseEvent, restaurantId: string) => {
    e.stopPropagation();
    showModal();
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Perfect
                <span className="block text-transparent bg-gradient-hero bg-clip-text">
                  Filipino Restaurant
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover amazing restaurants near you
              </p>
              
              {/* Search and Filters */}
              <div className="bg-card p-6 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      placeholder="Search restaurants, cuisines, or locations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12"
                    />
                  </div>
                  <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                    <SelectTrigger className="w-full md:w-48 h-12">
                      <SelectValue placeholder="All Cuisines" />
                    </SelectTrigger>
                    <SelectContent>
                      {cuisines.map((cuisine) => (
                        <SelectItem key={cuisine} value={cuisine}>
                          {cuisine}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full md:w-48 h-12">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="reviews">Most Reviews</SelectItem>
                      <SelectItem value="name">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {filteredRestaurants.length} restaurants found
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant, index) => (
                <div key={restaurant.id}>
                  {/* Ad Container every 6th item */}
                  {index > 0 && (index + 1) % 6 === 0 && (
                    <AdContainer size="rectangle" className="mb-6" />
                  )}
                  <Card 
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    onClick={() => handleRestaurantClick(restaurant.id)}
                  >
                    <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${restaurant.image})` }}
                      />
                      <div className="absolute top-3 right-3">
                        <Badge variant={restaurant.isOpen ? "default" : "destructive"}>
                          {restaurant.isOpen ? "Open" : "Closed"}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
                          <p className="text-sm text-muted-foreground">{restaurant.description}</p>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-semibold text-sm">{restaurant.rating}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              ({restaurant.reviewCount})
                            </span>
                          </div>
                          <Badge variant="secondary">{restaurant.cuisine}</Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {restaurant.deliveryTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {restaurant.location}
                          </div>
                          <span className="font-medium">{restaurant.priceRange}</span>
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={(e) => handleOrder(e, restaurant.id)}
                          >
                            Order Now
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleRestaurantClick(restaurant.id)}
                          >
                            View Menu
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {filteredRestaurants.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-2">No restaurants found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search criteria or browse all restaurants
                </p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedCuisine("All");
                }} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <DomainForSaleModal isOpen={isModalOpen} onClose={hideModal} />
    </div>
  );
};

export default RestaurantListing;