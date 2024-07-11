import Header from "../src/Components/Header.js";
import Banner from "./Components/Banner.js";
import Context from "./Components/Context.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "./Components/Gallery.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";

function App() {

  return (
    <>
          <Header />
          <Banner />
          <Context />
          <Gallery />
          <Contact />
          <Footer />
    </>
  );
}

export default App;
