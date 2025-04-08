import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, lazy, useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeWrapper";
import { commonSearchStyles } from "./commonSearchStyles";
import { logo } from "../../common/assets/images/imageFile";

const CommonButton = lazy(() => import("../commonButton/CommonButton"));

export const searchListData = [
  {
    title: "shoes",
    relatedItems: [
      "Party Wear/Mens",
      "Party Wear/Women",
      "Wedding/For The Bride",
      "Women Bestsellers",
      "Men Bestsellers",
      "Wedding/Wedding Guest",
      "Women Exclusive",
      "Men Exclusive",
    ],
  },
];

interface IProps {
  searchDrawer: boolean;
  handleClose: () => void;
}

const CommonSearch = (props: IProps) => {
  const { colors } = useContext(ThemeContext);
  const styles = commonSearchStyles(colors);

  const [search, setSearch] = useState<string>("");
  const [productsList, setProductsList] = useState<string[]>([]);
  const [endIndex, setEndIndex] = useState<number>(4);

  const handleViewAll = () => {
    setEndIndex(productsList.length);
  };

  const handleClick = () => {
    props.handleClose();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    getProductsList(value);
  };

  const getProductsList = (name: string) => {
    const matchedItems = searchListData
      .filter(each => each.title.toLowerCase().startsWith(name.toLowerCase()))
      .flatMap(each => each.relatedItems);
    setProductsList(matchedItems);
  };

  const renderSearchResults = () => {
    if (search === "") {
      return <Typography></Typography>;
    }

    if (productsList.length === 0 && search.length !== 0) {
      return <Typography>...no items found</Typography>;
    }

    return productsList.slice(0, endIndex).map((each, index) => (
      <Box key={index} sx={styles.item}>
        <Typography sx={styles.keys}>{search}</Typography>
        <Typography>{each}</Typography>
      </Box>
    ));
  };

  return (
    <Drawer anchor="top" open={props.searchDrawer} onClose={handleClick} hideBackdrop>
      <Stack sx={styles.container}>
        <Box component="img" src={logo} sx={styles.image} alt="...no image" />

        <TextField
          value={search}
          onChange={handleChange}
          sx={styles.input}
          placeholder="Search Harrods.com"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={styles.searchIcon} />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />

        <Stack sx={styles.itemsContainer}>{renderSearchResults()}</Stack>
        <Box
          onClick={handleClick}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            padding: "20px",
            zIndex: 1000,
            color: "#FFF",
            gap: "5px",
            cursor: "pointer",
            bottom:"0px"
          }}>
          <CloseIcon />
          <Typography sx={styles.closeText}>CLOSE SEARCH</Typography>
        </Box>
        {search.length > 0 && productsList.length > 0 && (
          <Box onClick={handleViewAll} sx={styles.btn}>
            <CommonButton bgColor="#8a7252" color="#8a7252" mainBgColor="white" title="View All" authButton={false} />
          </Box>
        )}
      </Stack>
    </Drawer>
  );
};

export default CommonSearch;
