import { configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "./products-api";

const store = configureStore({
  reducer: { [productsAPI.reducerPath]: productsAPI.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

export default store;
