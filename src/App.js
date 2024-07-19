import Header from "../src/Components/Header.js";
import Banner from "./Components/Banner.js";
import Context from "./Components/Context.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "./Components/Gallery.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Loader from "./Components/Loader.js";
import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {

  const locomotive = new LocomotiveScroll();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
       {loading ? <Loader/> :(
        <div>
          <Header />
          <Banner />
          <Context />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
