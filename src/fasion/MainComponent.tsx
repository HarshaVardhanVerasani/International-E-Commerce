import { useState, useEffect } from "react";
import { brands, sortOptions } from "../utils/data";
import { Box, Container, Typography, Button } from "@mui/material";
import BrandFilter from "./BrandFilter";
import Breadcrumb from "./Breadcrumb";
import ColorFilter from "./ColorFilter";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import SortByDropdown from "./SortByDropdown";
import ResultsCount from "./ResultsCount";

interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  brand: string;
}

interface IProps {
  products: Products[];
}

const MainComponent = ({ products }: IProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [filteredProducts, setFilteredProducts] = useState<Products[]>(products);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Women-Trending-Now", href: "/women-trending-now" },
  ];

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand) // Remove brand if it is already selected
        : [...prev, brand] // Add brand if not selected
    );
  };

  useEffect(() => {
    let result = [...products];

    // Apply search filter
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerCaseSearch) ||
          product.brand.toLowerCase().includes(lowerCaseSearch) ||
          product.description.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // Apply brand filter
    if (selectedBrands.length > 0) {
      result = result.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "priceLowToHigh":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      case "popular":
        result.sort((a, b) => a.id - b.id);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [searchTerm, selectedBrands, sortBy, products]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box sx={{ py: 10, px: { xs: 4, sm: 6, md: 12 }, textAlign: "center", borderBottom: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", letterSpacing: -0.5 }}>
          WOMEN'S TRENDING NOW
        </Typography>
        <Button variant="text" sx={{ mt: 4, display: "flex", mx: "auto" }}>
          <Typography variant="body2">Read more</Typography>
          <Typography variant="h6" sx={{ ml: 1 }}>+</Typography>
        </Button>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ mb: 6 }}>
          <Breadcrumb items={breadcrumbItems} />
        </Box>

        <Box sx={{ mb: 8 }}>
          <SearchBar search={searchTerm} setSearch={setSearchTerm} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 8 }}>
          <Box sx={{ width: { xs: "100%", md: "25%" }, mb: 4 }}>
            
            <BrandFilter
              brands={brands} 
              selectedBrands={selectedBrands} 
              toggleBrand={toggleBrand} 
            />
            <ColorFilter />
          </Box>

          {/* Main Content */}
          <Box sx={{ width: { xs: "100%", md: "75%" } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
              <ResultsCount count={filteredProducts.length} />
              <SortByDropdown
                options={sortOptions}
                value={sortBy}
                onChange={setSortBy}
              />
            </Box>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap={4}>
                {filteredProducts.map((product) => (
                  <Box
                    key={product.id}
                    sx={{
                      flex: "1 1 calc(33.333% - 16px)",
                      boxSizing: "border-box",
                      marginBottom: "16px",
                      "@media (max-width: 1200px)": {
                        flex: "1 1 calc(50% - 16px)",
                      },
                      "@media (max-width: 600px)": {
                        flex: "1 1 100%",
                      },
                    }}
                  >
                    <ProductCard product={product} />
                  </Box>
                ))}
              </Box>
            ) : (
              <Box sx={{ textAlign: "center", py: 12 }}>
                <Typography variant="h6" color="text.secondary">
                  No products found matching your criteria.
                </Typography>
                <Button
                  variant="text"
                  sx={{ mt: 4, color: "primary.main" }}
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedBrands([]);
                    setSortBy("newest");
                  }}
                >
                  Reset filters
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainComponent;
