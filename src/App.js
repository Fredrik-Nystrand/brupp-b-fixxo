import "./App.css"
import { useEffect, useState } from "react"
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
        {/* <div className="d-grid">
        <ProductGrid
          products={fakeProducts}
          vertical={true}
          numberOfItems={3}
          numberOfColumns={1}
          title="Related Products"
          titleAlign="left"
          paginationStyle="big"
          showPagination={false}
        />
        <ProductGrid
          products={fakeProducts}
          vertical={true}
          numberOfItems={3}
          numberOfColumns={1}
          title="Related Products"
          titleAlign="left"
          paginationStyle="big"
          showPagination={false}
        />
        <ProductGrid
          products={fakeProducts}
          vertical={true}
          numberOfItems={3}
          numberOfColumns={1}
          title="Related Products"
          titleAlign="left"
          paginationStyle="big"
          showPagination={false}
        />
      </div> */}
      </div>
    </div>
  )
}

export default App
