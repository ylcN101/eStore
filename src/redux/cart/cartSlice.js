import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cartItems: [],
  totalItemsPrice: 0,
  totalItems: 0,
  totalQuantity: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const isItemExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      )
      state.cartItems = [...state.cartItems, action.payload]
      state.totalQuantity = ++state.totalQuantity
      state.totalItemsPrice = state.totalItemsPrice + action.payload.price
      if (!isItemExist) {
        state.totalItems = ++state.totalItems
      }
    },
  },
})
export const { addCartItem } = cartSlice.actions
export default cartSlice.reducer
