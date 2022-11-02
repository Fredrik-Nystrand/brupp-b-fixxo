import "./App.css"
import ButtonMain from "./components/ButtonMain/ButtonMain"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import StylesOffer from "./components/StylesOffer/StylesOffer"

function App() {
  return (
    <div className="container-outer">

      <div className="container-inner">
        <Navbar /> 
        <StylesOffer/>
        <Footer />
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
