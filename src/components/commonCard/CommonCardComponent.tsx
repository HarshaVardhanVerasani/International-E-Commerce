import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeWrapper";
import { addToFavorites, removeFromFavorites } from "../../redux/favoritesReducer/FavoritesSlice";
import { RootState } from "../../redux/Store";
import { CommonCardComponentStyles } from "./CommonCardComponentStyles";
import { lightTheme } from "../../config/colorPalette";

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
  isLargeText?: boolean;
  isDescHasLink?: boolean;
  id: number;
  brand: string;
  name: string;
  color: string;
  size: string;
  isNew: boolean;
  isActive?:boolean;
}

const CommonCardComponent = ({
  title,
  description,
  price,
  images,
  isDescriptionHas,
  isIconHas,
  isPriceHas,
  isBgActive,
  isTitleHasUnderline,
  isLargeText,
  isDescHasLink,
  isActive,
  brand,
  name,
  color,
  size,
  isNew,
  id,
}: CommonCardProps) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const { colors } = useContext(ThemeContext);
  const style = CommonCardComponentStyles(colors);
  const favorites = useSelector((state: RootState) => state.favoritesSlice.items);
  const isFavorited = favorites.some(item => item.id === id);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const navigate = useNavigate();

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
    }, 500);
  };
  // const currentImage = hovered ? images[1] : images[0];
  console.log(isBgActive, "aASasASs");

  const toggleFavorite = () => {
    console.log("Toggling Favorite for ID:", id);
    if (isFavorited) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(
        addToFavorites({
          id,
          title,
          description,
          price,
          image: images[0],
          brand,
          name,
          color,
          size,
          isNew,
        })
      );
    }
  };

  return (
    <Box sx={style.mainContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isIconHas && (
        <Box sx={style.iconContainer}>
          <IconButton onClick={toggleFavorite}>
            {isFavorited ? <FavoriteIcon sx={{ color: lightTheme.darkBrown }} /> : <FavoriteBorderIcon sx={style.icon} />}
          </IconButton>
        </Box>
      )}

      <Box sx={[style.imageContainer, isBgActive ? { backgroundColor: "#f5f5f5", height: "350px", width: "80%", margin: "0 auto" } : {}]}>
      {isActive?
      <Link to={`productDetails/${id}`}>
        <Box component="img" src={images[0]} alt={title} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
            isTitleHasUnderline ? { textDecoration: "underline", color: colors.darkBrown } : {},
            isLargeText ? { textTransform: "uppercase", fontSize: "1.5rem", textAlign: "center", fontFamily: "miller-light" } : {},
          ]}>
          {isTitleHasUnderline ? (
            <Link
              to="women-clothing"
              style={{ textDecoration: "underline", color: colors.darkBrown }}
              onClick={e => handleLinkClick(e, "/women-clothing")}>
              {title.toLocaleUpperCase()}
            </Link>
          ) : (
            title.toLocaleUpperCase()
          )}
        </Typography>
        {isDescHasLink &&  <Link
              to="read-shop"
              style={{ textDecoration: "underline", color: colors.darkBrown }}
              onClick={e => handleLinkClick(e, "/read-shop")}>
             Read & Shop
            </Link>}
        {isDescriptionHas && <Typography sx={style.descriptionText}>{description}</Typography>}

        {isPriceHas && <Typography sx={style.priceText}>${price.toFixed(2)}</Typography>}
      </Box>
    </Box>
  );
};

export default CommonCardComponent;
