import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../../src/redux/cartReducer/CartSlice";
import favoritesSlice from "./favoritesReducer/FavoritesSlice";

export const store = configureStore({
  reducer: {
    cartSlice,
    favoritesSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
