import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "./actions"

const initialState = {
  originalProducts: [],
  products: [],
  loading: false,
  error: "",
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filterProd: (state, action) => {
      const { originalProducts, selectedCat } = action.payload
      const filteredProducts = originalProducts
        ? originalProducts.filter((item) => item.category_id === selectedCat.id)
        : []

      return {
        ...state,
        products: filteredProducts,
      }
    },
    filterByPrice: (state, action) => {
      const { originalProducts, minPrice, maxPrice } = action.payload
      const filteredProducts = originalProducts
        ? originalProducts.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
          )
        : []

      return {
        ...state,
        products: filteredProducts,
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.originalProducts = action.payload
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
