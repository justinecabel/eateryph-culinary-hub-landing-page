import { Restaurant } from "@/data/restaurants";

export const generateWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "eatery.ph",
  url: "https://eatery.ph",
  description: "Discover authentic Filipino restaurants, read reviews, and explore the rich culinary heritage of the Philippines.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://eatery.ph/restaurants?search={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  publisher: {
    "@type": "Organization",
    name: "eatery.ph",
    url: "https://eatery.ph",
    logo: {
      "@type": "ImageObject",
      url: "https://eatery.ph/logo.png"
    }
  }
});

export const generateOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "eatery.ph",
  url: "https://eatery.ph",
  logo: "https://eatery.ph/logo.png",
  description: "The Philippines' premier restaurant discovery platform featuring authentic Filipino cuisine.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+63-2-123-4567",
    contactType: "customer service",
    areaServed: "PH",
    availableLanguage: ["English", "Filipino"]
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Philippines",
    addressRegion: "Metro Manila"
  },
  sameAs: [
    "https://facebook.com/eateryph",
    "https://instagram.com/eateryph",
    "https://twitter.com/eateryph"
  ]
});

export const generateRestaurantStructuredData = (restaurant: Restaurant) => ({
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  description: restaurant.description,
  image: restaurant.image,
  url: `https://eatery.ph/restaurant/${restaurant.id}`,
  telephone: "+63-2-XXX-XXXX", // Would be actual restaurant phone
  address: {
    "@type": "PostalAddress",
    addressLocality: restaurant.location,
    addressCountry: "Philippines"
  },
  servesCuisine: restaurant.cuisine,
  priceRange: restaurant.priceRange,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: restaurant.rating,
    reviewCount: restaurant.reviewCount,
    bestRating: 5,
    worstRating: 1
  },
  review: restaurant.reviews.map(review => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.userName
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1
    },
    reviewBody: review.comment,
    datePublished: review.date
  })),
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Main Menu",
      hasMenuItem: restaurant.menu.map(item => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "PHP"
        }
      }))
    }
  },
  openingHours: restaurant.isOpen ? "Mo-Su 08:00-22:00" : "",
  acceptsReservations: true
});

export const generateBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const generateLocalBusinessStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://eatery.ph/#organization",
  name: "eatery.ph",
  image: "https://eatery.ph/logo.png",
  description: "Philippines' leading restaurant discovery platform",
  url: "https://eatery.ph",
  telephone: "+63-2-123-4567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Food Street",
    addressLocality: "Manila",
    addressRegion: "Metro Manila",
    postalCode: "1000",
    addressCountry: "PH"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.6091,
    longitude: 121.0223
  },
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [
    "https://facebook.com/eateryph",
    "https://instagram.com/eateryph",
    "https://twitter.com/eateryph"
  ]
});

export const generateFAQStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I find the best Filipino restaurants near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use our search feature to find authentic Filipino restaurants in your area. Filter by cuisine type, rating, price range, and location to discover the perfect dining experience."
      }
    },
    {
      "@type": "Question",
      name: "Can I make reservations through eatery.ph?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many of our partner restaurants accept reservations. Look for the 'Book Table' button on restaurant pages to make your reservation directly."
      }
    },
    {
      "@type": "Question",
      name: "Do you feature restaurants from all over the Philippines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We feature restaurants from Metro Manila, Cebu, Davao, Baguio, and many other cities across the Philippines, showcasing the diverse regional cuisines of our country."
      }
    }
  ]
});