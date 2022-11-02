import "./App.css"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import StylesOffer from "./components/StylesOffer/StylesOffer"

function App() {
  return (
    <div className="container-outer">
      <Navbar /> 
      <StylesOffer/>
      <Footer />
      <div className="container-inner"></div>
    </div>
  )
}

export default App
