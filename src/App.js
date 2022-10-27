import "./App.css"
import { useEffect, useState } from "react"
import Footer from "./components/Footer/Footer"
import ProductGrid from "./components/ProductGrid/ProductGrid"
import fakeProducts from "./Store/fakeProducts.json"

function App() {
  return (
    <div className="container-outer">
      <div className="container-inner">
        <ProductGrid products={fakeProducts} vertical={false} />
      </div>
    </div>
  )
}

export default App
