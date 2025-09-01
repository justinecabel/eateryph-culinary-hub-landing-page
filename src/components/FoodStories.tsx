import { useState, useEffect } from "react";
import { Heart, MessageCircle, Share2, X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AdContainer from "@/components/AdContainer";
import DomainForSaleModal from "@/components/DomainForSaleModal";
import VideoAdModal from "@/components/VideoAdModal";
import { useDomainForSale } from "@/hooks/useDomainForSale";

// Mock stories data - in real app this would come from API
const stories = [
  {
    id: 1,
    user: "FoodieManila",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 234,
    comments: 45,
    content: "Amazing adobo from Lola's Kitchen! The flavors are incredible 🇵🇭 #FilipinoCuisine #Adobo"
  },
  {
    id: 2,
    user: "ChefJuan",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: true,
    likes: 189,
    comments: 32,
    content: "Watch me prepare the perfect lechon! Traditional recipe passed down for generations 👨‍🍳"
  },
  {
    id: 3,
    user: "StreetFoodLover",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 456,
    comments: 78,
    content: "Street food paradise in Divisoria! Best fish balls in the city 🐟"
  },
  {
    id: 4,
    user: "DessertQueen",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 321,
    comments: 56,
    content: "Halo-halo perfection! All the layers and flavors you love ❄️🍧"
  },
  {
    id: 5,
    user: "LumpiaLove",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: true,
    likes: 278,
    comments: 41,
    content: "Crispy lumpia making process - so satisfying to watch! 🥢"
  },
  {
    id: 6,
    user: "SinigangSoul",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 392,
    comments: 67,
    content: "Nothing beats a warm bowl of sinigang on a rainy day 🌧️🍲"
  },
  {
    id: 7,
    user: "BakingBae",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 445,
    comments: 89,
    content: "Fresh pan de sal straight from the oven! The smell alone is heavenly 🥖"
  },
  {
    id: 8,
    user: "SeafoodMaster",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: true,
    likes: 367,
    comments: 52,
    content: "Grilled bangus belly marinated in soy sauce and calamansi 🐟🔥"
  },
  {
    id: 9,
    user: "RiceHaven",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 298,
    comments: 43,
    content: "Garlic rice paired with longsilog - breakfast of champions! 🍚🥓"
  },
  {
    id: 10,
    user: "FiestaCooks",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 512,
    comments: 95,
    content: "Fiesta spread featuring all Filipino favorites! Family gathering vibes 🎉"
  },
  {
    id: 11,
    user: "PicklePassion",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 234,
    comments: 38,
    content: "Homemade atchara - the perfect side dish for any meal! 🥒"
  },
  {
    id: 12,
    user: "SoupsAndStews",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: true,
    likes: 421,
    comments: 73,
    content: "Kare-kare cooking tutorial - rich peanut sauce perfection 🥜"
  },
  {
    id: 13,
    user: "GrillMaster",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 356,
    comments: 61,
    content: "BBQ chicken inasal with that perfect char! Negros-style cooking 🔥🍗"
  },
  {
    id: 14,
    user: "NoodleNinja",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 267,
    comments: 44,
    content: "Pancit canton loaded with vegetables and shrimp! Perfect for gatherings 🍜"
  },
  {
    id: 15,
    user: "TuronTime",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: true,
    likes: 389,
    comments: 57,
    content: "Crispy turon with banana and jackfruit - dessert goals! 🍌"
  },
  {
    id: 16,
    user: "CoffeeCorner",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 312,
    comments: 48,
    content: "Kapeng barako paired with bibingka - morning bliss ☕🥞"
  },
  {
    id: 17,
    user: "IceCreamDreams",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 445,
    comments: 82,
    content: "Dirty ice cream varieties from the neighborhood vendor! Childhood memories 🍦"
  },
  {
    id: 18,
    user: "FestivalFoods",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: true,
    likes: 523,
    comments: 98,
    content: "Sinukmani and other kakanin for Lenten season! Traditional Filipino sweets 🍯"
  },
  {
    id: 19,
    user: "HealthyEats",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 278,
    comments: 41,
    content: "Fresh tropical fruits salad with bagoong alamang dressing 🥭🥥"
  },
  {
    id: 20,
    user: "ComfortCooks",
    avatar: "/api/placeholder/50/50",
    image: "/api/placeholder/400/600",
    isVideo: false,
    likes: 398,
    comments: 66,
    content: "Chicken tinola with green papaya - comfort food at its finest! 🐔🍲"
  }
];

const FoodStories = () => {
  const [selectedStory, setSelectedStory] = useState<typeof stories[0] | null>(null);
  const [likedStories, setLikedStories] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoAd, setShowVideoAd] = useState(false);
  const { isModalOpen, showModal, hideModal } = useDomainForSale();

  // Auto-swipe functionality
  useEffect(() => {
    if (!selectedStory || selectedStory.isVideo) return;
    
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % stories.length);
    }, 5000); // Auto-swipe every 5 seconds for images only

    return () => clearInterval(timer);
  }, [selectedStory]);

  // Show video ad occasionally
  useEffect(() => {
    const shouldShowAd = Math.random() < 0.3; // 30% chance
    if (shouldShowAd && selectedStory) {
      const timer = setTimeout(() => setShowVideoAd(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [selectedStory]);

  const handleLike = (storyId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedStories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(storyId)) {
        newSet.delete(storyId);
      } else {
        newSet.add(storyId);
      }
      return newSet;
    });
  };

  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    showModal();
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    showModal();
  };

  const openStory = (story: typeof stories[0]) => {
    setSelectedStory(story);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Food Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing food moments shared by our community of Filipino food lovers
          </p>
        </div>

        {/* Stories Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-4 pb-4">
              {stories.map((story, index) => (
                <div key={story.id} className="flex-none w-64 sm:w-72">
                  {/* Ad Container every 6th item */}
                  {index > 0 && (index + 1) % 6 === 0 && (
                    <AdContainer size="rectangle" className="mb-4 h-80" />
                  )}
                  
                  <div 
                    className={`relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group transform hover:scale-105 transition-all duration-300 ${
                      index > 0 && (index + 1) % 6 === 0 ? 'h-80' : ''
                    }`}
                    onClick={() => openStory(story)}
                  >
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${story.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Video indicator */}
                    {story.isVideo && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                          <Play className="h-4 w-4 text-white fill-white" />
                        </div>
                      </div>
                    )}
                    
                    {/* User info */}
                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <div 
                        className="w-8 h-8 rounded-full bg-cover bg-center border-2 border-white"
                        style={{ backgroundImage: `url(${story.avatar})` }}
                      />
                      <span className="text-white text-sm font-medium truncate max-w-20">
                        {story.user}
                      </span>
                    </div>
                    
                    {/* Engagement */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button 
                            onClick={(e) => handleLike(story.id, e)}
                            className="flex items-center space-x-1 text-white hover:text-accent transition-colors"
                          >
                            <Heart 
                              className={`h-4 w-4 ${likedStories.has(story.id) ? 'fill-red-500 text-red-500' : ''}`} 
                            />
                            <span className="text-xs">
                              {story.likes + (likedStories.has(story.id) ? 1 : 0)}
                            </span>
                          </button>
                          <button 
                            onClick={handleComment}
                            className="flex items-center space-x-1 text-white hover:text-accent transition-colors"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-xs">{story.comments}</span>
                          </button>
                        </div>
                        <button 
                          onClick={handleShare}
                          className="text-white hover:text-accent transition-colors"
                        >
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ad Container at the end */}
        <div className="mt-8 flex justify-center">
          <AdContainer size="banner" />
        </div>
      </div>

      {/* Full Screen Story Modal */}
      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-lg w-full h-[90vh] p-0 bg-black border-0">
          {selectedStory && (
            <div className="relative h-full flex flex-col">
              {/* Close button */}
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              {/* Story image/video */}
              <div 
                className="flex-1 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedStory.image})` }}
              >
                {selectedStory.isVideo && (
                  <div className="flex items-center justify-center h-full">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Story info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white"
                    style={{ backgroundImage: `url(${selectedStory.avatar})` }}
                  />
                  <span className="text-white font-medium">{selectedStory.user}</span>
                </div>
                
                <p className="text-white text-sm mb-4">{selectedStory.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button 
                      onClick={(e) => handleLike(selectedStory.id, e)}
                      className="flex items-center space-x-2 text-white hover:text-accent transition-colors"
                    >
                      <Heart 
                        className={`h-6 w-6 ${likedStories.has(selectedStory.id) ? 'fill-red-500 text-red-500' : ''}`} 
                      />
                      <span>{selectedStory.likes + (likedStories.has(selectedStory.id) ? 1 : 0)}</span>
                    </button>
                    <button 
                      onClick={handleComment}
                      className="flex items-center space-x-2 text-white hover:text-accent transition-colors"
                    >
                      <MessageCircle className="h-6 w-6" />
                      <span>{selectedStory.comments}</span>
                    </button>
                  </div>
                  <button 
                    onClick={handleShare}
                    className="text-white hover:text-accent transition-colors"
                  >
                    <Share2 className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      <DomainForSaleModal isOpen={isModalOpen} onClose={hideModal} />
      <VideoAdModal 
        isOpen={showVideoAd} 
        onClose={() => setShowVideoAd(false)}
        onComplete={() => setShowVideoAd(false)}
      />
    </section>
  );
};

export default FoodStories;