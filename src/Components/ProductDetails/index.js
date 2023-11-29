import React from "react"
import { useLocation } from "react-router-dom"

const ProductDetails = () => {
  const location = useLocation()
  console.log("location:", location)
  return (
    <div>
      <div>
        <img
          alt="img"
          src={require("../../assets/images/shop/" +
            location.state.product_img)}
        />
      </div>
      <div>
        <h1>{location.state.product_name}</h1>
        <p>{location.state.description}</p>
        <p>{location.state.price}</p>
      </div>
    </div>
  )
}

export default ProductDetails
