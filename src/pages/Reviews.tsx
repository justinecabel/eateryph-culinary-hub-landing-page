import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, ThumbsUp, MessageCircle, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Reviews = () => {
  const featuredReviews = [
    {
      id: 1,
      user: {
        name: "Maria Santos",
        avatar: "/placeholder.svg",
        verified: true,
        reviewCount: 127
      },
      restaurant: {
        name: "Kamayan sa Palaisdaan",
        id: "kamayan-palaisdaan",
        location: "Quezon City"
      },
      rating: 5,
      title: "Authentic Filipino Dining Experience",
      content: "This place brings back memories of family gatherings! The boodle fight experience is amazing and the food quality is top-notch. The bangus and adobo were perfectly cooked. Highly recommend for groups and families.",
      date: "2024-01-15",
      likes: 24,
      helpful: 18,
      images: ["/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: 2,
      user: {
        name: "John De Guzman",
        avatar: "/placeholder.svg",
        verified: true,
        reviewCount: 89
      },
      restaurant: {
        name: "Bicolano Restaurant",
        id: "bicolano-restaurant",
        location: "Makati"
      },
      rating: 4,
      title: "Spicy and Flavorful Bicol Cuisine",
      content: "The Bicol Express here is the real deal! Super creamy and spicy just like how my lola used to make it. The laing was also exceptional. Service was a bit slow during peak hours but the food made up for it.",
      date: "2024-01-12",
      likes: 31,
      helpful: 27,
      images: ["/placeholder.svg"]
    },
    {
      id: 3,
      user: {
        name: "Anna Reyes",
        avatar: "/placeholder.svg",
        verified: false,
        reviewCount: 45
      },
      restaurant: {
        name: "Kapampangan Deluxe",
        id: "kapampangan-deluxe",
        location: "Pampanga"
      },
      rating: 5,
      title: "Best Sisig in Town!",
      content: "Hands down the best sisig I've ever had! Crispy, flavorful, and the perfect amount of spice. The ambiance is cozy and the staff is very accommodating. Will definitely come back for more!",
      date: "2024-01-10",
      likes: 42,
      helpful: 35,
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: 4,
      user: {
        name: "Carlo Mendoza",
        avatar: "/placeholder.svg",
        verified: true,
        reviewCount: 203
      },
      restaurant: {
        name: "Cebu Lechon House",
        id: "cebu-lechon-house",
        location: "Cebu City"
      },
      rating: 5,
      title: "Authentic Cebu Lechon",
      content: "This is as close as you can get to authentic Cebu lechon without flying to Cebu! The skin is perfectly crispy and the meat is so tender and flavorful. A must-try for lechon lovers!",
      date: "2024-01-08",
      likes: 67,
      helpful: 52,
      images: ["/placeholder.svg"]
    }
  ];

  const reviewStats = {
    totalReviews: 15420,
    averageRating: 4.3,
    fiveStars: 8234,
    fourStars: 4521,
    threeStars: 1876,
    twoStars: 542,
    oneStar: 247
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Restaurant Reviews
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Real reviews from real customers. Discover the best Filipino restaurants through authentic experiences.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-white">
              <div className="text-center">
                <div className="text-2xl font-bold">{reviewStats.totalReviews.toLocaleString()}+</div>
                <div className="text-sm opacity-90">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{reviewStats.averageRating}</div>
                <div className="text-sm opacity-90">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2,650+</div>
                <div className="text-sm opacity-90">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Verified</div>
              </div>
            </div>
          </div>
        </section>

        {/* Rating Overview */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Overall Rating Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">{reviewStats.averageRating}</div>
                    <div className="flex justify-center mb-2">
                      {renderStars(Math.round(reviewStats.averageRating))}
                    </div>
                    <div className="text-muted-foreground">Based on {reviewStats.totalReviews.toLocaleString()} reviews</div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { stars: 5, count: reviewStats.fiveStars },
                      { stars: 4, count: reviewStats.fourStars },
                      { stars: 3, count: reviewStats.threeStars },
                      { stars: 2, count: reviewStats.twoStars },
                      { stars: 1, count: reviewStats.oneStar }
                    ].map(({ stars, count }) => (
                      <div key={stars} className="flex items-center gap-2">
                        <span className="text-sm w-6">{stars}</span>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full" 
                            style={{ width: `${(count / reviewStats.totalReviews) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-16">{count.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Reviews</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredReviews.map((review) => (
                <Card key={review.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <Avatar>
                          <AvatarImage src={review.user.avatar} />
                          <AvatarFallback>{review.user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{review.user.name}</span>
                            {review.user.verified && (
                              <Badge variant="secondary" className="text-xs">Verified</Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {review.user.reviewCount} reviews
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          {renderStars(review.rating)}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(review.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <Link 
                        to={`/restaurant/${review.restaurant.id}`}
                        className="font-semibold text-primary hover:underline flex items-center gap-2"
                      >
                        {review.restaurant.name}
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm text-muted-foreground font-normal">
                          {review.restaurant.location}
                        </span>
                      </Link>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">{review.title}</h3>
                      <p className="text-muted-foreground">{review.content}</p>
                    </div>
                    
                    {review.images.length > 0 && (
                      <div className="flex gap-2 overflow-x-auto">
                        {review.images.map((image, index) => (
                          <div key={index} className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
                            <img src={image} alt="Review" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          {review.likes}
                        </button>
                        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Reviews
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;