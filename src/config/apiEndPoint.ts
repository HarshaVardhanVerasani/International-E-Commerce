const baseURL = "https://fakestoreapi.com";

const endpoints = {
  LOGIN: "auth/login",
  GET_PRODUCTS: "products",
  SINGLE_PRODUCTS: "products/:productId",
  GET_CATEGORIES: "products/get-categories",
};

const encryptionSalt = "4910474157405c535";

export { baseURL, encryptionSalt, endpoints };
