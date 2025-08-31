import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FoodStories from "@/components/FoodStories";
import CuisineCategories from "@/components/CuisineCategories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
