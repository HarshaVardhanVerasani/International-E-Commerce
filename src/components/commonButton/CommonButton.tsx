import { Button } from "@mui/material";
import { CommonButtonStyles } from "./CommonButtonStyles";
interface IProps {
  title: string;
  color: string;
  bgColor: string;
  authButton?:boolean | undefined,
  mainBgColor:string 
}
const CommonButton = ({ title, color, bgColor,authButton,mainBgColor }: IProps) => {
  const style=CommonButtonStyles(color,bgColor,authButton,mainBgColor)
  return (
    <Button
      sx={style.buttonContainer}>
      {title}
    </Button>
  );
};

export default CommonButton;
