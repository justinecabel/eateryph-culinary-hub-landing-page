import { useState, useEffect } from 'react';
import { X, Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoAdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const VideoAdModal = ({ isOpen, onClose, onComplete }: VideoAdModalProps) => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [canSkip, setCanSkip] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(15);
      setCanSkip(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setCanSkip(true);
          onComplete();
          return 0;
        }
        if (prev === 6) {
          setCanSkip(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  const videoAds = [
    {
      title: "GrabFood Philippines",
      description: "Fastest food delivery in Metro Manila. Order now and get 50% off!",
      videoUrl: "#",
      brand: "GrabFood"
    },
    {
      title: "Jollibee Delivery",
      description: "Langhap-sarap delivered to your doorstep. Free delivery on orders over ₱500!",
      videoUrl: "#",
      brand: "Jollibee"
    },
    {
      title: "Shopee Food",
      description: "Fresh groceries and restaurant meals. Same-day delivery guaranteed!",
      videoUrl: "#",
      brand: "Shopee Food"
    }
  ];

  const currentAd = videoAds[Math.floor(Math.random() * videoAds.length)];

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
        {/* Skip Button */}
        {canSkip && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Skip Ad
          </button>
        )}

        {/* Timer */}
        {!canSkip && (
          <div className="absolute top-4 right-4 z-20 bg-black/70 text-white px-3 py-2 rounded-lg text-sm">
            Ad ends in {timeLeft}s
          </div>
        )}

        {/* Video Content */}
        <div className="relative w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center">
          {/* Mock video player */}
          <div className="text-center text-white p-8">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Play className="h-12 w-12 text-white fill-white ml-2" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{currentAd.title}</h2>
            <p className="text-xl mb-8 max-w-md">{currentAd.description}</p>
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Order Now - 50% Off!
            </Button>
          </div>

          {/* Brand Logo */}
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded text-black font-bold">
            {currentAd.brand}
          </div>

          {/* Audio Control */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-white transition-all duration-1000 ease-linear" 
            style={{ width: `${((15 - timeLeft) / 15) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoAdModal;