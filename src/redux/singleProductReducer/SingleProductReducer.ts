import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailedProduct } from "../../utils/data";

interface SingleProductState {
  singleProductDetailsPending: "INITIAL" | "LOADING" | "SUCCESS" | "ERROR";
  singleProductDetailsSuccess: DetailedProduct | null;
  singleProductDetailsError: string;
}

const initialSingleProductState: SingleProductState = {
  singleProductDetailsPending: "INITIAL",
  singleProductDetailsSuccess: null,
  singleProductDetailsError: "",
};

export const fetchSingleProduct = createAsyncThunk("singleProduct/fetchSingleProduct", async (productId: number, { rejectWithValue }) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    if (!response.ok) {
      let errorMessage = `Failed to fetch product details (Status: ${response.status})`;
      if (response.status === 404) {
        errorMessage = "Product not found";
      }
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data as DetailedProduct;
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Something went wrong while fetching the product.";
    return rejectWithValue(errorMessage);
  }
});

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: initialSingleProductState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSingleProduct.pending, state => {
        state.singleProductDetailsPending = "LOADING";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action: PayloadAction<DetailedProduct>) => {
        state.singleProductDetailsPending = "SUCCESS";
        state.singleProductDetailsSuccess = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.singleProductDetailsPending = "ERROR";
        state.singleProductDetailsError = action.error.message || "An error occurred";
      });
  },
});

export default singleProductSlice.reducer;
