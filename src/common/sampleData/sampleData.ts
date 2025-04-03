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

const countryData = [
  { name: "Albania", code: "al", currency: "$USD" },
  { name: "Algeria", code: "dz", currency: "$USD" },
  { name: "Andorra", code: "ad", currency: "€EUR" },
  { name: "Angola", code: "ao", currency: "$USD" },
  { name: "Anguilla", code: "ai", currency: "$USD" },
  { name: "Antigua and Barbuda", code: "ag", currency: "$USD" },
  { name: "Argentina", code: "ar", currency: "$USD" },
  { name: "Armenia", code: "am", currency: "$USD" },
  { name: "Aruba", code: "aw", currency: "$USD" },
  { name: "Australia", code: "au", currency: "AU$AUD" },
  { name: "Austria", code: "at", currency: "€EUR" },
  { name: "Azerbaijan", code: "az", currency: "$USD" },
  { name: "Bahamas", code: "bs", currency: "$USD" },
  { name: "Bahrain", code: "bh", currency: "$USD" },
  { name: "Bangladesh", code: "bd", currency: "$USD" },
  { name: "Belgium", code: "be", currency: "€EUR" },
  { name: "Brazil", code: "br", currency: "$USD" },
  { name: "Canada", code: "ca", currency: "CA$CAD" },
  { name: "China", code: "cn", currency: "¥CNY" },
  { name: "Denmark", code: "dk", currency: "krDKK" },
  { name: "Egypt", code: "eg", currency: "$USD" },
  { name: "Finland", code: "fi", currency: "€EUR" },
  { name: "France", code: "fr", currency: "€EUR" },
  { name: "Germany", code: "de", currency: "€EUR" },
  { name: "India", code: "in", currency: "₹INR" },
  { name: "Indonesia", code: "id", currency: "$USD" },
  { name: "Italy", code: "it", currency: "€EUR" },
  { name: "Japan", code: "jp", currency: "¥JPY" },
  { name: "Malaysia", code: "my", currency: "$USD" },
  { name: "Mexico", code: "mx", currency: "$USD" },
  { name: "Netherlands", code: "nl", currency: "€EUR" },
  { name: "New Zealand", code: "nz", currency: "$USD" },
  { name: "Norway", code: "no", currency: "€EUR" },
  { name: "Pakistan", code: "pk", currency: "$USD" },
  { name: "Philippines", code: "ph", currency: "$USD" },
  { name: "Poland", code: "pl", currency: "€EUR" },
  { name: "Portugal", code: "pt", currency: "€EUR" },
  { name: "Russia", code: "ru", currency: "$USD" },
  { name: "Saudi Arabia", code: "sa", currency: "SAR" },
  { name: "Singapore", code: "sg", currency: "S$SGD" },
  { name: "South Africa", code: "za", currency: "$USD" },
  { name: "South Korea", code: "kr", currency: "₩KRW" },
  { name: "Spain", code: "es", currency: "€EUR" },
  { name: "Sri Lanka", code: "lk", currency: "$USD" },
  { name: "Sweden", code: "se", currency: "krSEK" },
  { name: "Switzerland", code: "ch", currency: "CHF" },
  { name: "Thailand", code: "th", currency: "$USD" },
  { name: "Turkey", code: "tr", currency: "$USD" },
  { name: "United Kingdom", code: "gb", currency: "£GBP" },
  { name: "United States", code: "us", currency: "$USD" },
  { name: "Vietnam", code: "vn", currency: "$USD" }
];


export { dataMap, designerData, products,countryData };
