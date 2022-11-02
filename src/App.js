import "./App.css"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import ButtonMain from "./components/ButtonMain/ButtonMain"
import Footer from "./components/Footer/Footer"
<<<<<<< HEAD
import InstagramGrid from "./components/InstagramGrid/InstagramGrid"

function App() {
  return (
    // <div className="container-outer">
    //   <div className="container-inner">
    //     <ButtonMain
    //       variant="dark"
    //       border={true}
    //       text="action"
    //       onClick={() => console.log("test")}
    //     />
    //   </div>
    // </div>
    <div>
      <InstagramGrid />
=======
import ProductGrid from "./components/ProductGrid/ProductGrid"
import fakeProducts from "./Store/fakeProducts.json"
import Hero from "./components/Hero/Hero"
import Support from "./components/Support/Support"

function App() {
  return (
    <div className="wrapper">
      <div className="container-outer">
        <Navbar />
        <Hero />
        <div className="container-inner">
          <ProductGrid
            products={fakeProducts}
            vertical={false}
            title="Featured Products"
            titleAlign="center"
            numberOfColumns={4}
            numberOfItems={8}
            showPagination={false}
            sorting={false}
            className={`mt-4 mb-4`}
          />
          {/* STYLES SECTION */}
          <div className="d-flex gap-2 mt-2 mb-2">
            <ProductGrid
              products={fakeProducts}
              vertical={true}
              title="Latest Products"
              titleAlign="left"
              numberOfColumns={1}
              numberOfItems={3}
              showPagination={false}
              sorting={false}
            />
            <ProductGrid
              products={fakeProducts}
              vertical={true}
              title="Best Selling Products"
              titleAlign="left"
              numberOfColumns={1}
              numberOfItems={3}
              showPagination={false}
              sorting={false}
            />
            <ProductGrid
              products={fakeProducts}
              vertical={true}
              title="Top Reacted Products"
              titleAlign="left"
              numberOfColumns={1}
              numberOfItems={3}
              showPagination={false}
              sorting={false}
            />
          </div>

          <Support className={`mt-4 mb-4`} />
        </div>
        <Footer />
      </div>
>>>>>>> f76749e59bb974020cc0ca93e3523366de36dba7
    </div>
  )
}

export default App
