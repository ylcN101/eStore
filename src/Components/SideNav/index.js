import { useDispatch, useSelector } from "react-redux"
import "./_side-nav.scss"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { getCategories } from "../../redux/category/actions"
import { useEffect, useState } from "react"
import { filterProd, filterByPrice } from "../../redux/products/productSlice"

const SideNav = () => {
  const accordionData = useSelector((state) => state.categoryReducer.categories)
  const fetchedProdData = useSelector((state) => state.productReducer)
  const { products } = fetchedProdData
  const [minPrice, setMinPrice] = useState(10)
  const [maxPrice, setMaxPrice] = useState(130)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    setMinPrice(10)
    setMaxPrice(130)
  }, [products])

  const filterData = (selectedCat) => {
    dispatch(
      filterProd({
        selectedCat,
        originalProducts: fetchedProdData.originalProducts,
      })
    )
  }

  const applyFilterByPrice = () => {
    dispatch(
      filterByPrice({
        originalProducts: fetchedProdData.originalProducts,
        minPrice,
        maxPrice,
      })
    )
  }

  const onChangeFilterPrice = (e, filterFlag) => {
    const value = parseInt(e.target.value, 10)
    if (filterFlag === "min") {
      setMinPrice(value)
    } else {
      setMaxPrice(value)
    }
  }

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion my-3">
        {accordionData.map((accordionCategory, key) => {
          if (accordionCategory.parent_category_id === null) {
            return (
              <div className="accordion-item individual-category" key={key}>
                <div className="accordion-header">
                  <button
                    className="accordion-button"
                    data-bs-target={"#collapse" + key}
                    data-bs-toggle="collapse">
                    <div className="category-title">
                      <span>{accordionCategory.category}</span>
                    </div>
                  </button>
                </div>
                <div
                  className="accordion-collapse collapse show"
                  id={"collapse" + key}>
                  <div className="accordion-body">
                    <ul>
                      {accordionData.map((subCat, key) => {
                        if (
                          accordionCategory.id === subCat.parent_category_id
                        ) {
                          return (
                            <li key={key} className="sub-items">
                              <span onClick={() => filterData(subCat)}>
                                {subCat.category}
                              </span>
                            </li>
                          )
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            )
          } else {
            return null
          }
        })}
      </div>
      <div className="price-filter-container">
        <div className="section-title">
          <h3>Filter By Price</h3>
        </div>
        <div className="">
          <label htmlFor="minPrice">Min: {minPrice}</label>
          <input
            onChange={(e) => onChangeFilterPrice(e, "min")}
            className="form-range"
            id="minPrice"
            name="minPrice"
            type="range"
            min={10}
            max={130}
            step={10}
          />
        </div>
        <div className="">
          <label htmlFor="maxPrice">Max : {maxPrice}</label>
          <input
            onChange={(e) => onChangeFilterPrice(e, "max")}
            className="form-range"
            id="maxPrice"
            name="maxPrice"
            type="range"
            min={10}
            max={130}
            step={10}
          />
        </div>
        <button
          onClick={applyFilterByPrice}
          className="btn btn-outline-dark my-3">
          Apply Filter
        </button>
      </div>
    </div>
  )
}

export default SideNav
