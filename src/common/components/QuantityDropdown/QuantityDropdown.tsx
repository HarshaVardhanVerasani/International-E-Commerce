import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { QuantityDropdownStyles } from "./QuantityDropdownStyles";

interface SizesOption {
  id: string;
  name: string;
}

const sizeOptions: SizesOption[] = [
  { id: "1", name: "1" },
  { id: "2", name: "2" },
  { id: "3", name: "3" },
  { id: "4", name: "4" },
  { id: "5", name: "5" },
];

interface CustomDropdownProps {
  options?: SizesOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const QuantityDropdown: React.FC<CustomDropdownProps> = ({ options = sizeOptions, defaultValue = "", onChange }) => {
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
    <Box ref={dropdownRef} sx={QuantityDropdownStyles.container}>
      <Box onClick={() => setIsOpen(!isOpen)} sx={QuantityDropdownStyles.dropdown}>
        <Typography sx={QuantityDropdownStyles.dropdownText}>{selectedOption}</Typography>
        <Box sx={QuantityDropdownStyles.arrow(isOpen)} />
      </Box>
      {isOpen && (
        <Box sx={QuantityDropdownStyles.optionsContainer}>
          {options.map(option => (
            <Box
              key={option.id}
              onClick={() => handleOptionClick(option.name)}
              sx={QuantityDropdownStyles.option(selectedOption === option.name)}>
              <Typography sx={QuantityDropdownStyles.optionText}>{option.name}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default QuantityDropdown;
