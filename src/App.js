import "./App.css"
import ButtonMain from "./components/ButtonMain/ButtonMain"
import Footer from "./components/Footer/Footer"
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
    </div>
  )
}

export default App
