
import "./App.css"
import { useEffect, useState } from "react"
import Navbar from './components/Navbar/Navbar';
import ButtonMain from "./components/ButtonMain/ButtonMain"
import Footer from "./components/Footer/Footer"
import ProductGrid from "./components/ProductGrid/ProductGrid"
import fakeProducts from "./Store/fakeProducts.json"
import Hero from './components/Hero/Hero';
import Support from './components/Support/Support';



function App() {
  return (
    <div className="container-outer">
      <Navbar /> 
      <Hero/>
      <div className="container-inner">
        <ProductGrid
          products={fakeProducts}
          vertical={false}
          numberOfColumns={3}
          paginationStyle="big"
          showPagination={true}
          sorting={true}
        />
      <Support/>
        <ButtonMain
          variant="dark"
          border={true}
          text="action"
          onClick={() => console.log("test")}
        />
      </div>
        <Footer />
    </div>
  );
}

export default App;
