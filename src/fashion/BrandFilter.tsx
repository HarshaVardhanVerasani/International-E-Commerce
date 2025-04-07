import { Checkbox, FormControlLabel, FormGroup, Typography, Box } from "@mui/material";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface BrandFilterProps {
  brands: string[];
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
}

const BrandFilter = ({ brands, selectedBrands, toggleBrand }: BrandFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box mb={8}>
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center" 
        mb={2} 
        onClick={toggleExpand} 
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="h6" component="h3" sx={{ textTransform: "uppercase", letterSpacing: 1 }}>
          Brands
        </Typography>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Box>

      {isExpanded && (
        <FormGroup>
          {brands.map((brand) => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  checked={selectedBrands.includes(brand)} // Check if this brand is selected
                  onChange={() => toggleBrand(brand)} // Toggle the brand selection
                  color="primary"
                />
              }
              label={<Typography variant="body2">{brand}</Typography>}
            />
          ))}
        </FormGroup>
      )}
    </Box>
  );
};

export default BrandFilter;
