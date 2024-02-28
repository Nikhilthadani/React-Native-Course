import { createSlice } from "@reduxjs/toolkit";
import CREATE_PRODUCT_THUNK from "./thunks-queries/CreateProductThunk";
import FETCH_ALL_PRODUCTS from "./thunks-queries/FetchProductThunk";
import { generateFakeProducts } from "../utils/constants";

const initialState = { products: generateFakeProducts() };
export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CREATE_PRODUCT_THUNK.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(CREATE_PRODUCT_THUNK.rejected, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(FETCH_ALL_PRODUCTS.fulfilled, (state, action) => {
      console.log(action.payload.rows._array);
      state.products.push(...action.payload.rows._array);
    });
  },
});
