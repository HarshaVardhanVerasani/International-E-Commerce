import { useState } from "react";
import { Box, Typography, Collapse } from "@mui/material";
import { ChevronDown, ChevronUp } from "lucide-react";

const ColorFilter = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box mb={8}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        onClick={toggleExpand}
        sx={{ cursor: "pointer" }}
      >
        <Typography variant="h6" component="h3" sx={{ textTransform: "uppercase", letterSpacing: 1 }}>
          Colours
        </Typography>
        {isExpanded ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Box>

      <Collapse in={isExpanded}>
        <Typography variant="body2" sx={{ color: "gray", fontStyle: "italic" }}>
          Color filters coming soon
        </Typography>
      </Collapse>
    </Box>
  );
};

export default ColorFilter;
