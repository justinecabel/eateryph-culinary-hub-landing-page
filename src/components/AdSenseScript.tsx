import { useEffect } from 'react';

const AdSenseScript = () => {
  useEffect(() => {
    // Only load AdSense script if client ID is configured
    const clientId = import.meta.env.VITE_GOOGLE_ADS_CLIENT_ID;
    
    if (clientId && clientId !== 'your_google_ads_client_id_here') {
      // Check if script is already loaded
      const existingScript = document.querySelector('script[src*="adsbygoogle.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);

        // Initialize adsbygoogle array
        if (!window.adsbygoogle) {
          window.adsbygoogle = [];
        }
      }
    }
  }, []);

  return null;
};

export default AdSenseScript;