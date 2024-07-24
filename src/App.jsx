import "./app.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Parallax from "./Components/parallax/Parallax";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Cursor from "./Components/cursor/Cursor";
const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section><Services/></section>
    { <section id="Portfolio"><Parallax type="portfolio"/>
    </section> }
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
    
  </div>;
};

export default App;
