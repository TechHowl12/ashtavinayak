import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../src/Components/Header.js";
import Banner from "./Components/Banner.js";
import Context from "./Components/Context.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "./Components/Gallery.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Loader from "./Components/Loader.js";
import Catering from "./Components/Catering.js";
import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <Context />
                <Gallery />
                <Contact />
              </>
            } />
            <Route path="/catering" element={<Catering />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>   
  );
}

export default App;
