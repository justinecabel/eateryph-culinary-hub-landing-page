export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  location: string;
  description: string;
  image: string;
  isOpen: boolean;
  deliveryTime: string;
  features: string[];
  menu: MenuItem[];
  reviews: Review[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  isPopular?: boolean;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}

import { additionalRestaurants } from './additionalRestaurants';

export const restaurants: Restaurant[] = [
  // First 10 main restaurants
  {
    id: "1",
    name: "Mamang Sorbetero",
    cuisine: "Filipino Desserts",
    rating: 4.8,
    reviewCount: 342,
    priceRange: "₱₱",
    location: "Quezon City",
    description: "Authentic Filipino ice cream and traditional desserts made with love and local ingredients.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "20-30 mins",
    features: ["Delivery", "Pickup", "Dine-in"],
    menu: [
      { id: "m1", name: "Ube Ice Cream", description: "Creamy purple yam ice cream with real ube chunks", price: 85, category: "Ice Cream", isPopular: true },
      { id: "m2", name: "Halo-Halo Special", description: "Traditional Filipino shaved ice dessert with mixed ingredients", price: 120, category: "Desserts", isPopular: true },
      { id: "m3", name: "Mais con Yelo", description: "Sweet corn with shaved ice and milk", price: 65, category: "Desserts" }
    ],
    reviews: [
      { id: "r1", userName: "Maria Santos", rating: 5, comment: "Best ube ice cream in the city! Authentic taste and creamy texture.", date: "2024-01-15" },
      { id: "r2", userName: "Juan dela Cruz", rating: 5, comment: "Their halo-halo brings back childhood memories. Highly recommended!", date: "2024-01-12" }
    ]
  },
  {
    id: "2",
    name: "Lola's Kitchen",
    cuisine: "Filipino Home Cooking",
    rating: 4.6,
    reviewCount: 189,
    priceRange: "₱₱",
    location: "Manila",
    description: "Traditional Filipino home-cooked meals just like grandma used to make.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "25-35 mins",
    features: ["Delivery", "Pickup", "Catering"],
    menu: [
      { id: "m4", name: "Adobo Combo", description: "Classic pork and chicken adobo with rice", price: 180, category: "Main Course", isPopular: true },
      { id: "m5", name: "Sinigang na Baboy", description: "Tamarind-based pork soup with vegetables", price: 220, category: "Soup" },
      { id: "m6", name: "Lechon Kawali", description: "Crispy pork belly with liver sauce", price: 250, category: "Main Course", isPopular: true }
    ],
    reviews: [
      { id: "r3", userName: "Ana Reyes", rating: 5, comment: "Tastes exactly like my grandmother's cooking. Amazing flavors!", date: "2024-01-14" }
    ]
  },
  {
    id: "3",
    name: "Streetfood Paradise",
    cuisine: "Street Food",
    rating: 4.4,
    reviewCount: 567,
    priceRange: "₱",
    location: "Makati",
    description: "Authentic Filipino street food experience with all your favorites.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "15-25 mins",
    features: ["Delivery", "Pickup", "Late Night"],
    menu: [
      { id: "m7", name: "Balut", description: "Traditional duck embryo delicacy", price: 25, category: "Street Food" },
      { id: "m8", name: "Isaw", description: "Grilled chicken intestines on skewers", price: 15, category: "Street Food", isPopular: true },
      { id: "m9", name: "Fish Ball", description: "Deep-fried fish balls with sweet or spicy sauce", price: 20, category: "Street Food", isPopular: true }
    ],
    reviews: [
      { id: "r4", userName: "Rico Suave", rating: 4, comment: "Great late-night food option. The isaw is perfectly grilled!", date: "2024-01-13" }
    ]
  },
  // Additional 47 restaurants
  {
    id: "4",
    name: "Kamayan sa Palaisdaan",
    cuisine: "Seafood",
    rating: 4.7,
    reviewCount: 456,
    priceRange: "₱₱₱",
    location: "Antipolo",
    description: "Fresh seafood restaurant with scenic views and kamayan-style dining experience.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "45-60 mins",
    features: ["Dine-in", "Catering", "Events"],
    menu: [
      { id: "m10", name: "Grilled Bangus", description: "Grilled milkfish stuffed with tomatoes and onions", price: 350, category: "Seafood", isPopular: true },
      { id: "m11", name: "Crispy Pata", description: "Deep-fried pork leg served with soy-vinegar dipping sauce", price: 650, category: "Pork" },
      { id: "m12", name: "Lapu-Lapu Escabeche", description: "Sweet and sour fish with vegetables", price: 450, category: "Seafood" }
    ],
    reviews: [
      { id: "r5", userName: "Family Foodie", rating: 5, comment: "Perfect place for family gatherings! Fresh fish and great ambiance.", date: "2024-01-10" },
      { id: "r6", userName: "Seafood Lover", rating: 4, comment: "The grilled bangus is exceptional. Will definitely come back!", date: "2024-01-08" }
    ]
  },
  {
    id: "5",
    name: "Tita Ching's Carinderia",
    cuisine: "Filipino Comfort Food",
    rating: 4.3,
    reviewCount: 234,
    priceRange: "₱",
    location: "Taguig",
    description: "No-frills carinderia serving hearty Filipino comfort food at affordable prices.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "20-30 mins",
    features: ["Delivery", "Pickup", "Budget-Friendly"],
    menu: [
      { id: "m13", name: "Kare-Kare", description: "Oxtail stew in peanut sauce with vegetables", price: 180, category: "Main Course", isPopular: true },
      { id: "m14", name: "Pinakbet", description: "Mixed vegetables with shrimp paste", price: 120, category: "Vegetables" },
      { id: "m15", name: "Bistek Tagalog", description: "Filipino beef steak with onions", price: 160, category: "Beef" }
    ],
    reviews: [
      { id: "r7", userName: "Budget Eater", rating: 4, comment: "Great value for money! Tastes like home cooking.", date: "2024-01-05" }
    ]
  },
  {
    id: "6",
    name: "Barbecue King",
    cuisine: "Grilled Specialties",
    rating: 4.5,
    reviewCount: 678,
    priceRange: "₱₱",
    location: "Pasig",
    description: "The ultimate destination for perfectly grilled Filipino barbecue and ihaw-ihaw.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "30-40 mins",
    features: ["Delivery", "Pickup", "Dine-in", "Late Night"],
    menu: [
      { id: "m16", name: "Pork BBQ", description: "Sweet and savory grilled pork skewers", price: 25, category: "Grilled", isPopular: true },
      { id: "m17", name: "Chicken Inasal", description: "Grilled chicken marinated in calamansi and spices", price: 150, category: "Chicken", isPopular: true },
      { id: "m18", name: "Grilled Liempo", description: "Grilled pork belly with rice and pickles", price: 200, category: "Pork" }
    ],
    reviews: [
      { id: "r8", userName: "Grill Master", rating: 5, comment: "Best barbecue in the area! Perfect char and flavor.", date: "2024-01-12" }
    ]
  },
  {
    id: "7",
    name: "Pancit House Extraordinaire",
    cuisine: "Noodles",
    rating: 4.4,
    reviewCount: 345,
    priceRange: "₱₱",
    location: "San Juan",
    description: "Specializing in all varieties of Filipino noodle dishes from different regions.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "25-35 mins",
    features: ["Delivery", "Pickup", "Catering"],
    menu: [
      { id: "m19", name: "Pancit Canton", description: "Stir-fried wheat noodles with vegetables and meat", price: 180, category: "Noodles", isPopular: true },
      { id: "m20", name: "Palabok", description: "Rice noodles with shrimp sauce and toppings", price: 150, category: "Noodles", isPopular: true },
      { id: "m21", name: "Sotanghon Guisado", description: "Stir-fried glass noodles with vegetables", price: 160, category: "Noodles" }
    ],
    reviews: [
      { id: "r9", userName: "Noodle Lover", rating: 4, comment: "Authentic flavors! The palabok is exceptional.", date: "2024-01-09" }
    ]
  },
  {
    id: "8",
    name: "Kakanin Corner",
    cuisine: "Filipino Sweets",
    rating: 4.6,
    reviewCount: 289,
    priceRange: "₱",
    location: "Marikina",
    description: "Traditional Filipino rice cakes and native delicacies made fresh daily.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "20-30 mins",
    features: ["Pickup", "Delivery", "Wholesale"],
    menu: [
      { id: "m22", name: "Bibingka", description: "Rice cake topped with cheese and salted egg", price: 60, category: "Rice Cake", isPopular: true },
      { id: "m23", name: "Suman", description: "Glutinous rice cake with latik and brown sugar", price: 40, category: "Rice Cake" },
      { id: "m24", name: "Biko", description: "Sweet sticky rice cake with coconut caramel", price: 80, category: "Rice Cake", isPopular: true }
    ],
    reviews: [
      { id: "r10", userName: "Sweet Tooth", rating: 5, comment: "Best kakanin in the city! Fresh and authentic.", date: "2024-01-07" }
    ]
  },
  {
    id: "9",
    name: "Silog Central",
    cuisine: "Rice Meals",
    rating: 4.2,
    reviewCount: 567,
    priceRange: "₱",
    location: "Pasay",
    description: "24/7 silog specialist serving all your favorite Filipino breakfast combinations.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "15-25 mins",
    features: ["Delivery", "Pickup", "24/7", "Budget-Friendly"],
    menu: [
      { id: "m25", name: "Tapsilog", description: "Beef tapa, garlic rice, and fried egg", price: 120, category: "Rice Meals", isPopular: true },
      { id: "m26", name: "Longsilog", description: "Longganisa, garlic rice, and fried egg", price: 110, category: "Rice Meals", isPopular: true },
      { id: "m27", name: "Bangsilog", description: "Bangus, garlic rice, and fried egg", price: 140, category: "Rice Meals" }
    ],
    reviews: [
      { id: "r11", userName: "Early Bird", rating: 4, comment: "Perfect for breakfast anytime! Great value.", date: "2024-01-11" }
    ]
  },
  {
    id: "10",
    name: "Lutong Bahay ni Nanay",
    cuisine: "Filipino Home Cooking",
    rating: 4.8,
    reviewCount: 423,
    priceRange: "₱₱",
    location: "Caloocan",
    description: "Authentic home-style Filipino cooking with recipes passed down through generations.",
    image: "/api/placeholder/400/300",
    isOpen: true,
    deliveryTime: "30-40 mins",
    features: ["Delivery", "Pickup", "Family-Style"],
    menu: [
      { id: "m28", name: "Chicken Tinola", description: "Chicken soup with ginger, papaya, and chili leaves", price: 200, category: "Soup", isPopular: true },
      { id: "m29", name: "Pork Menudo", description: "Pork stew with liver, potatoes, and tomato sauce", price: 180, category: "Pork" },
      { id: "m30", name: "Ginisang Ampalaya", description: "Sautéed bitter melon with eggs", price: 120, category: "Vegetables" }
    ],
    reviews: [
      { id: "r12", userName: "Homesick OFW", rating: 5, comment: "Tastes exactly like my mother's cooking! So comforting.", date: "2024-01-13" }
    ]
  },
  // Import additional restaurants from separate file
  ...additionalRestaurants
];

export const cuisines = [
  "All",
  "Filipino",
  "Asian",
  "Street Food",
  "Seafood",
  "Desserts",
  "Grilled",
  "Soup",
  "Noodles",
  "Rice Meals"
];

export const getRestaurantById = (id: string) => {
  return restaurants.find(restaurant => restaurant.id === id);
};

export const getRestaurantsByCuisine = (cuisine: string) => {
  if (cuisine === "All") return restaurants;
  return restaurants.filter(restaurant => 
    restaurant.cuisine.toLowerCase().includes(cuisine.toLowerCase())
  );
};