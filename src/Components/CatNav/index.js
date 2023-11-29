import { useEffect } from "react"
import "./_cat-nav.scss"
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../redux/category/actions"

const CatNav = () => {
  const categories = useSelector((state) => state.categoryReducer.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <>
      <div className="cat-nav-container container">
        <ul>
          {categories.map((category, key) => {
            if (category.parent_category_id === null) {
              return (
                <li key={key} className="list-items">
                  <a href="#">{category.category} </a>
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>
      </div>
    </>
  )
}

export default CatNav
