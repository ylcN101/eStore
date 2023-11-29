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
      const { id, price } = action.payload
      const isItemExist = state.cartItems.find((item) => item.id === id)

      const updatedCartItems = isItemExist
        ? state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...state.cartItems, { id, quantity: 1, price }]

      const updatedTotalQuantity = state.totalQuantity + 1
      const updatedTotalItems = isItemExist
        ? state.totalItems
        : state.totalItems + 1
      const updatedTotalItemsPrice = state.totalItemsPrice + price

      return {
        ...state,
        cartItems: updatedCartItems,
        totalQuantity: updatedTotalQuantity,
        totalItems: updatedTotalItems,
        totalItemsPrice: updatedTotalItemsPrice,
      }
    },
  },
})
export const { addCartItem } = cartSlice.actions
export default cartSlice.reducer
