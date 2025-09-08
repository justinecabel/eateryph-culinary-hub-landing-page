import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { preloadCriticalResources, registerServiceWorker, trackWebVitals } from "./utils/performance";

// Initialize performance optimizations
preloadCriticalResources();
trackWebVitals();

// Register service worker for caching
registerServiceWorker();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
