import React from "react";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { FilterOption } from "../../utils/productsDataTypes";
import { Add} from "@mui/icons-material";
import FilterCheckbox from "./FilterCheckbox";
import { lightTheme } from "../../config/colorPalette";

interface FilterGroupProps {
  title: string;
  options: FilterOption[];
  onChange: (id: string, checked: boolean) => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  options,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(true);

  return (
    < >
      <Accordion expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}  sx={{
        borderBottom: `1px solid ${lightTheme.darkBrown}`,  
      }}>
        <AccordionSummary
          expandIcon={<Add sx={{ color: lightTheme.darkBrown }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: 'transparent',
            fontWeight: '500',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{fontSize:'14px'}}>{title.toUpperCase()}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingTop: 0 }}>
          <>
            {options.map((option) => (
              <FilterCheckbox
                key={option.id}
                option={option}
                onChange={onChange}
              />
            ))}
          </>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FilterGroup;
