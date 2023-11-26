import accordionSlice from "../../store/slices/accordionCatSlice/accordionCatSlice"
import "./_side-nav.scss"

import { useSelector } from "react-redux"

const SideNav = () => {
  const accordionData = useSelector(accordionSlice.getInitialState)

  return (
    <div className="side-nav">
      <div className="section-title">
        <h3>Category</h3>
      </div>

      <div className="accordion">
        {accordionData.map((accCat, key) => {
          return (
            <div key={key} className="accordion-item individual-category">
              <div className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${key}`}>
                  <div className="category-title">
                    <span>{accCat.category}</span>
                  </div>
                </button>
              </div>
              <div
                className="accordion-collapse collapse show"
                id={`collapse${key}`}>
                <div className="accordion-body">
                  <ul>
                    {accCat.items.map((item, itemKey) => {
                      return (
                        <li key={itemKey} className="sub-items">
                          <span>{item}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SideNav
