import { Typography } from "@mui/material";

interface ResultsCountProps {
  count: number;
}

const ResultsCount = ({ count }: ResultsCountProps) => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      sx={{ fontSize: "0.875rem" }} 
    >
      {count} {count === 1 ? "Result" : "Results"}
    </Typography>
  );
};

export default ResultsCount;
