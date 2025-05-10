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
      <MuiSlider
        value={[priceRange.min, priceRange.max]}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`}
        max={maxPrice}
        step={50}
        sx={{
          marginY: 2,
          "& .MuiSlider-rail": {
            backgroundColor: "#d3d3d3", 
            opacity: 0.5,
          },
          "& .MuiSlider-track": {
            backgroundColor: "#8a7252", 
            height: 8, 
            borderRadius: 4, 
          },
          "& .MuiSlider-thumb": {
            backgroundColor: "#8a7252", 
            border: "1px solid white", 
            height: 20, 
            width: 20, 
            borderRadius: "50%", 
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)", 
            "&:focus, &:hover, &.Mui-active": {
              boxShadow: "0 0 0 8px rgba(138, 114, 82, 0.16)", 
            },
          },
          "& .MuiSlider-valueLabel": {
            backgroundColor: "#8a7252",
            color: "white", 
            borderRadius: "4px", 
            fontSize: "0.875rem",
            fontWeight: 600, 
            padding: "4px 8px", 
            transform: "translateY(-20px)",
          },
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
