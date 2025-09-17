// Asset Configuration - Change BASE_URL to switch between local and external sources
const BASE_URL = "https://cdn.jsdelivr.net/gh/justinecabel/eateryph-culinary-hub-landing-page/"; // Empty for local assets, or use GitHub/CDN URL like "https://raw.githubusercontent.com/username/repo/main"

// Helper function to get asset URL
const getAssetUrl = (path: string) => BASE_URL ? `${BASE_URL}/${path}` : path;

// Restaurant Images
export const restaurantImages = {
  restaurant1: getAssetUrl("src/assets/restaurant-1.jpg"),
  restaurant2: getAssetUrl("src/assets/restaurant-2.jpg"),
  restaurant3: getAssetUrl("src/assets/restaurant-3.jpg"),
  restaurantBaguio: getAssetUrl("src/assets/restaurant-baguio.jpg"),
  restaurantBangus: getAssetUrl("src/assets/restaurant-bangus.jpg"),
  restaurantBatangas: getAssetUrl("src/assets/restaurant-batangas.jpg"),
  restaurantBbq: getAssetUrl("src/assets/restaurant-bbq.jpg"),
  restaurantBicolano: getAssetUrl("src/assets/restaurant-bicolano.jpg"),
  restaurantBinagoongan: getAssetUrl("src/assets/restaurant-binagoongan.jpg"),
  restaurantCarinderia: getAssetUrl("src/assets/restaurant-carinderia.jpg"),
  restaurantCebuLechon: getAssetUrl("src/assets/restaurant-cebu-lechon.jpg"),
  restaurantDavao: getAssetUrl("src/assets/restaurant-davao.jpg"),
  restaurantIlocano: getAssetUrl("src/assets/restaurant-ilocano.jpg"),
  restaurantInterior: getAssetUrl("src/assets/restaurant-interior.jpg"),
  restaurantKakanin: getAssetUrl("src/assets/restaurant-kakanin.jpg"),
  restaurantKapampangan: getAssetUrl("src/assets/restaurant-kapampangan.jpg"),
  restaurantKapampanganDeluxe: getAssetUrl("src/assets/restaurant-kapampangan-deluxe.jpg"),
  restaurantLutongBahay: getAssetUrl("src/assets/restaurant-lutong-bahay.jpg"),
  restaurantMalabon: getAssetUrl("src/assets/restaurant-malabon.jpg"),
  restaurantMaranao: getAssetUrl("src/assets/restaurant-maranao.jpg"),
  restaurantNegros: getAssetUrl("src/assets/restaurant-negros.jpg"),
  restaurantNoodles: getAssetUrl("src/assets/restaurant-noodles.jpg"),
  restaurantPaella: getAssetUrl("src/assets/restaurant-paella.jpg"),
  restaurantSilog: getAssetUrl("src/assets/restaurant-silog.jpg"),
  restaurantZamboanga: getAssetUrl("src/assets/restaurant-zamboanga.jpg"),
};

// Food Images
export const foodImages = {
  heroFood: getAssetUrl("src/assets/hero-food.jpg"),
  chefCooking: getAssetUrl("src/assets/chef-cooking.jpg"),
  filipinoAdobo: getAssetUrl("src/assets/filipino-adobo.jpg"),
  filipinoHalohalo: getAssetUrl("src/assets/filipino-halohalo.jpg"),
  filipinoLechon: getAssetUrl("src/assets/filipino-lechon.jpg"),
  filipinoLumpia: getAssetUrl("src/assets/filipino-lumpia.jpg"),
  filipinoSinigang: getAssetUrl("src/assets/filipino-sinigang.jpg"),
  foodKarekare: getAssetUrl("src/assets/food-karekare.jpg"),
  foodPancit: getAssetUrl("src/assets/food-pancit.jpg"),
  foodSisig: getAssetUrl("src/assets/food-sisig.jpg"),
};

// Location Images
export const locationImages = {
  metroManila: getAssetUrl("src/assets/location-metro-manila.jpg"),
  cebuCity: getAssetUrl("src/assets/location-cebu-city.jpg"),
  davaoCity: getAssetUrl("src/assets/location-davao-city.jpg"),
  baguioCity: getAssetUrl("src/assets/location-baguio-city.jpg"),
  iloiloCity: getAssetUrl("src/assets/location-iloilo-city.jpg"),
  cagayanDeOro: getAssetUrl("src/assets/location-cagayan-de-oro.jpg"),
};

// Team Images
export const teamImages = {
  juanDelacruz: getAssetUrl("src/assets/team-juan-delacruz.jpg"),
  mariaGarcia: getAssetUrl("src/assets/team-maria-garcia.jpg"),
  carlosSantos: getAssetUrl("src/assets/team-carlos-santos.jpg"),
};

// Reviewer Images
export const reviewerImages = {
  mariaSantos: getAssetUrl("src/assets/reviewer-maria-santos.jpg"),
  johnDeguzman: getAssetUrl("src/assets/reviewer-john-deguzman.jpg"),
  annaReyes: getAssetUrl("src/assets/reviewer-anna-reyes.jpg"),
  carloMendoza: getAssetUrl("src/assets/reviewer-carlo-mendoza.jpg"),
};

// Review Food Images
export const reviewImages = {
  kamayanFood: getAssetUrl("src/assets/review-kamayan-food.jpg"),
  bicolExpress: getAssetUrl("src/assets/review-bicol-express.jpg"),
  sisigPlate: getAssetUrl("src/assets/review-sisig-plate.jpg"),
};

// Story Images
export const storyImages = {
  adobo: getAssetUrl("src/assets/story-adobo.jpg"),
  atchara: getAssetUrl("src/assets/story-atchara.jpg"),
  bangus: getAssetUrl("src/assets/story-bangus.jpg"),
  coffee: getAssetUrl("src/assets/story-coffee.jpg"),
  dirtyIceCream: getAssetUrl("src/assets/story-dirty-ice-cream.jpg"),
  fiesta: getAssetUrl("src/assets/story-fiesta.jpg"),
  fishballs: getAssetUrl("src/assets/story-fishballs.jpg"),
  fruitSalad: getAssetUrl("src/assets/story-fruit-salad.jpg"),
  garlicRice: getAssetUrl("src/assets/story-garlic-rice.jpg"),
  halohalo: getAssetUrl("src/assets/story-halohalo.jpg"),
  inasal: getAssetUrl("src/assets/story-inasal.jpg"),
  lechon: getAssetUrl("src/assets/story-lechon.jpg"),
  lumpia: getAssetUrl("src/assets/story-lumpia.jpg"),
  pandesal: getAssetUrl("src/assets/story-pandesal.jpg"),
  tinola: getAssetUrl("src/assets/story-tinola.jpg"),
  turon: getAssetUrl("src/assets/story-turon.jpg"),
};

// Site Configuration
export const siteConfig = {
  name: "Eatery.ph",
  description: "Discover the best Filipino restaurants and authentic flavors across the Philippines",
  domain: "eatery.ph",
  // Change these URLs to switch between local and external sources
  baseAssetUrl: BASE_URL,
};
