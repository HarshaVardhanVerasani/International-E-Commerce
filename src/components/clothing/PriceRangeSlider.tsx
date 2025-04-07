import React from "react";
import { Slider as MuiSlider, Box, Typography } from "@mui/material";
import { PriceRange } from "../../utils/productsDataTypes";

interface PriceRangeSliderProps {
  priceRange: PriceRange;
  maxPrice: number;
  onChange: (range: PriceRange) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  priceRange,
  maxPrice,
  onChange,
}) => {
  const handleSliderChange = (event: Event, value: number | number[]) => {
    if (Array.isArray(value)) {
      onChange({
        min: value[0],
        max: value[1],
      });
    }
  };

  return (
    <Box sx={{ py: 4, borderBottom: "1px solid #E5E7EB" }}>
      <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
        Price Range
      </Typography>
      
      <MuiSlider
        value={[priceRange.min, priceRange.max]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        max={maxPrice}
        step={50}
        sx={{
          marginY: 2,
        }}
      />
      
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1, fontSize: "0.875rem" }}>
        <span>${priceRange.min}</span>
        <span>${priceRange.max}</span>
      </Box>
    </Box>
  );
};

export default PriceRangeSlider;
