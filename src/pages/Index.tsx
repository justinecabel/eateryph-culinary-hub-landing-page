import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FoodStories from "@/components/FoodStories";
import CuisineCategories from "@/components/CuisineCategories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { generateWebsiteStructuredData, generateOrganizationStructuredData, generateFAQStructuredData } from "@/utils/structuredData";

const Index = () => {
  const structuredData = [
    generateWebsiteStructuredData(),
    generateOrganizationStructuredData(),
    generateFAQStructuredData()
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="eatery.ph - Discover the Best Filipino Restaurants | Authentic Philippine Cuisine"
        description="Find the best Filipino restaurants in the Philippines. Explore authentic regional cuisines, read reviews, and discover hidden gems from Luzon to Mindanao. Your ultimate guide to Philippine dining."
        keywords="Filipino restaurants Philippines, best Filipino food, authentic Philippine cuisine, Manila restaurants, Cebu dining, Davao food, Filipino restaurant reviews, regional Filipino dishes, Philippine food guide, traditional Filipino meals"
        canonical="https://eatery.ph/"
        structuredData={structuredData}
      />
      <Navigation />
      <main>
        <Hero />
        <FoodStories />
        <CuisineCategories />
        <FeaturedRestaurants />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
