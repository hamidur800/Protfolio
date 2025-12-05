import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import MySkills from "./Components/MySkills/MySkills";
import Navber from "./Components/Navbaer/Navber";
import Protfolio from "./Components/Protfolio/Protfolio";

function App() {
  return (
    <>
      <Navber />
      <About />
      <MySkills />
      <Protfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
