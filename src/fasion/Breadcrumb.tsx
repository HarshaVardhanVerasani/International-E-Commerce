import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
  }[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <Box display="flex" alignItems="center" gap={1} fontSize={14}>
      {items.map((item, index) => (
        <Box key={item.href} display="flex" alignItems="center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
          <Link
            to={item.href}
            style={{
              textDecoration: "none",
              color: index === items.length - 1 ? "#4A4A4A" : "#FF5A5F", // Custom color for primary link
            }}
          >
            <Typography variant="body2" sx={{ "&:hover": { textDecoration: "underline" } }}>
              {item.label}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default Breadcrumb;
