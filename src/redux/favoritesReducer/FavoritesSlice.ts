import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteItem {
  id: number;
  image: string;
  price: number;
  title: string;
  description: string;
  brand: string;
  name: string;
  color: string;
  size: string;
  isNew: boolean;
}

const storedFavorites = localStorage.getItem("favorites");
const initialState: { items: FavoriteItem[] } = {
  items: storedFavorites ? JSON.parse(storedFavorites) : [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavoriteItem>) => {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
