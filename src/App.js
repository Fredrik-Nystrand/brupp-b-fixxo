import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import HomePage from "./Views/HomePage/HomePage"
import ProductPage from "./Views/ProductPage/ProductPage"
import SingleProductPage from "./Views/SingleProductPage/SingleProductPage"
import Admin from "./Views/Admin/Admin"

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container-outer">
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
