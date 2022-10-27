import "./App.css"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="container-outer">
      <Navbar /> 
      <Footer />
      <div className="container-inner"></div>
    </div>
  )
}

export default App
