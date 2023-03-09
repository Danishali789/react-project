import "./App.css";
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from "./Home/home";
import Header from "./Header/header";
import About from "./About/about";
import Screenshot from "./ScreenShot/screenshot";
import Services from "./Service/services";
import Blog from "./Our Blog/blog.js";
import Contact from "./Contact/contact";
// import Contactus from "./ContactUs/contactus";
import Footer from "./Footer/footer";

function App() {
  return (
    <>
      <Header title="BOOCIC" />
      <Home />
      <About />
      <Screenshot/>
      <Services/>
      <Blog/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
