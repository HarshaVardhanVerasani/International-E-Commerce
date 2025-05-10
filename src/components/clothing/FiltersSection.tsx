import React from "react";
import { Filters } from "../../utils/productsDataTypes";
import FilterGroup from "./FilterGroup";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import PriceRangeSlider from "./PriceRangeSlider";
import { ExpandMore } from "@mui/icons-material";


interface FiltersSectionProps {
  filters: Filters;
  maxPrice: number;
  onFilterChange: (
    filterType: keyof Omit<Filters, "priceRange">,
    id: string,
    checked: boolean
  ) => void;
  onPriceRangeChange: (range: { min: number; max: number }) => void;
}

const FiltersSection: React.FC<FiltersSectionProps> = ({
  filters,
  maxPrice,
  onFilterChange,
  onPriceRangeChange,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
 
      <FilterGroup
        title="CATEGORIES"
        options={filters.categories}
        onChange={(id, checked) => onFilterChange("categories", id, checked)}
      />
      
  
      <FilterGroup
        title="BRANDS"
        options={filters.brands}
        onChange={(id, checked) => onFilterChange("brands", id, checked)}
      />
      
     
      <FilterGroup
        title="Colors"
        options={filters.colors}
        onChange={(id, checked) => onFilterChange("colors", id, checked)}
      />
      
     
      <FilterGroup
        title="Sizes"
        options={filters.sizes}
        onChange={(id, checked) => onFilterChange("sizes", id, checked)}
      />
      
    
      <FilterGroup
        title="Fit Type"
        options={filters.fitTypes}
        onChange={(id, checked) => onFilterChange("fitTypes", id, checked)}
      />
      
    
      <FilterGroup
        title="Patterns"
        options={filters.patterns}
        onChange={(id, checked) => onFilterChange("patterns", id, checked)}
      />
      
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: 'transparent',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1">Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingTop: 0 }}>
          <PriceRangeSlider
            priceRange={filters.priceRange}
            maxPrice={maxPrice}
            onChange={onPriceRangeChange}
          />
        </AccordionDetails>
      </Accordion>
    
       
    </Box>
  );
};

export default FiltersSection;
