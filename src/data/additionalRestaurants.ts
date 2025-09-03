import { Restaurant } from './restaurants';
import restaurantBicolano from "@/assets/restaurant-bicolano.jpg";
import restaurantCebuLechon from "@/assets/restaurant-cebu-lechon.jpg";
import restaurantKapampangan from "@/assets/restaurant-kapampangan.jpg";
import restaurantIlocano from "@/assets/restaurant-ilocano.jpg";
import restaurantDavao from "@/assets/restaurant-davao.jpg";
import restaurantBatangas from "@/assets/restaurant-batangas.jpg";
import restaurantZamboanga from "@/assets/restaurant-zamboanga.jpg";
import restaurantBaguio from "@/assets/restaurant-baguio.jpg";
import restaurantMaranao from "@/assets/restaurant-maranao.jpg";
import restaurantNegros from "@/assets/restaurant-negros.jpg";
import restaurantMalabon from "@/assets/restaurant-malabon.jpg";
import restaurantPaella from "@/assets/restaurant-paella.jpg";
import restaurantBinagoongan from "@/assets/restaurant-binagoongan.jpg";
import restaurantKapampanganDeluxe from "@/assets/restaurant-kapampangan-deluxe.jpg";
import restaurantBangus from "@/assets/restaurant-bangus.jpg";

export const additionalRestaurants: Restaurant[] = [
  {
    id: "11", name: "Bicol Express House", cuisine: "Bicolano", rating: 4.5, reviewCount: 312, priceRange: "₱₱", location: "Naga City", 
    description: "Authentic Bicolano cuisine with spicy coconut milk dishes.", image: restaurantBicolano, isOpen: true, deliveryTime: "35-45 mins",
    features: ["Delivery", "Pickup", "Spicy Specialties"], 
    menu: [
      { id: "m31", name: "Bicol Express", description: "Spicy pork in coconut milk with chilies", price: 220, category: "Main Course", isPopular: true },
      { id: "m32", name: "Laing", description: "Taro leaves in spicy coconut milk", price: 180, category: "Vegetables", isPopular: true }
    ],
    reviews: [{ id: "r13", userName: "Spice Lover", rating: 5, comment: "Perfect heat level! Authentic Bicolano flavors.", date: "2024-01-14" }]
  },
  {
    id: "12", name: "Cebu Lechon Express", cuisine: "Cebuano", rating: 4.9, reviewCount: 892, priceRange: "₱₱₱", location: "Cebu City",
    description: "Home of the world's best lechon, Cebu-style preparation.", image: restaurantCebuLechon, isOpen: true, deliveryTime: "60-90 mins",
    features: ["Delivery", "Catering", "Whole Lechon"], 
    menu: [
      { id: "m33", name: "Lechon Belly", description: "Crispy roasted pork belly, Cebu-style", price: 450, category: "Pork", isPopular: true },
      { id: "m34", name: "Lechon Kawali", description: "Deep-fried lechon pieces", price: 320, category: "Pork" }
    ],
    reviews: [{ id: "r14", userName: "Cebu Native", rating: 5, comment: "This is the real deal! Tastes like home.", date: "2024-01-15" }]
  },
  {
    id: "13", name: "Mang Tomas Sisig", cuisine: "Kapampangan", rating: 4.6, reviewCount: 543, priceRange: "₱₱", location: "Pampanga",
    description: "Kapampangan sisig specialists with authentic recipes.", image: restaurantKapampangan, isOpen: true, deliveryTime: "30-40 mins",
    features: ["Delivery", "Pickup", "Sizzling Plates"], 
    menu: [
      { id: "m35", name: "Pork Sisig", description: "Sizzling chopped pork with onions and egg", price: 180, category: "Sisig", isPopular: true },
      { id: "m36", name: "Bangus Sisig", description: "Milkfish sisig with crispy skin", price: 200, category: "Sisig", isPopular: true }
    ],
    reviews: [{ id: "r15", userName: "Sisig Expert", rating: 5, comment: "Best sisig outside of Pampanga!", date: "2024-01-13" }]
  },
  {
    id: "14", name: "Ilocos Empanada Corner", cuisine: "Ilocano", rating: 4.4, reviewCount: 267, priceRange: "₱", location: "Vigan",
    description: "Traditional Ilocano empanada and regional specialties.", image: restaurantIlocano, isOpen: true, deliveryTime: "25-35 mins",
    features: ["Pickup", "Delivery", "Fresh Made"], 
    menu: [
      { id: "m37", name: "Vigan Empanada", description: "Orange empanada with longganisa and egg", price: 45, category: "Snacks", isPopular: true },
      { id: "m38", name: "Bagnet", description: "Deep-fried crispy pork belly", price: 280, category: "Pork" }
    ],
    reviews: [{ id: "r16", userName: "Ilocano Pride", rating: 4, comment: "Authentic taste of Ilocos! The empanada is perfect.", date: "2024-01-12" }]
  },
  {
    id: "15", name: "Davao Durian Delights", cuisine: "Mindanaoan", rating: 4.3, reviewCount: 189, priceRange: "₱₱", location: "Davao City",
    description: "Exotic Mindanaoan fruits and regional specialties.", image: restaurantDavao, isOpen: true, deliveryTime: "45-60 mins",
    features: ["Delivery", "Exotic Fruits", "Regional Dishes"], 
    menu: [
      { id: "m39", name: "Durian Ice Cream", description: "Creamy durian-flavored ice cream", price: 120, category: "Desserts", isPopular: true },
      { id: "m40", name: "Kinilaw na Tuna", description: "Fresh tuna ceviche with vinegar and spices", price: 250, category: "Seafood" }
    ],
    reviews: [{ id: "r17", userName: "Fruit Explorer", rating: 4, comment: "Love the durian ice cream! Very creamy.", date: "2024-01-10" }]
  },
  {
    id: "16", name: "Taal Heritage Kitchen", cuisine: "Batangas", rating: 4.7, reviewCount: 398, priceRange: "₱₱₱", location: "Batangas",
    description: "Traditional Batangas cuisine with heritage recipes.", image: restaurantBatangas, isOpen: true, deliveryTime: "40-50 mins",
    features: ["Dine-in", "Heritage Recipes", "Coffee"], 
    menu: [
      { id: "m41", name: "Bulalo", description: "Beef bone marrow soup with vegetables", price: 350, category: "Soup", isPopular: true },
      { id: "m42", name: "Lomi Batangas", description: "Thick egg noodle soup with pork and egg", price: 150, category: "Noodles" }
    ],
    reviews: [{ id: "r18", userName: "Heritage Lover", rating: 5, comment: "The bulalo is incredible! Rich and flavorful.", date: "2024-01-11" }]
  },
  {
    id: "17", name: "Zamboanga Curacha House", cuisine: "Zamboangueño", rating: 4.5, reviewCount: 234, priceRange: "₱₱₱", location: "Zamboanga",
    description: "Fresh seafood and Zamboanga regional specialties.", image: restaurantZamboanga, isOpen: true, deliveryTime: "50-70 mins",
    features: ["Seafood Specialties", "Regional Cuisine"], 
    menu: [
      { id: "m43", name: "Curacha", description: "Spanner crab in rich sauce", price: 450, category: "Seafood", isPopular: true },
      { id: "m44", name: "Satti", description: "Grilled chicken satay with rice and sauce", price: 180, category: "Grilled" }
    ],
    reviews: [{ id: "r19", userName: "Seafood Enthusiast", rating: 5, comment: "Curacha is amazing! Fresh and perfectly cooked.", date: "2024-01-09" }]
  },
  {
    id: "18", name: "Baguio Strawberry Farm Cafe", cuisine: "Cordilleran", rating: 4.6, reviewCount: 456, priceRange: "₱₱", location: "Baguio",
    description: "Mountain cuisine with fresh strawberries and local ingredients.", image: restaurantBaguio, isOpen: true, deliveryTime: "35-45 mins",
    features: ["Fresh Strawberries", "Mountain View", "Local Ingredients"], 
    menu: [
      { id: "m45", name: "Strawberry Taho", description: "Soft tofu with fresh strawberry syrup", price: 60, category: "Desserts", isPopular: true },
      { id: "m46", name: "Pinikpikan", description: "Traditional Cordilleran chicken soup", price: 280, category: "Soup" }
    ],
    reviews: [{ id: "r20", userName: "Mountain Lover", rating: 4, comment: "Fresh strawberries are the best! Great mountain vibes.", date: "2024-01-08" }]
  },
  {
    id: "19", name: "Maranao Royal Kitchen", cuisine: "Maranao", rating: 4.4, reviewCount: 178, priceRange: "₱₱", location: "Marawi",
    description: "Royal Maranao cuisine with traditional spices and preparations.", image: restaurantMaranao, isOpen: true, deliveryTime: "45-60 mins",
    features: ["Halal Certified", "Royal Recipes", "Traditional Spices"], 
    menu: [
      { id: "m47", name: "Rendang", description: "Slow-cooked beef in rich coconut curry", price: 320, category: "Beef", isPopular: true },
      { id: "m48", name: "Pastil", description: "Steamed rice with shredded chicken", price: 80, category: "Rice Meals" }
    ],
    reviews: [{ id: "r21", userName: "Royal Taste", rating: 4, comment: "Authentic Maranao flavors! The rendang is exceptional.", date: "2024-01-07" }]
  },
  {
    id: "20", name: "Negros Muscovado Sweets", cuisine: "Negrense", rating: 4.5, reviewCount: 321, priceRange: "₱₱", location: "Bacolod",
    description: "Traditional Negrense sweets made with pure muscovado sugar.", image: restaurantNegros, isOpen: true, deliveryTime: "30-40 mins",
    features: ["Muscovado Sugar", "Traditional Sweets", "Natural Ingredients"], 
    menu: [
      { id: "m49", name: "Napoleones", description: "Flaky pastry with custard filling", price: 25, category: "Pastries", isPopular: true },
      { id: "m50", name: "Chicken Inasal", description: "Grilled chicken with annatto and calamansi", price: 180, category: "Chicken", isPopular: true }
    ],
    reviews: [{ id: "r22", userName: "Sweet Tooth", rating: 5, comment: "Napoleones are heavenly! Perfect sweetness.", date: "2024-01-06" }]
  },
  // Continue with 30 more restaurants for a total of 50
  {
    id: "21", name: "Pancit Malabon House", cuisine: "Noodles", rating: 4.6, reviewCount: 432, priceRange: "₱₱", location: "Malabon",
    description: "Specializing in authentic Pancit Malabon and regional noodle dishes.", image: restaurantMalabon, isOpen: true, deliveryTime: "25-35 mins",
    features: ["Authentic Recipe", "Seafood Toppings", "Family Servings"], 
    menu: [
      { id: "m51", name: "Pancit Malabon", description: "Thick rice noodles with seafood and egg toppings", price: 200, category: "Noodles", isPopular: true },
      { id: "m52", name: "Lugaw Special", description: "Rice porridge with chicken and egg", price: 80, category: "Porridge" }
    ],
    reviews: [{ id: "r23", userName: "Noodle Connoisseur", rating: 5, comment: "Best Pancit Malabon in the Metro! Generous seafood toppings.", date: "2024-01-15" }]
  },
  {
    id: "22", name: "Paelya Valencia", cuisine: "Spanish-Filipino", rating: 4.7, reviewCount: 289, priceRange: "₱₱₱", location: "Cagayan",
    description: "Spanish-influenced Filipino rice dishes and paella varieties.", image: restaurantPaella, isOpen: true, deliveryTime: "40-50 mins",
    features: ["Spanish-Filipino Fusion", "Large Servings", "Event Catering"], 
    menu: [
      { id: "m53", name: "Paella Valenciana", description: "Traditional Spanish paella with chicken and seafood", price: 450, category: "Rice Dishes", isPopular: true },
      { id: "m54", name: "Arroz Caldo", description: "Filipino rice porridge with chicken", price: 120, category: "Porridge" }
    ],
    reviews: [{ id: "r24", userName: "Paella Expert", rating: 5, comment: "Authentic paella! Perfect for family gatherings.", date: "2024-01-14" }]
  },
  {
    id: "23", name: "Binagoongan Paradise", cuisine: "Pork Specialties", rating: 4.3, reviewCount: 567, priceRange: "₱₱", location: "Bulacan",
    description: "Pork dishes in shrimp paste and traditional Filipino preparations.", image: restaurantBinagoongan, isOpen: true, deliveryTime: "30-40 mins",
    features: ["Pork Specialists", "Shrimp Paste Dishes", "Traditional Cooking"], 
    menu: [
      { id: "m55", name: "Binagoongang Baboy", description: "Pork cooked in shrimp paste with vegetables", price: 220, category: "Pork", isPopular: true },
      { id: "m56", name: "Dinuguan", description: "Pork blood stew with intestines", price: 180, category: "Pork" }
    ],
    reviews: [{ id: "r25", userName: "Traditional Eater", rating: 4, comment: "Great binagoongan! Reminds me of province cooking.", date: "2024-01-13" }]
  },
  {
    id: "24", name: "Kapampangan Delicacies", cuisine: "Kapampangan", rating: 4.8, reviewCount: 398, priceRange: "₱₱₱", location: "San Fernando",
    description: "Authentic Kapampangan cuisine known for rich flavors and unique dishes.", image: restaurantKapampanganDeluxe, isOpen: true, deliveryTime: "35-45 mins",
    features: ["Kapampangan Cuisine", "Rich Flavors", "Unique Dishes"], 
    menu: [
      { id: "m57", name: "Bringhe", description: "Kapampangan paella with glutinous rice", price: 250, category: "Rice Dishes", isPopular: true },
      { id: "m58", name: "Tocino del Cielo", description: "Custard dessert with caramel", price: 85, category: "Desserts" }
    ],
    reviews: [{ id: "r26", userName: "Kapampangan Food Lover", rating: 5, comment: "Authentic Kapampangan flavors! The bringhe is amazing.", date: "2024-01-12" }]
  },
  {
    id: "25", name: "Alaminos Bangus Festival", cuisine: "Seafood", rating: 4.5, reviewCount: 445, priceRange: "₱₱", location: "Alaminos",
    description: "Fresh bangus (milkfish) prepared in various traditional Filipino ways.", image: restaurantBangus, isOpen: true, deliveryTime: "35-45 mins",
    features: ["Fresh Bangus", "Multiple Preparations", "Coastal Cuisine"], 
    menu: [
      { id: "m59", name: "Daing na Bangus", description: "Marinated and fried milkfish", price: 180, category: "Seafood", isPopular: true },
      { id: "m60", name: "Bangus Belly", description: "Grilled bangus belly with soy sauce", price: 220, category: "Seafood", isPopular: true }
    ],
    reviews: [{ id: "r27", userName: "Fish Lover", rating: 4, comment: "Fresh bangus! The daing is perfectly seasoned.", date: "2024-01-11" }]
  }
  // Add 25 more restaurants to reach 50 total...
];