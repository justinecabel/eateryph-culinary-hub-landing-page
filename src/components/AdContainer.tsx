interface AdContainerProps {
  className?: string;
  size?: 'banner' | 'square' | 'rectangle';
}

const AdContainer = ({ className = "", size = 'banner' }: AdContainerProps) => {
  const sizeClasses = {
    banner: 'h-24 w-full',
    square: 'h-64 w-64',
    rectangle: 'h-48 w-full'
  };

  const clientId = import.meta.env.VITE_GOOGLE_ADS_CLIENT_ID;
  const slotId = import.meta.env.VITE_GOOGLE_ADS_SLOT_ID;

  return (
    <div className={`${sizeClasses[size]} ${className} bg-muted/30 border border-border rounded-lg flex items-center justify-center`}>
      {clientId && slotId ? (
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Advertisement</div>
          {/* Google AdSense code would go here */}
          <div className="text-xs text-muted-foreground">
            Ad Space: {clientId}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-sm text-muted-foreground mb-2">Advertisement Space</div>
          <div className="text-xs text-muted-foreground">
            Configure ads in .env file
          </div>
        </div>
      )}
    </div>
  );
};

export default AdContainer;