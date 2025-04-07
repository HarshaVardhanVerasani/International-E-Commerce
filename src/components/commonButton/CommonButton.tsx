import { Button } from "@mui/material";
import { CommonButtonStyles } from "./CommonButtonStyles";
interface IProps {
  title: string;
  color: string;
  bgColor: string;
  handleSubmit? : () => void
  authButton?:boolean | undefined,
  mainBgColor:string 
}
const CommonButton = ({ title, color, bgColor,handleSubmit,authButton,mainBgColor }: IProps) => {
  const style=CommonButtonStyles(color,bgColor,authButton,mainBgColor)
  return (
    <Button
      sx={style.buttonContainer} onClick={handleSubmit}>
      {title}
    </Button>
  );
};

export default CommonButton;
