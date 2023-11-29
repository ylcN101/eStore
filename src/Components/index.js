import React from "react"
import { Routes, Route } from "react-router-dom"
import MainComponent from "./MainComponent"

const landingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainComponent} />
      </Routes>
    </div>
  )
}

export default landingPage
