import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AdSenseScript from "@/components/AdSenseScript";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RestaurantListing from "./pages/RestaurantListing";
import RestaurantDetail from "./pages/RestaurantDetail";
import Restaurants from "./pages/Restaurants";
import Locations from "./pages/Locations";
import Reviews from "./pages/Reviews";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdSenseScript />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/restaurants" element={<RestaurantListing />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
