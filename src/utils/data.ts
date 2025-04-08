export interface Product {
    id: number;
    name: string;
    brand: string;
    description: string;
    price: number;
    image: string;
    category?: string;
  }
  
  export interface Brand {
    id: string;
    name: string;
  }
  
  export interface SortOption {
    value: string;
    label: string;
  }

  export const products: Product[] = [
    {
      id: 1,
      name: "Stretch-Silk Rose-Detail Asymmetric Top",
      brand: "MAGDA BUTRYM",
      description: "Elegant asymmetric design with rose detail",
      price: 795.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "tops"
    },
    {
      id: 2,
      name: "Tess High-Rise Straight Jeans",
      brand: "7 FOR ALL MANKIND",
      description: "Premium high-rise jeans with straight leg cut",
      price: 219.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "bottoms"
    },
    {
      id: 3,
      name: "Baby Solstice Shoulder Bag",
      brand: "BOTTEGA VENETA",
      description: "Luxurious leather shoulder bag with iconic weave pattern",
      price: 1890.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "bags"
    },
    {
      id: 4,
      name: "Wool Gabardine Blazer",
      brand: "AEXAE",
      description: "Tailored wool blazer in classic cut",
      price: 1290.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "outerwear"
    },
    {
      id: 5,
      name: "Crystal-Embellished Sandals",
      brand: "A.W.A.K.E. MODE",
      description: "Elegant evening sandals with crystal details",
      price: 680.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "footwear"
    },
    {
      id: 6,
      name: "Cashmere Turtleneck Sweater",
      brand: "AERON",
      description: "Luxurious pure cashmere knit with turtleneck",
      price: 545.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "knitwear"
    },
    {
      id: 7,
      name: "Silk Maxi Dress",
      brand: "AEYDE",
      description: "Flowing silk maxi dress with slit",
      price: 795.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "dresses"
    },
    {
      id: 8,
      name: "Gold-Plated Pearl Earrings",
      brand: "BOTTEGA VENETA",
      description: "Statement earrings with freshwater pearls",
      price: 320.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "jewelry"
    },
    {
      id: 9,
      name: "Leather Mini Skirt",
      brand: "7 FOR ALL MANKIND",
      description: "Buttery soft leather mini in A-line silhouette",
      price: 595.00,
      image: "/lovable-uploads/ec53d3dd-4eac-4986-a6a7-c68ab3bdf22d.png",
      category: "bottoms"
    },
  ];
  
  export const brands: string[] = [
    "7 FOR ALL MANKIND",
    "A",
    "A.W.A.K.E. MODE",
    "AERON",
    "AEXAE",
    "AEYDE",
    "BOTTEGA VENETA",
    "MAGDA BUTRYM",
  ];
  
  export const sortOptions = [
    { value: "priceLowToHigh", label: "Price: Low to High" },
    { value: "priceHighToLow", label: "Price: High to Low" },
    { value: "newest", label: "Newest" },
    { value: "popular", label: "Popular" },
  ];
  