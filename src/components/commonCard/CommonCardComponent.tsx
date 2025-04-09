import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeWrapper";
import { CommonCardComponentStyles } from "./CommonCardComponentStyles";
import { Link, useNavigate } from "react-router-dom";

interface CommonCardProps {
  title: string;
  description: string;
  price: number;
  images: string[];
  onClick?: () => void;
  isDescriptionHas?: boolean;
  isIconHas?: boolean;
  isPriceHas?: boolean;
  isBgActive?: boolean;
  isTitleHasUnderline?: boolean;
  isLargeText?: boolean,
  isDescHasLink?: boolean,
  isActive?:boolean;
  id:number
}

const CommonCardComponent = ({
  title,
  description,
  price,
  images,
  onClick,
  isDescriptionHas,
  isIconHas,
  isPriceHas,
  isBgActive,
  isTitleHasUnderline,
  isLargeText,
  isDescHasLink,
  isActive,
  id
}: CommonCardProps) => {
  const [hovered, setHovered] = useState(false);
  const { colors } = useContext(ThemeContext);
  const style = CommonCardComponentStyles(colors);
  
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(path); 
    }, 500);
  };

  // const isFavorite = favorites.some((product) => product.id === id);
  // const currentImage = hovered ? images[1] : images[0];
console.log(isBgActive,'aASasASs')
  return (
    <Box
      sx={style.mainContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isIconHas && (
        <Box sx={style.iconContainer}>
          <IconButton>
            <FavoriteBorderIcon sx={style.icon} />
          </IconButton>
        </Box>
      )}

      <Box sx={[style.imageContainer, isBgActive ? { backgroundColor: '#f5f5f5' ,height: "350px", width: "80%",margin:'0 auto'}:{}]}>
      {isActive?
      <Link to={`productDetails/${id}`}>
        <Box
          component="img"
          src={images[0]}
          alt={title}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Link>:<Box
      component="img"
      src={images[0]}
      alt={title}
      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
    />}
        
      </Box>

      <Box sx={style.textContainer}>
        <Typography
          sx={[
            style.titleText,
            isTitleHasUnderline ? { textDecoration: 'underline',color:colors.darkBrown }:{},
            isLargeText?{textTransform:'uppercase',fontSize:'1.5rem', textAlign: "center",fontFamily:'miller-light'}:{}
          ]}
        >
          {isTitleHasUnderline? <Link to='women-clothing' style={{ textDecoration: 'underline',color:colors.darkBrown }}  onClick={(e) => handleLinkClick(e, '/women-clothing')}>{title.toLocaleUpperCase()}</Link>:title.toLocaleUpperCase()}  
        </Typography>
        {isDescHasLink&&<Typography
         sx={style.linkText}
        >
          <Link to='read-shop' style={{ textDecoration: 'underline',color:colors.darkBrown }}  onClick={(e) => handleLinkClick(e, 'read-shop')}> Read & Shop</Link>
        </Typography>}
        {isDescriptionHas && (
          <Typography  sx={style.descriptionText}>
            {description}
          </Typography>
        )}
        {isPriceHas && (
          <Typography sx={style.priceText}>
            ${price.toFixed(2)}
          </Typography>
        )}        
      </Box>
    </Box>
  );
};

export default CommonCardComponent;
