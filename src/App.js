import { Routes, Route } from "react-router-dom"
import TopNav from "./Components/TopNav"
import CatNav from "./Components/CatNav"
import MainComponent from "./Components/MainComponent"
import ProductDetails from "./Components/ProductDetails"

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />

      <Routes>
        <Route path="/" Component={MainComponent} />
        <Route path="/productDetails" Component={ProductDetails} />
      </Routes>
    </div>
  )
}

export default App
