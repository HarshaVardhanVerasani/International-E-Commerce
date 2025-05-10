import { Search as SearchIcon } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";

import { ThemeContext } from "../../context/ThemeWrapper";
import { headerStyles } from "../../pages/customer/homePage/Header/headerStyles";

interface Country {
  name: string;
  iso2: string;
  currency: string;
}

const CountrySelector: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  const styles = headerStyles(colors);

  const [search, setSearch] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("India");
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/currency")
      .then(response => response.json())
      .then(data => {
        if (data && data.data) {
          setCountries(data.data);
        }
      })
      .catch(error => console.error("Error fetching countries:", error));

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name));
  const filteredCountries = sortedCountries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box sx={styles.mainContainer} ref={dropdownRef}>
      <Box sx={{ ...styles.subContainer, bgcolor: open ? "white" : "transparent" }} onClick={() => setOpen(!open)}>
        {filteredCountries.map(country => (
          <React.Fragment key={country.name}>
            {selectedCountry === country.name && (
              <img
                src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                alt={country.name}
                style={{ borderRadius: "100%", width: "25px", height: "25px" }}
              />
            )}
          </React.Fragment>
        ))}
        <Typography variant="body1" sx={{ color: open ? "#000" : "#fff", fontSize: "12px" }}>
          {selectedCountry}
        </Typography>{" "}
        <KeyboardArrowDownIcon
          sx={{
            color: open ? "#000" : "#fff",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </Box>

      {open && (
        <Box sx={styles.dropdownContainer}>
          <Typography variant="body2" fontWeight="bold">
            DELIVERY COUNTRY OR AREA
          </Typography>
          <Box sx={styles.dropdownContent}>
            <TextField
              variant="standard"
              placeholder="Search"
              fullWidth
              InputProps={{ disableUnderline: true }}
              onChange={e => setSearch(e.target.value)}
            />
            <SearchIcon color="action" />
          </Box>
          <Typography variant="body2" fontWeight="bold">
            CURRENT SELECTION
          </Typography>
          <List sx={styles.listContainer}>
            {filteredCountries.map(country => (
              <ListItem
                key={country.name}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedCountry(country.name);
                  setOpen(false);
                }}>
                <img
                  src={`https://flagcdn.com/w40/${country.iso2.toLowerCase()}.png`}
                  alt={country.name}
                  style={{ borderRadius: "100%", width: 25, height: 25 }}
                />
                <ListItemText primary={country.name} sx={{ ml: 2 }} />
                <Typography variant="body2" color="textSecondary">
                  {country.currency}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default CountrySelector;
