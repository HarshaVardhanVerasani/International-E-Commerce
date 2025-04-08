import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Select, MenuItem, SelectChangeEvent, FormControl, InputLabel } from "@mui/material";
import { KeyboardArrowDown, ChevronRight, Close, FilterList } from "@mui/icons-material";
import { products, initialFilters, sortOptions } from "../../utils/mockData";
import { Filters, Product, SortOption } from "../../utils/productsDataTypes";
import ProductCard from "./ProductCard";
import FiltersSection from "./FiltersSection";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import { lightTheme } from "../../config/colorPalette";

const ProductListingPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [sort, setSort] = useState<SortOption>("newest");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const maxPrice = Math.max(...products.map(product => product.price));
  const handleFilterChange = (filterType: keyof Omit<Filters, "priceRange">, id: string, checked: boolean) => {
    setFilters(prevFilters => {
      const updatedOptions = prevFilters[filterType].map(option => (option.id === id ? { ...option, checked } : option));

      return {
        ...prevFilters,
        [filterType]: updatedOptions,
      };
    });
  };

  const toggleDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen);
  };
  const handlePriceRangeChange = (range: { min: number; max: number }) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      priceRange: range,
    }));
  };

  const handleSortChange = (event: SelectChangeEvent<"price-asc" | "price-desc" | "newest" | "bestseller">) => {
    setSort(event.target.value as SortOption);
  };

  const handleFavoriteToggle = (productId: string) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter(id => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

  useEffect(() => {
    let result = [...products];

    // Filter by categories
    const selectedCategories = filters.categories.filter(category => category.checked).map(category => category.id);
    if (selectedCategories.length > 0) {
      // This is a simplified example. In a real app, products would have a category property
      //   result = result.filter((product) => selectedCategories.includes(product.category));
    }

    // Filter by brands
    const selectedBrands = filters.brands.filter(brand => brand.checked).map(brand => brand.label.toLowerCase());
    if (selectedBrands.length > 0) {
      result = result.filter(product => selectedBrands.includes(product.brand.toLowerCase()));
    }

    // Filter by colors
    const selectedColors = filters.colors.filter(color => color.checked).map(color => color.id);
    if (selectedColors.length > 0) {
      result = result.filter(product => product.color && selectedColors.includes(product.color));
    }

    // Filter by sizes
    const selectedSizes = filters.sizes.filter(size => size.checked).map(size => size.label);
    if (selectedSizes.length > 0) {
      result = result.filter(product => product.size && product.size.some(size => selectedSizes.includes(size)));
    }

    // Filter by fit types
    const selectedFitTypes = filters.fitTypes.filter(fitType => fitType.checked).map(fitType => fitType.label.toLowerCase());
    if (selectedFitTypes.length > 0) {
      result = result.filter(product => product.fitType && selectedFitTypes.includes(product.fitType.toLowerCase()));
    }

    // Filter by patterns
    const selectedPatterns = filters.patterns.filter(pattern => pattern.checked).map(pattern => pattern.label.toLowerCase());
    if (selectedPatterns.length > 0) {
      result = result.filter(product => product.pattern && selectedPatterns.includes(product.pattern.toLowerCase()));
    }

    // Filter by price range
    result = result.filter(product => product.price >= filters.priceRange.min && product.price <= filters.priceRange.max);

    // Sort products
    if (sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "newest") {
      // In a real app, you might sort by date added
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sort === "bestseller") {
      // This would typically use a popularity score from the backend
      // For this example, we'll just shuffle the results
      result.sort(() => Math.random() - 0.5);
    }

    setFilteredProducts(result);
  }, [filters, sort]);

  // Count the number of active filters
  const countActiveFilters = () => {
    let count = 0;

    // Count checked filters in each category
    Object.keys(filters).forEach(key => {
      if (key !== "priceRange") {
        const filterType = key as keyof Omit<Filters, "priceRange">;
        count += filters[filterType].filter(option => option.checked).length;
      }
    });

    // Count price range if it's not the default
    if (filters.priceRange.min > 0 || filters.priceRange.max < maxPrice) {
      count += 1;
    }

    return count;
  };

  const activeFiltersCount = countActiveFilters();

  // Clear all filters
  const clearAllFilters = () => {
    setFilters(initialFilters);
  };

  const FilterContent = () => (
    <FiltersSection filters={filters} maxPrice={maxPrice} onFilterChange={handleFilterChange} onPriceRangeChange={handlePriceRangeChange} />
  );

  return (
    <Box sx={{ width: { xs: "90%", sm: "90%" }, display: "flex", justifyContent: "center", flexDirection: "column", margin: "20px" }}>
      <Box sx={{ display: "flex", alignItems: "center", fontSize: "0.875rem", marginBottom: 3, color: "text.secondary" }}>
        <Typography component="a" href="/" sx={{ "&:hover": { textDecoration: "underline" } }}>
          Home
        </Typography>
        <ChevronRight sx={{ fontSize: 14, marginX: 1 }} />
        <Typography component="a" href="/women-clothing" sx={{ "&:hover": { textDecoration: "underline" } }}>
          Women-Clothing
        </Typography>
        <ChevronRight sx={{ fontSize: 14, marginX: 1 }} />
        <Typography variant="body2" sx={{ fontWeight: 600, color: "text.primary" }}>
          Tops
        </Typography>
      </Box>

      <Typography sx={{ fontWeight: 600, textAlign: "center", marginBottom: 2, fontSize: { xs: "20px", sm: "30px" } }}>
        DESIGNER TOPS
      </Typography>

      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography sx={{ color: "text.secondary", maxWidth: 900, marginX: "auto", fontSize: { xs: "14px", sm: "18px" } }}>
          Whether you're searching for diaphanous silk blouses from Dolce & Gabbana...
          <Button sx={{ marginLeft: 1, fontWeight: 500, fontSize: { xs: "12px", sm: "14px" } }} color="inherit">
            Read more
          </Button>
        </Typography>
      </Box>

      {isMobile && (
        <Button
          variant="outlined"
          color="primary"
          onClick={toggleDrawer}
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1300,
            borderRadius: "50%",
            padding: 2,
          }}>
          <FilterList sx={{ fontSize: "1rem" }} />
        </Button>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={isFilterDrawerOpen}
          onClose={toggleDrawer}
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 250,
              padding: 2,
            },
          }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <Typography variant="h6">Filters</Typography>
            {activeFiltersCount > 0 && (
              <Button variant="text" color="error" size="small" onClick={clearAllFilters} sx={{ fontSize: "0.875rem" }}>
                <Close sx={{ fontSize: 16, marginRight: 1 }} /> Clear all
              </Button>
            )}
          </Box>
          <FilterContent />
        </Drawer>
      )}

      <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 4, justifyContent: "center" }}>
        {/* Filters Sidebar for Desktop */}
        {!isMobile && (
          <Box sx={{ width: 240, flexShrink: 0 }}>
            <Box sx={{ position: "sticky", top: 0 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <Typography variant="h6">Filters</Typography>
                {activeFiltersCount > 0 && (
                  <Button variant="text" color="error" size="small" onClick={clearAllFilters} sx={{ fontSize: "0.875rem" }}>
                    <Close sx={{ fontSize: 16, marginRight: 1 }} /> Clear all
                  </Button>
                )}
              </Box>
              <Box
                sx={{
                  overflowY: "scroll",
                  maxHeight: "calc(100vh - 60px)",
                  color: "white",
                  transition: "all 0.3s ease-in-out",
                  overflowX: "hidden",
                }}>
                <FilterContent />
              </Box>
            </Box>
          </Box>
        )}

        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
            <Typography variant="body2">{filteredProducts.length} Results</Typography>
            <FormControl
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0px",
                  "& fieldset": {
                    border: "1px solid #9E9E9E !important",
                    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important",
                  },
                  "&:hover fieldset": {
                    border: "1px solid #9E9E9E !important",
                    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.05) !important",
                  },
                  "&.Mui-focused fieldset": {
                    border: "1px solid #AA8D65 !important",
                  },
                },
              }}>
              <Select
                value={sort}
                onChange={handleSortChange}
                sx={{
                  minWidth: 180,
                  "& .MuiSelect-select": {
                    padding: "10px 14px",
                  },

                  "& .MuiSelect-select.MuiOutlinedInput-input": {
                    padding: "12px 14px",
                  },
                  "& .MuiSelect-icon": {
                    color: lightTheme.darkBrown,
                  },
                }}
                IconComponent={KeyboardArrowDown}>
                {sortOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 3 }}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onFavoriteToggle={handleFavoriteToggle}
                isFavorite={favorites.includes(product.id)}
              />
            ))}
          </Box>

          {filteredProducts.length === 0 && (
            <Box sx={{ textAlign: "center", py: 12 }}>
              <Typography variant="h6" sx={{ marginBottom: 2 }}>
                No products found
              </Typography>
              <Typography sx={{ color: "text.secondary", marginBottom: 3 }}>Try changing your filters or search criteria.</Typography>
              <Button variant="outlined" onClick={clearAllFilters}>
                Clear all filters
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductListingPage;
