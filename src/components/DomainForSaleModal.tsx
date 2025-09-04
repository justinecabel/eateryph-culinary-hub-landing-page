import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, Phone, DollarSign, Play } from "lucide-react";
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
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-orange-800">Sponsored Content</span>
                <Badge variant="outline" className="border-orange-300 text-orange-600">
                  <Play className="h-3 w-3 mr-1" />
                  Video
                </Badge>
              </div>
              <p className="text-sm text-orange-700 mb-3">
                Watch a short ad to support our platform
              </p>
              <Button 
                onClick={handleWatchAd} 
                variant="outline" 
                className="w-full border-orange-300 text-orange-600 hover:bg-orange-50"
              >
                <Play className="h-4 w-4 mr-2" />
                Watch Advertisement
              </Button>
            </div>
          </div>

          <DialogFooter className="flex-col space-y-2">
            <Button onClick={handleContact} className="w-full" variant="default">
              <Mail className="h-4 w-4 mr-2" />
              Contact for Purchase
            </Button>
            <Button onClick={handleProceed} variant="outline" className="w-full">
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