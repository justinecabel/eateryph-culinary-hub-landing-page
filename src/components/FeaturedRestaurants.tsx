import { Star, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import DomainForSaleModal from "@/components/DomainForSaleModal";
import { useDomainForSale } from "@/hooks/useDomainForSale";
import { restaurants } from "@/data/restaurants";

const FeaturedRestaurants = () => {
  const navigate = useNavigate();
  const { isModalOpen, showModal, hideModal } = useDomainForSale();

  const handleRestaurantClick = (id: string) => {
    navigate(`/restaurant/${id}`);
  };

  const handleOrder = (e: React.MouseEvent, restaurantId: string) => {
    e.stopPropagation();
    showModal();
  };

  const handleViewAll = () => {
    navigate("/restaurants");
  };

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
          {restaurants.slice(0, 3).map((restaurant) => (
            <Card 
              key={restaurant.id} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => handleRestaurantClick(restaurant.id)}
            >
              <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
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
                    <h3 className="font-bold text-lg">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-sm">{restaurant.rating}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">({restaurant.reviewCount})</span>
                    </div>
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
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" onClick={handleViewAll}>
            View All Restaurants
          </Button>
        </div>
      </div>
      
      <DomainForSaleModal isOpen={isModalOpen} onClose={hideModal} />
    </section>
  );
};

export default FeaturedRestaurants;