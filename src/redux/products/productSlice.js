import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./actions"

const initialState = {
  products: [],
  loading: false,
  error: "",
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProd: (state, action) => {
      console.log("state:", state)
      console.log("action:", action)
      const filterData = action.payload.products.filter(
        (item) => item.category_id === action.payload.selectedCat.id
      )
      console.log("filterData:", filterData)
      state.products = filterData
    },
    filterByPrice: (state, action) => {
      const prodData = action.payload.products.filter(
        (item) =>
          item.price >= action.payload.minPrice &&
          item.price <= action.payload.maxPrice
      )
      state.products = prodData
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.loading = false
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const { filterByPrice, filterProd } = productSlice.actions
export default productSlice.reducer
