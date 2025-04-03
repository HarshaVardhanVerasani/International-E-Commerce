import { Button } from "@mui/material";
import { CommonButtonStyles } from "./CommonButtonStyles";
interface IProps {
  title: string;
  color: string;
  bgColor: string;
}
const CommonButton = ({ title, color, bgColor }: IProps) => {
  const style=CommonButtonStyles(color,bgColor)
  return (
    <Button
      sx={style.buttonContainer}>
      {title}
    </Button>
  );
};

export default CommonButton;
