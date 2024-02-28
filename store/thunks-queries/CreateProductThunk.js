import { createAsyncThunk } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";
import { insertIntoDb } from "../../db";
const CREATE_PRODUCT_THUNK = createAsyncThunk(
  "CREATE_PRODUCT_THUNK",
  async (data, thunkAPI) => {
    try {
      const { id, name, description, category, price, lat, lng, image } = data;

      // new path for image
      const newImagePath =
        FileSystem.documentDirectory + image.split("/").pop();
      // Directory + imagename.ext

      // move image from temp path to new path

      await FileSystem.moveAsync({ from: image, to: newImagePath });

      const sqlResult = await insertIntoDb(
        id,
        name,
        price,
        category,
        description,
        newImagePath,
        lat,
        lng
      );
      return thunkAPI.fulfillWithValue(sqlResult);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export default CREATE_PRODUCT_THUNK;
