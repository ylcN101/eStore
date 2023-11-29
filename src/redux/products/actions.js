import { createAsyncThunk } from "@reduxjs/toolkit"

export const getProducts = createAsyncThunk("getProducts", async () => {
  const products = await fetch("http://localhost:5001/getProducts").then(
    (res) => res.json()
  )

  return products
})
