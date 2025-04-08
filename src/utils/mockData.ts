import { Filters, Product, SortOption } from "./productsDataTypes";


export const products: Product[] = [
    {
      id: "1",
      brand: "LOEWE",
      name: "Poplin Tie-Detail Shirt",
      price: 1700,
      image: "/lovable-uploads/f395726b-ab8d-4427-9da8-7d83ef23eceb.png",
      isNew: true,
      color: "pink",
      size: ["XS", "S", "M", "L"],
      fitType: "Regular",
      pattern: "Solid"
    },
    {
      id: "2",
      brand: "TOTÊME",
      name: "Woven Stripe Sleeveless Top",
      price: 340,
      image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      isNew: true,
      color: "beige",
      size: ["S", "M", "L"],
      fitType: "Loose",
      pattern: "Striped"
    },
    {
      id: "3",
      brand: "MAX MARA",
      name: "Silk Satin Cami Top",
      price: 435,
      image: "https://images.unsplash.com/photo-1551048632-6bd616640f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      isNew: true,
      color: "white",
      size: ["XS", "S", "M"],
      fitType: "Regular",
      pattern: "Solid"
    },
    {
      id: "4",
      brand: "GUCCI",
      name: "Floral Embroidered Blouse",
      price: 1200,
      image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "blue",
      size: ["S", "M", "L", "XL"],
      fitType: "Relaxed",
      pattern: "Floral"
    },
    {
      id: "5",
      brand: "PRADA",
      name: "Logo Cotton T-Shirt",
      price: 650,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "black",
      size: ["XS", "S", "M", "L", "XL"],
      fitType: "Regular",
      pattern: "Logo"
    },
    {
      id: "6",
      brand: "BALENCIAGA",
      name: "Oversized Cotton Hoodie",
      price: 890,
      image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "grey",
      size: ["S", "M", "L", "XL"],
      fitType: "Oversized",
      pattern: "Solid"
    },
    {
      id: "7",
      brand: "VERSACE",
      name: "Printed Silk Shirt",
      price: 950,
      image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "multi",
      size: ["M", "L", "XL"],
      fitType: "Regular",
      pattern: "Printed"
    },
    {
      id: "8",
      brand: "DIOR",
      name: "Logo Embroidered T-Shirt",
      price: 750,
      image: "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "white",
      size: ["XS", "S", "M"],
      fitType: "Slim",
      pattern: "Logo"
    },
    {
      id: "9",
      brand: "7 FOR ALL MANKIND",
      name: "Slim Fit Denim Shirt",
      price: 295,
      image: "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "blue",
      size: ["S", "M", "L", "XL"],
      fitType: "Slim",
      pattern: "Denim"
    },
    {
      id: "10",
      brand: "STELLA MCCARTNEY",
      name: "Organic Cotton Top",
      price: 425,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      isNew: true,
      color: "white",
      size: ["XS", "S", "M", "L"],
      fitType: "Regular",
      pattern: "Solid"
    },
    {
      id: "11",
      brand: "CHLOÉ",
      name: "Silk-Blend Ruffle Blouse",
      price: 1150,
      image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "pink",
      size: ["S", "M", "L"],
      fitType: "Relaxed",
      pattern: "Solid"
    },
    {
      id: "12",
      brand: "VALENTINO",
      name: "Logo Print T-Shirt",
      price: 550,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "black",
      size: ["XS", "S", "M", "L", "XL"],
      fitType: "Regular",
      pattern: "Logo"
    },
    {
      id: "13",
      brand: "SAINT LAURENT",
      name: "Leopard Print Silk Blouse",
      price: 1390,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "multi",
      size: ["XS", "S", "M"],
      fitType: "Slim",
      pattern: "Printed"
    },
    {
      id: "14",
      brand: "BURBERRY",
      name: "Check Cotton Shirt",
      price: 520,
      image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      color: "beige",
      size: ["S", "M", "L", "XL"],
      fitType: "Regular",
      pattern: "Printed"
    },
    {
      id: "15",
      brand: "CELINE",
      name: "Cotton Jersey Top",
      price: 480,
      image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      isNew: true,
      color: "white",
      size: ["XS", "S", "M", "L"],
      fitType: "Regular",
      pattern: "Solid"
    }
  ];
  
  export const initialFilters: Filters = {
    categories: [
      { id: "tops", label: "Tops", checked: true },
      { id: "bodysuits", label: "Bodysuits", checked: false },
      { id: "shirts-blouses", label: "Shirts & Blouses", checked: false },
      { id: "t-shirts", label: "T-Shirts", checked: false },
      { id: "sweatshirts-hoodies", label: "Sweatshirts & Hoodies", checked: false },
      { id: "crop-tops", label: "Crop Tops", checked: false },
    ],
    brands: [
      { id: "7-for-all-mankind", label: "7 For All Mankind", checked: false },
      { id: "loewe", label: "LOEWE", checked: false },
      { id: "toteme", label: "TOTÊME", checked: false },
      { id: "max-mara", label: "MAX MARA", checked: false },
      { id: "gucci", label: "GUCCI", checked: false },
      { id: "prada", label: "PRADA", checked: false },
      { id: "balenciaga", label: "BALENCIAGA", checked: false },
      { id: "versace", label: "VERSACE", checked: false },
      { id: "dior", label: "DIOR", checked: false },
    ],
    colors: [
      { id: "black", label: "Black", checked: false },
      { id: "white", label: "White", checked: false },
      { id: "pink", label: "Pink", checked: false },
      { id: "beige", label: "Beige", checked: false },
      { id: "blue", label: "Blue", checked: false },
      { id: "grey", label: "Grey", checked: false },
      { id: "multi", label: "Multi", checked: false },
    ],
    sizes: [
      { id: "xs", label: "XS", checked: false },
      { id: "s", label: "S", checked: false },
      { id: "m", label: "M", checked: false },
      { id: "l", label: "L", checked: false },
      { id: "xl", label: "XL", checked: false },
    ],
    fitTypes: [
      { id: "regular", label: "Regular", checked: false },
      { id: "loose", label: "Loose", checked: false },
      { id: "slim", label: "Slim", checked: false },
      { id: "relaxed", label: "Relaxed", checked: false },
      { id: "oversized", label: "Oversized", checked: false },
    ],
    patterns: [
      { id: "solid", label: "Solid", checked: false },
      { id: "striped", label: "Striped", checked: false },
      { id: "floral", label: "Floral", checked: false },
      { id: "printed", label: "Printed", checked: false },
      { id: "logo", label: "Logo", checked: false },
      { id: "denim", label: "Denim", checked: false },
    ],
    priceRange: {
      min: 0,
      max: 2000,
    },
  };
  
  export const sortOptions: { value: SortOption; label: string }[] = [
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "newest", label: "Newest" },
    { value: "bestseller", label: "Bestsellers" },
  ];
  