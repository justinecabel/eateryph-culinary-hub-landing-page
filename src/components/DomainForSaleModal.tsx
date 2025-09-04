import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, Phone, DollarSign, Play, VolumeX } from "lucide-react";
import VideoAdModal from "@/components/VideoAdModal";
import { useState } from "react";

interface DomainForSaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DomainForSaleModal = ({ isOpen, onClose }: DomainForSaleModalProps) => {
  const [showVideoAd, setShowVideoAd] = useState(false);

  const handleProceed = () => {
    onClose();
  };

  const handleContact = () => {
    window.location.href = "mailto:youremail@domain.com?subject=Interested%20in%20purchasing%20eatery.ph%20domain&body=Hello,%20I%20am%20interested%20in%20purchasing%20the%20eatery.ph%20domain.%20Please%20provide%20more%20details%20about%20pricing%20and%20transfer%20process.";
  };

  const handleWatchAd = () => {
    setShowVideoAd(true);
  };

  const handleAdComplete = () => {
    setShowVideoAd(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-accent to-accent-glow rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              Domain For Sale
            </DialogTitle>
            <DialogDescription className="text-base">
              <span className="font-semibold text-accent">eatery.ph</span> is available for purchase
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-gradient-subtle p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium">Premium Domain</span>
                <Badge variant="secondary">
                  <DollarSign className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Perfect for restaurant and food industry businesses
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-card rounded-lg border">
                <div className="text-sm font-medium">Short & Memorable</div>
                <div className="text-xs text-muted-foreground">Easy to remember</div>
              </div>
              <div className="text-center p-3 bg-card rounded-lg border">
                <div className="text-sm font-medium">.ph Domain</div>
                <div className="text-xs text-muted-foreground">Philippines TLD</div>
              </div>
            </div>

            {/* Video Ad Section */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-orange-800">Sponsored Content</span>
                <Badge variant="outline" className="border-orange-300 text-orange-600">
                  <Play className="h-3 w-3 mr-1" />
                  Live
                </Badge>
              </div>
              
              {/* Auto-playing Video Box */}
              <div className="relative w-full h-32 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-2 mx-auto">
                      <Play className="h-6 w-6 text-white fill-white ml-1" />
                    </div>
                    <p className="text-sm font-semibold">GrabFood - 50% Off!</p>
                    <p className="text-xs opacity-90">Fast delivery nationwide</p>
                  </div>
                </div>
                
                {/* Video progress indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                  <div className="h-full bg-white w-1/3 animate-pulse"></div>
                </div>
                
                {/* Mute button */}
                <button className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition-colors">
                  <VolumeX className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-2">
            <Button onClick={handleContact} className="flex-1" variant="default">
              <Mail className="h-4 w-4 mr-2" />
              Contact for Purchase
            </Button>
            <Button onClick={handleProceed} variant="outline" className="flex-1">
              Continue Browsing Demo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <VideoAdModal 
        isOpen={showVideoAd} 
        onClose={() => setShowVideoAd(false)} 
        onComplete={handleAdComplete} 
      />
    </>
  );
};

export default DomainForSaleModal;