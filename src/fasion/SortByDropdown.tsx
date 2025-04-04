import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { SortOption } from "../utils/data";

interface SortByDropdownProps {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
}

const SortByDropdown = ({ options, value, onChange }: SortByDropdownProps) => {
  return (
    <FormControl  variant="outlined" sx={{ minWidth: 180 }}>
      <InputLabel>Sort by</InputLabel>
      <Select value={value} onChange={(e) => onChange(e.target.value)} label="Sort by">
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortByDropdown;
