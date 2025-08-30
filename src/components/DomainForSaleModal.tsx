import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Mail, Phone, DollarSign } from "lucide-react";

interface DomainForSaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DomainForSaleModal = ({ isOpen, onClose }: DomainForSaleModalProps) => {
  const handleProceed = () => {
    onClose();
  };

  const handleContact = () => {
    window.location.href = "mailto:contact@eatery.ph?subject=Interested in purchasing eatery.ph";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
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
        </div>

        <DialogFooter className="flex-col sm:flex-col space-y-2">
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
  );
};

export default DomainForSaleModal;