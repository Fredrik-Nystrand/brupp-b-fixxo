import './App.css';
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero';
import ButtonMain from "./components/ButtonMain/ButtonMain"

function App() {
  return (
    <div className="container-outer">
      <Hero/>
      <div className="container-inner">
        <ButtonMain
          variant="dark"
          border={true}
          text="action"
          onClick={() => console.log("test")}
        />
      </div>
    </div>
  );
}

export default App
