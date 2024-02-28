import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllRecords } from "../../db";

const FETCH_ALL_PRODUCTS = createAsyncThunk(
  "FETCH_ALL_PRODUCTS",
  async (_, thunkAPI) => {
    try {
      const sqlResult = await fetchAllRecords();
      return thunkAPI.fulfillWithValue(sqlResult);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export default FETCH_ALL_PRODUCTS;
