interface AdContainerProps {
  className?: string;
  size?: 'banner' | 'square' | 'rectangle';
}

const AdContainer = ({ className = "", size = 'banner' }: AdContainerProps) => {
  const sizeClasses = {
    banner: 'h-24 w-full',
    square: 'h-48 w-48',
    rectangle: 'h-48 w-full'
  };

  // Realistic ad placeholders
  const adContent = {
    banner: [
      {
        title: "FoodPanda - Order Now!",
        description: "Get 50% off your first order. Fast delivery in Metro Manila.",
        cta: "Order Food",
        color: "from-pink-500 to-purple-600",
        image: ""
      },
      {
        title: "Grab Food Delivery",
        description: "Free delivery for orders over ₱200. Download the app now!",
        cta: "Download App",
        color: "from-green-500 to-emerald-600",
        image: ""
      },
      {
        title: "Shopee Food",
        description: "Fresh groceries delivered to your door. Same day delivery!",
        cta: "Shop Now",
        color: "from-orange-500 to-red-500",
        image: ""
      }
    ],
    square: [
      {
        title: "Max's Restaurant",
        description: "The House That Fried Chicken Built. Try our famous fried chicken today!",
        cta: "Visit Us",
        color: "from-red-600 to-yellow-500",
        image: "🍗"
      },
      {
        title: "Jollibee Delivery",
        description: "Langhap-sarap! Order your favorite Chickenjoy now with free delivery.",
        cta: "Order Now",
        color: "from-red-500 to-orange-500",
        image: "🍔"
      },
      {
        title: "Goldilocks Cakes",
        description: "Fresh cakes and pastries for every celebration. Order online!",
        cta: "Order Cakes",
        color: "from-yellow-500 to-orange-400",
        image: "🎂"
      }
    ],
    rectangle: [
      {
        title: "SM Supermarket",
        description: "Fresh ingredients for your Filipino dishes. Shop online or visit our stores nationwide.",
        cta: "Shop Groceries",
        color: "from-blue-600 to-cyan-500",
        image: "🛒"
      },
      {
        title: "Cooking Classes",
        description: "Learn authentic Filipino cooking! Join Chef Maria's online cooking classes.",
        cta: "Enroll Now",
        color: "from-purple-600 to-pink-500",
        image: "👩‍🍳"
      },
      {
        title: "Kitchen Equipment",
        description: "Professional kitchen tools for Filipino cooking. Free shipping nationwide!",
        cta: "Shop Tools",
        color: "from-gray-600 to-slate-500",
        image: "🔪"
      }
    ]
  };

  // Randomly select an ad for variety
  const randomAd = adContent[size][Math.floor(Math.random() * adContent[size].length)];

  return (
    <div className={`${sizeClasses[size]} ${className} bg-gradient-to-r ${randomAd.color} rounded-lg overflow-hidden shadow-lg border border-white/20 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
      <div className="h-full flex flex-col justify-between p-4 text-white relative">
        {/* Ad label */}
        <div className="absolute top-1 right-1 bg-black/30 text-xs px-2 py-1 rounded text-white/80">
          Ad
        </div>
        
        {size === 'banner' ? (
          // Banner layout
          <div className="flex items-center justify-between h-full">
            <div className="flex-1">
              <h3 className="font-bold text-sm mb-1">{randomAd.title}</h3>
              <p className="text-xs opacity-90 line-clamp-2">{randomAd.description}</p>
            </div>
            <button className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded text-sm font-medium transition-colors ml-4">
              {randomAd.cta}
            </button>
          </div>
        ) : (
          // Square/Rectangle layout
          <div className="h-full flex flex-col justify-between">
            <div className="text-center">
              {size === 'square' && randomAd.image && (
                <div className="text-4xl mb-2">{randomAd.image}</div>
              )}
              <h3 className="font-bold text-lg mb-2">{randomAd.title}</h3>
              <p className="text-sm opacity-90 mb-4">{randomAd.description}</p>
            </div>
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded font-medium transition-colors self-center">
              {randomAd.cta}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdContainer;