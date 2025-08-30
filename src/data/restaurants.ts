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

export const restaurants: Restaurant[] = [
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
      {
        id: "m1",
        name: "Ube Ice Cream",
        description: "Creamy purple yam ice cream with real ube chunks",
        price: 85,
        category: "Ice Cream",
        isPopular: true
      },
      {
        id: "m2",
        name: "Halo-Halo Special",
        description: "Traditional Filipino shaved ice dessert with mixed ingredients",
        price: 120,
        category: "Desserts",
        isPopular: true
      },
      {
        id: "m3",
        name: "Mais con Yelo",
        description: "Sweet corn with shaved ice and milk",
        price: 65,
        category: "Desserts"
      }
    ],
    reviews: [
      {
        id: "r1",
        userName: "Maria Santos",
        rating: 5,
        comment: "Best ube ice cream in the city! Authentic taste and creamy texture.",
        date: "2024-01-15"
      },
      {
        id: "r2",
        userName: "Juan dela Cruz",
        rating: 5,
        comment: "Their halo-halo brings back childhood memories. Highly recommended!",
        date: "2024-01-12"
      }
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
      {
        id: "m4",
        name: "Adobo Combo",
        description: "Classic pork and chicken adobo with rice",
        price: 180,
        category: "Main Course",
        isPopular: true
      },
      {
        id: "m5",
        name: "Sinigang na Baboy",
        description: "Tamarind-based pork soup with vegetables",
        price: 220,
        category: "Soup"
      },
      {
        id: "m6",
        name: "Lechon Kawali",
        description: "Crispy pork belly with liver sauce",
        price: 250,
        category: "Main Course",
        isPopular: true
      }
    ],
    reviews: [
      {
        id: "r3",
        userName: "Ana Reyes",
        rating: 5,
        comment: "Tastes exactly like my grandmother's cooking. Amazing flavors!",
        date: "2024-01-14"
      }
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
      {
        id: "m7",
        name: "Balut",
        description: "Traditional duck embryo delicacy",
        price: 25,
        category: "Street Food"
      },
      {
        id: "m8",
        name: "Isaw",
        description: "Grilled chicken intestines on skewers",
        price: 15,
        category: "Street Food",
        isPopular: true
      },
      {
        id: "m9",
        name: "Fish Ball",
        description: "Deep-fried fish balls with sweet or spicy sauce",
        price: 20,
        category: "Street Food",
        isPopular: true
      }
    ],
    reviews: [
      {
        id: "r4",
        userName: "Rico Suave",
        rating: 4,
        comment: "Great late-night food option. The isaw is perfectly grilled!",
        date: "2024-01-13"
      }
    ]
  }
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