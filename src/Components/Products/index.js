import { getProducts } from "../../redux/products/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import "./_products.scss"
import { addCartItem } from "../../redux/cart/cartSlice"

const Products = () => {
  const productData = useSelector((state) => state.productReducer.products)
  const cart = useSelector((state) => state.cartReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const addToCart = (cartData) => {
    dispatch(addCartItem(cartData))
  }

  return (
    <div className="products-container">
      {productData.map((product, key) => {
        return (
          <div key={key} className="mx-5 p-3 product-card">
            <div className="product-image-container">
              <img
                alt="img"
                src={require("../../assets/images/shop/" + product.product_img)}
              />
            </div>
            <div className="product-info">
              <h5>
                <span href="#">{product.product_name}</span>
              </h5>
              <p className="product-price"> ${product.price} </p>
              <div className="my-3" onClick={() => addToCart(product)}>
                <div className="cart-button">
                  <div className="cart-icon-container">
                    <i className="fa fa-shopping-cart mx-4" />
                  </div>
                  <div className="cart-text-container mx-3">
                    <p>Add to Cart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
