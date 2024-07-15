import React from "react";
import Slider from "react-slick";
import Image1 from "../assets/slide1.jpg";
import Image2 from "../assets/slide2.jpg";
import Image3 from "../assets/slide3.jpg";

const Gallery = () => {

  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#282828] py-10 sm:py-20">
        <h1 className='text-lg sm:text-4xl text-[#d8ac47eb] playwrite text-center'>Timeless Moments at Ashtavinayak Banquets</h1>
        <hr className='border-t-4 border-[#d8ac47eb] mt-5 mb-10 mx-auto w-2/12'/>
      <Slider className="lg:w-7/12 w-10/12" {...settings}>
         <img src={Image1}/>
         <img src={Image2}/>
         <img src={Image3}/>
      </Slider>
    </div>
  );
};

export default Gallery;
