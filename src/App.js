import "./App.css"
import { useEffect, useState } from "react"
import ButtonMain from "./components/ButtonMain/ButtonMain"
import Footer from "./components/Footer/Footer"
import ProductGrid from "./components/ProductGrid/ProductGrid"
import fakeProducts from "./Store/fakeProducts.json"

function App() {
  return (
    <div className="container-outer">
      <div className="container-inner">
        <ProductGrid
          products={fakeProducts}
          vertical={false}
          numberOfColumns={3}
          paginationStyle="big"
          showPagination={true}
          sorting={true}
        />

        <ButtonMain
          variant="dark"
          border={true}
          text="action"
          onClick={() => console.log("test")}
        />
      </div>
    </div>
  )
}

export default App
