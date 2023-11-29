import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "../category/categorySlice"
import productSlice from "../products/productSlice"
import cartSlice from "../cart/cartSlice"

export const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
})
