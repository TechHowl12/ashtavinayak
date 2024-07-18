import React from "react";
import Slider from "react-slick";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image7 from "../assets/7.jpg";
import Image8 from "../assets/8.jpg";
import Image9 from "../assets/9.jpg";
import Image10 from "../assets/10.jpg";
import Image11 from "../assets/11.jpg";
import Image12 from "../assets/12.jpg";
import Image13 from "../assets/13.jpeg";
import Image14 from "../assets/14.jpg";
import Image15 from "../assets/15.jpg";
import Image16 from "../assets/16.jpg";
import Image18 from "../assets/18.jpg";
import Image19 from "../assets/19.jpg";
import Image20 from "../assets/20.jpg";


const images = [
  { src: Image2, alt: 'Image 2' },
  { src: Image3, alt: 'Image 3' },
  { src: Image4, alt: 'Image 4' },
  { src: Image5, alt: 'Image 5' },
  { src: Image7, alt: 'Image 7' },
  { src: Image8, alt: 'Image 8' },
  { src: Image9, alt: 'Image 9' },
  { src: Image10, alt: 'Image 10' },
  { src: Image11, alt: 'Image 11' },
  { src: Image12, alt: 'Image 12' },
  { src: Image13, alt: 'Image 13' },
  { src: Image14, alt: 'Image 14' },
  { src: Image15, alt: 'Image 15' },
  { src: Image16, alt: 'Image 16' },
  { src: Image18, alt: 'Image 18' },
  { src: Image19, alt: 'Image 19' },
  { src: Image20, alt: 'Image 20' },

];

const Gallery = () => {

  const settings = {
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
        {images.map((image, index) => (
          <div key={index}>
            <img className="w-full aspect-video object-cover" src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
