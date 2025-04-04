import { Box, IconButton, InputBase } from "@mui/material";
import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar = ({ search, setSearch }: SearchBarProps) => {
  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: 400 }}>
      <IconButton sx={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)" ,}}>
      <Search style={{ width: 16, height: 16, color: "#757575" }} />
      </IconButton>
      <InputBase
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search products..."
        sx={{
          width: "100%",
          paddingLeft: 15,
          paddingY:1,
         
          border: "1px solid #ccc",
          borderRadius: 1,
          "&:focus": { borderColor: "#1A73E8" },
         
        }}
      />
    </Box>
  );
};

export default SearchBar;
