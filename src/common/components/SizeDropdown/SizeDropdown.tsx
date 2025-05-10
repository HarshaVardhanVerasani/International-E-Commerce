import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { SizeDropdownStyles } from "./SizeDropdownStyles";

interface SizesOption {
  id: string;
  name: string;
}

const sizeOptions: SizesOption[] = [
  { id: "xs", name: "XS" },
  { id: "s", name: "S" },
  { id: "m", name: "M" },
  { id: "l", name: "L" },
  { id: "xl", name: "XL" },
];

interface CustomDropdownProps {
  options?: SizesOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const SizeDropdown: React.FC<CustomDropdownProps> = ({ options = sizeOptions, defaultValue = "", onChange }) => {
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
    <Box ref={dropdownRef} sx={SizeDropdownStyles.container}>
      <Box onClick={() => setIsOpen(!isOpen)} sx={SizeDropdownStyles.dropdown}>
        <Typography sx={SizeDropdownStyles.dropdownText}>{selectedOption}</Typography>
        <Box sx={SizeDropdownStyles.arrow(isOpen)} />
      </Box>
      {isOpen && (
        <Box sx={SizeDropdownStyles.optionsContainer}>
          {options.map(option => (
            <Box
              key={option.id}
              onClick={() => handleOptionClick(option.name)}
              sx={SizeDropdownStyles.option(selectedOption === option.name)}>
              <Typography sx={SizeDropdownStyles.optionText}>{option.name}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default SizeDropdown;
