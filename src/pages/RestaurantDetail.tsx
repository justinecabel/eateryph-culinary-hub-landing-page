import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Star, Clock, MapPin, Phone, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DomainForSaleModal from "@/components/DomainForSaleModal";
import SEO from "@/components/SEO";
import { useDomainForSale } from "@/hooks/useDomainForSale";
import { getRestaurantById } from "@/data/restaurants";
import { generateRestaurantStructuredData, generateBreadcrumbStructuredData } from "@/utils/structuredData";
import { toast } from "@/hooks/use-toast";

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = getRestaurantById(id || "");
  const { isModalOpen, showModal, hideModal } = useDomainForSale();
  const [activeTab, setActiveTab] = useState("menu");

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Go back home
          </Button>
        </div>
      </div>
    );
  }

  const handleReservation = () => {
    showModal();
  };

  const handleOrder = () => {
    showModal();
  };

  const handleShare = () => {
    showModal();
  };

  const handleFavorite = () => {
    toast({
      title: "Added to favorites!",
      description: `${restaurant.name} has been added to your favorites.`,
    });
    showModal();
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://eatery.ph/" },
    { name: "Restaurants", url: "https://eatery.ph/restaurants" },
    { name: restaurant.name, url: `https://eatery.ph/restaurant/${restaurant.id}` }
  ];

  const structuredData = [
    generateRestaurantStructuredData(restaurant),
    generateBreadcrumbStructuredData(breadcrumbItems)
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title={`${restaurant.name} - ${restaurant.cuisine} Restaurant in ${restaurant.location} | eatery.ph`}
        description={`${restaurant.description} Located in ${restaurant.location}. Rated ${restaurant.rating}/5 with ${restaurant.reviewCount} reviews. Order online or make a reservation.`}
        keywords={`${restaurant.name}, ${restaurant.cuisine} restaurant, ${restaurant.location} dining, Filipino food ${restaurant.location}, restaurant reviews, food delivery ${restaurant.location}`}
        canonical={`https://eatery.ph/restaurant/${restaurant.id}`}
        type="restaurant"
        image={restaurant.image}
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${restaurant.image})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute top-6 left-6">
            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => navigate("/")}
              className="bg-white/90 hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{restaurant.rating}</span>
                <span className="text-white/80">({restaurant.reviewCount} reviews)</span>
              </div>
              <Badge variant="secondary">{restaurant.cuisine}</Badge>
              <span className="text-white/80">{restaurant.priceRange}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {restaurant.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {restaurant.deliveryTime}
              </div>
              <Badge variant={restaurant.isOpen ? "default" : "destructive"}>
                {restaurant.isOpen ? "Open" : "Closed"}
              </Badge>
            </div>
          </div>
          <div className="absolute top-6 right-6 flex gap-2">
            <Button variant="secondary" size="sm" onClick={handleShare} className="bg-white/90 hover:bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="sm" onClick={handleFavorite} className="bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="menu">Menu</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>
                
                <TabsContent value="menu" className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Menu</h3>
                    <div className="space-y-4">
                      {restaurant.menu.map((item) => (
                        <Card key={item.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="font-semibold">{item.name}</h4>
                                  {item.isPopular && (
                                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                                <p className="font-bold text-lg">₱{item.price}</p>
                              </div>
                              <Button onClick={handleOrder} size="sm">
                                Add to Order
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
                    <div className="space-y-4">
                      {restaurant.reviews.map((review) => (
                        <Card key={review.id}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <Avatar>
                                <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold">{review.userName}</h4>
                                  <div className="flex items-center">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-muted-foreground text-sm mb-2">{review.date}</p>
                                <p>{review.comment}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="info" className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Restaurant Information</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">About</h4>
                            <p className="text-muted-foreground">{restaurant.description}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Features</h4>
                            <div className="flex flex-wrap gap-2">
                              {restaurant.features.map((feature) => (
                                <Badge key={feature} variant="outline">{feature}</Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Contact</h4>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <span>+63 123 456 7890</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button onClick={handleOrder} className="w-full" size="lg">
                    Order Now
                  </Button>
                  <Button onClick={handleReservation} variant="outline" className="w-full" size="lg">
                    Make Reservation
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-3">
                    <MapPin className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">{restaurant.location}</p>
                  <Button variant="outline" size="sm" className="w-full mt-3" onClick={showModal}>
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <DomainForSaleModal isOpen={isModalOpen} onClose={hideModal} />
    </div>
  );
};

export default RestaurantDetail;