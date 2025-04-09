import { FavoriteBorder } from "@mui/icons-material";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer/CartSlice";

interface FavoriteItemProps {
  item: {
    id: number;
    brand: string;
    name: string;
    price: number;
    color: string;
    size: string;
    image: string;
    isNew: boolean;
  };
  onRemove: () => void;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({ item, onRemove }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [size, setSize] = useState(item.size);

  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(
      addToCart({
        id: item.id,
        brand: item.brand,
        name: item.name,
        price: item.price,
        color: item.color,
        size: size,
        image: item.image,
        quantity: 1,
      })
    );
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <div className="relative">
      {showAlert && (
        <div className="fixed top-4 right-4 z-50">
          <Alert severity="success" className="shadow-lg">
            Added to bag successfully!
          </Alert>
        </div>
      )}{" "}
      <button
        onClick={onRemove}
        className="absolute top-0 right-0 p-2 text-brown-500 hover:text-brown-700"
        aria-label="Remove from favorites">
        <FavoriteBorder />
      </button>
      {item.isNew && (
        <div className="absolute top-0 right-12">
          <span className="bg-white border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded">NEW</span>
        </div>
      )}
      <Box>
        <div className="flex justify-center mb-4">
          <img src={item.image} alt={item.name} className="h-64 object-contain" />
        </div>

        <div className="text-center mb-3">
          <h3 className="text-sm font-medium text-gray-900">{item.brand}</h3>
          <p className="text-sm text-gray-700">{item.name}</p>
          <p className="text-sm font-medium text-gray-900 mt-1">${item.price.toFixed(2)}</p>
        </div>

        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1">Colour</p>
          <p className="text-sm">{item.color}</p>
        </div>

        <div className="mb-5">
          <p className="text-xs text-gray-500 mb-1">Size</p>
          <div className="relative">
            <select
              className="w-full border border-gray-300 p-2 pr-8 text-sm appearance-none bg-white"
              value={item.size}
              onChange={e => setSize(e.target.value)}>
              <option value={item.size}>{item.size}</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToBag}
          className="w-full py-3 bg-[#2F4933] text-white flex items-center justify-center hover:bg-[#243b29] transition-colors cursor-pointer">
          Add to bag
        </button>
      </Box>
    </div>
  );
};

export default FavoriteItem;
