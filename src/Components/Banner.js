import React from 'react';
import Slider from 'react-slick';

function Banner() {

  var settings = {
    infinite: true,
    speed: 500,
    fade:true,
    autoplay:true,
    autoplaySpeed:2000
  };

  return (
    <div className='w-full overflow-x-hidden'>
      <Slider {...settings}>
         <div className='slide-1'>
            <div className="top-[50%] relative ">
              <h1 className='text-white playwrite text-3xl'>Celebrate the Timeless Elegance of Your Next Event</h1>
               <button className='px-6 py-2 bg-white mt-6 text-black'>ENQUIRE NOW</button>
            </div>
         </div>
         <div className='slide-2'>
            <div className="top-[50%] relative">
              <h1 className='text-white playwrite text-3xl'>Transforming Dreams Into Reality – Book Your Magical Day!</h1>
              <button className='px-6 py-2 bg-white mt-6 text-black'>ENQUIRE NOW</button>
            </div>
         </div>
         <div className='slide-3'>
            <div className="top-[50%] relative">
              <h1 className='text-white playwrite text-3xl'>Where Every Detail Counts – Perfect Settings for Perfect Moments</h1>
              <button className='px-6 py-2 bg-white mt-6 text-black'>ENQUIRE NOW</button>
            </div>
         </div>
      </Slider>
    </div>
  );
}

export default Banner;
