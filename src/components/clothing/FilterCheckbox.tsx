import React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { FilterOption } from "../../utils/productsDataTypes";

interface FilterCheckboxProps {
  option: FilterOption;
  onChange: (id: string, checked: boolean) => void;
}

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({ option, onChange }) => {
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
            id={option.id}
            checked={option.checked}
            onChange={(e) => onChange(option.id, e.target.checked)}
          />
        }
        label={option.label}
        labelPlacement="end"
        sx={{
          "& .MuiFormControlLabel-label": {
            fontSize: "0.875rem", 
            lineHeight: 1.5, 
          },
        }}
      />
    </Box>
  );
};

export default FilterCheckbox;
