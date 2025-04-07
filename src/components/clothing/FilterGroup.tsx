import React from "react";

import { Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import { FilterOption } from "../../utils/productsDataTypes";
import { ExpandMore } from "@mui/icons-material";
import FilterCheckbox from "./FilterCheckbox";

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
      <Accordion expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
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
          <span>{title}</span>
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
