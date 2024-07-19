import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';

function Banner() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  const smoothScroll = (target, duration) => {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const formSection = document.querySelector('#form');
    if (formSection) {
      smoothScroll(formSection, 2000); // Adjust the duration as needed
    }
  };

  var settings = {
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div ref={scrollRef} className='w-full overflow-x-hidden'>
      <Slider {...settings}>
        <div className='slide-1'>
          <div className="top-[50%] relative ">
            <h1 className='text-white playwrite text-xs lg:text-3xl md:text-2xl'>Make Your Special Day an Unforgettable One</h1>
            <button onClick={handleScroll} className='px-6 py-2 bg-white mt-6 text-black text-sm hover:scale-110 transition-all'>
              ENQUIRE NOW
            </button>
          </div>
        </div>
        <div className='slide-2'>
          <div className="top-[50%] relative">
            <h1 className='text-white playwrite text-xs lg:text-3xl md:text-2xl'>The Perfect Venue for Grand Festivities</h1>
            <button onClick={handleScroll} className='px-6 py-2 bg-white mt-6 text-black text-sm hover:scale-110 transition-all'>
              ENQUIRE NOW
            </button>
          </div>
        </div>
        <div className='slide-3'>
          <div className="top-[50%] relative">
            <h1 className='text-white playwrite text-xs lg:text-3xl md:text-2xl'>Where Every Detail Exceeds Your Expectations</h1>
            <button onClick={handleScroll} className='px-6 py-2 bg-white mt-6 text-black text-sm hover:scale-110 transition-all'>
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
