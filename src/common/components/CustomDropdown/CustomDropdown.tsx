import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CustomDropdownStyles } from "./CustomDropdownStyles";

interface AtelierOption {
  id: string;
  name: string;
}

const atelierOptions = [
  { id: "d2", name: "ATELIER D2" },
  { id: "l2", name: "ATELIER L2" },
  { id: "l3", name: "ATELIER L3" },
  { id: "l1", name: "ATELIER L1" },
  { id: "m3", name: "ATELIER M3" },
  { id: "l4", name: "ATELIER L4" },
  { id: "t4", name: "ATELIER T4" },
  { id: "m2", name: "ATELIER M2" },
  { id: "m4", name: "ATELIER M4" },
  { id: "m1", name: "ATELIER M1" },
  { id: "t3", name: "ATELIER T3" },
  { id: "t1", name: "ATELIER T1" },
  { id: "t2", name: "ATELIER T2" },
  { id: "d1", name: "ATELIER D1" },
  { id: "d3", name: "ATELIER D3" },
  { id: "d4", name: "ATELIER D4" },
];

interface CustomDropdownProps {
  options?: AtelierOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options = atelierOptions, defaultValue = "", onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue || (options.length > 0 ? options[0].name : ""));
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <Box ref={dropdownRef} sx={CustomDropdownStyles.container}>
      <Box onClick={() => setIsOpen(!isOpen)} sx={CustomDropdownStyles.dropdown}>
        <Typography sx={CustomDropdownStyles.dropdownText}>{selectedOption}</Typography>
        <Box sx={CustomDropdownStyles.arrow(isOpen)} />
      </Box>
      {isOpen && (
        <Box sx={CustomDropdownStyles.optionsContainer}>
          {options.map(option => (
            <Box
              key={option.id}
              onClick={() => handleOptionClick(option.name)}
              sx={CustomDropdownStyles.option(selectedOption === option.name)}>
              <Typography sx={CustomDropdownStyles.optionText}>{option.name}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CustomDropdown;
