export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  color?: string;
  size?: string[];
  fitType?: string;
  pattern?: string;
};

export type FilterOption = {
  id: string;
  label: string;
  checked: boolean;
};

export type PriceRange = {
  min: number;
  max: number;
};

export type Filters = {
  categories: FilterOption[];
  brands: FilterOption[];
  colors: FilterOption[];
  sizes: FilterOption[];
  fitTypes: FilterOption[];
  patterns: FilterOption[];
  priceRange: PriceRange;
};

export type SortOption = 'price-asc' | 'price-desc' | 'newest' | 'bestseller';
