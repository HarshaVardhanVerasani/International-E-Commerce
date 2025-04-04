import {
  bottegaVeneta,
  chole,
  christianLouboutin,
  jackuemus,
  leMondeBeryl,
  leoLin,
  lieStudio,
  retori,
  sir,
  stellaMcCartney,
  valentinoGaravani,
  vivienneWestwood,
} from "../assets/images/imageFile";

interface SimplifiedFashionItem {
  id: number;
  imageUrl: string;
  name: string;
  type: string;
  price: string;
}

const fashionItems: SimplifiedFashionItem[] = [
  {
    id: 1,
    imageUrl: stellaMcCartney,
    name: "STELLA MCCARTNEY",
    type: "Organic Silk Layered Midi Dress",
    price: "$2100.0",
  },
  {
    id: 2,
    imageUrl: bottegaVeneta,
    name: "BOTTEGA VENETA",
    type: "Aviator Sunglasses",
    price: "$465.0",
  },
  {
    id: 3,
    imageUrl: sir,
    name: "SIR.",
    type: "Silk Serene Maxi Dress",
    price: "$500.0",
  },
  {
    id: 4,
    imageUrl: valentinoGaravani,
    name: "VALENTINO GARAVANI",
    type: "Leather 9 to 5 Shoulder Bag",
    price: "$3450.0",
  },
  {
    id: 5,
    imageUrl: leoLin,
    name: "LEO LIN",
    type: "Rose-Detail Fiona Mini Dress",
    price: "$760.0",
  },
  {
    id: 6,
    imageUrl: lieStudio,
    name: "LIÉ STUDIO",
    type: "Sterling Silver The Camille Earrings",
    price: "$200.0",
  },
  {
    id: 7,
    imageUrl: retori,
    name: "RETORI",
    type: "Cotton Check Maxi Dress",
    price: "$1750.0",
  },
  {
    id: 8,
    imageUrl: leMondeBeryl,
    name: "LE MONDE BERYL",
    type: "Suede Stella Ballet Flats",
    price: "$495.0",
  },
  {
    id: 9,
    imageUrl: jackuemus,
    name: "JACQUEMUS",
    type: "La Robe Valerie Midi Dress",
    price: "$1200.0",
  },
  {
    id: 10,
    imageUrl: christianLouboutin,
    name: "CHRISTIAN LOUBOUTIN",
    type: "Small Baggy Leather Tote Bag",
    price: "$2250.0",
  },
  {
    id: 11,
    imageUrl: vivienneWestwood,
    name: "VIVIENNE WESTWOOD",
    type: "Sunday Midi Dress",
    price: "$855.0",
  },
  {
    id: 12,
    imageUrl: chole,
    name: "CHLOÉ",
    type: "Maxime Wedge Sandals 135",
    price: "$1050.0",
  },
];
const products = {
  name: "strawberry whine",
  image: "https//",
  price: 234,
  currency: "gbp",
};

export const designersData = [
  {
    id: 0,
    title: "Featured Brands",
    subNames: ["Shop All Brands", "Bottega Veneta", "Burberry", "Christian Louboutin", "Jimmy Choo", "Loewe", "Max Mara"],
  },
  {
    id: 1,
    title: "Trending Brands",
    subNames: ["Alaia", "AMI Paris"],
  },
  {
    id: 2,
    title: "Fine Jewellery",
    subNames: ["Bvlgari", "Chopard"],
  },
  {
    id: 3,
    title: "Fine Watches",
    subNames: ["Rolex", "Tudor", "Audemars Piguet", "Patek Philippe", "Vacheron Constantin", "Omega", "Panerai", "Piaget", "Cartier"],
  },
  {
    id: 4,
    title: "Beauty",
    subNames: ["CHANEL", "Clé De Peau Beauté", "Estée Lauder", "La Prairie", "La Roche-Posay", "Lancôme", "Sephora Collection", "TOM FORD"],
  },
];

export const womenData = [
  { id: 3, title: "Clothing", subNames: ["Dresses", "Tops", "Skirts"] },
  { id: 4, title: "Shoes", subNames: ["Heels", "Sneakers", "Boots"] },
];

export const menData = [
  { id: 5, title: "Apparel", subNames: ["T-Shirts", "Jeans", "Suits"] },
  { id: 6, title: "Accessories", subNames: ["Watches", "Wallets", "Hats"] },
];

export const beautyData = [
  { id: 7, title: "Skincare", subNames: ["Moisturizers", "Serums", "Sunscreen"] },
  { id: 8, title: "Makeup", subNames: ["Foundation", "Lipstick", "Mascara"] },
];

export const jewelleryData = [
  { id: 9, title: "Jewellery", subNames: ["Necklaces", "Earrings", "Bracelets"] },
  { id: 10, title: "Watches", subNames: ["Luxury", "Casual", "Smart Watches"] },
];

export const kidsData = [
  { id: 11, title: "Clothing", subNames: ["T-Shirts", "Dresses", "Shorts"] },
  { id: 12, title: "Toys", subNames: ["Educational", "Plush Toys", "Action Figures"] },
];

export const homeData = [
  { id: 13, title: "Furniture", subNames: ["Sofas", "Tables", "Beds"] },
  { id: 14, title: "Decor", subNames: ["Vases", "Lamps", "Wall Art"] },
];

export const foodData = [
  { id: 15, title: "Gourmet", subNames: ["Chocolates", "Cheese", "Caviar"] },
  { id: 16, title: "Wines", subNames: ["Red Wine", "White Wine", "Champagne"] },
];

export const giftsData = [
  { id: 17, title: "For Him", subNames: ["Watches", "Tech Gadgets", "Cufflinks"] },
  { id: 18, title: "For Her", subNames: ["Perfumes", "Jewellery", "Luxury Bags"] },
];

export const storesData = [
  { id: 19, title: "Physical Stores", subNames: ["London", "New York", "Paris"] },
  { id: 20, title: "Virtual Stores", subNames: ["Online Exclusive", "Live Shopping"] },
];

const dataMap = {
  Designers: designersData,
  Women: womenData,
  Men: menData,
  Beauty: beautyData,
  "Jewellery & Watches": jewelleryData,
  Kids: kidsData,
  "Home & Furniture": homeData,
  "Food & Wine": foodData,
  Gifts: giftsData,
  "Visit Our Stores": storesData,
};
const authenticationLayoutPageData = {
  register: "Register",
  cookies: "Cookies",
  securityAndPrivacyPolicy: "Terms & Conditions",
  termsAndConditions: "Security & Privacy Policy",
  signin: "Sign In",
  emailAddress: "Email Address",
  password: "Password",
  rememberMe: "Remember me",
  forgottenYourPassword: "Forgotten your password?",
  doNotHaveAccount: "Don’t have an online account?",
  registerNow: "Register now",
  communication:"Communication",
  communicationDescription:"If you would like to hear from Harrods regarding your Rewards membership benefits and the latest events, products and services, please tick below to receive marketing communications.",
  joinHarrods:"Join Harrods",
  earnAndRedeem:"Earn and redeem points when you spend",
  benefitsAndDiscounts:"Exclusive benefits, events and discounts",tiers:"Your perks grow as you move through the tiers",rewards:"Rewards"
};

export { dataMap, fashionItems, products, authenticationLayoutPageData };
