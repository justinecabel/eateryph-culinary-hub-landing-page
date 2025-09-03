import React, { useEffect } from 'react';

interface GoogleAdSenseProps {
  slot: string;
  style?: React.CSSProperties;
  className?: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const GoogleAdSense: React.FC<GoogleAdSenseProps> = ({
  slot,
  style = {},
  className = '',
  format = 'auto',
  responsive = true
}) => {
  useEffect(() => {
    try {
      // Push the ad to adsbygoogle array
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  // Get client ID from environment variable
  const clientId = import.meta.env.VITE_GOOGLE_ADS_CLIENT_ID || 'ca-pub-xxxxxxxxxxxxxxxx';

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          ...style
        }}
        data-ad-client={clientId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

export default GoogleAdSense;