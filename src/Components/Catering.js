import React from "react";
import Cateringg from "../assets/Catering.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Fork from "../assets/cutlery-fork-svgrepo-com.svg"
import Glass from "../assets/cocktail-drink-svgrepo-com.svg"
import Bag from "../assets/luggage-baggage-svgrepo-com.svg"
import Attention from "../assets/meal-lunch-svgrepo-com.svg"

const Catering = () => {
  const { ref: countUpRef, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  return (
    <>
      <div className="catering-banner flex items-center justify-center">
        <h1 className="text-4xl text-white playwrite">
          Award Winning Catering Services now available in Dombivali
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-10 sm:gap-y-20 bg-[#282828] px-5 lg:px-20 py-14 items-center">
        <div className="my-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-[#d8ac47eb] playwrite text-center">
            Experience the Best: Award-Winning Catering
          </h1>
          <hr className="border-t-4 mt-5 border-[#d8ac47eb] mx-auto w-2/12" />
          <p className="text-white mt-8 text-sm md:text-lg md:text-center">
            At Ashtavinayak Banquets, we bring a range of culinary experiences
            and cuisines to our guests, right from your traditional Kolkata live
            Chaat counter to a Live State-of-the-Art Pasta Station. We’ve also
            introduced a live WOK station, bringing together flavors from Pan
            Asia and other popular South Asian cuisines. In addition to these,
            we offer an array of gourmet desserts and specialty beverages,
            ensuring every event is a feast for the senses. Our commitment to
            quality and innovation ensures that every dish is crafted with the
            finest ingredients and utmost care.
          </p>
        </div>
        <img src={Cateringg} className="w-full" />
      </div>
      <div className="grid grid-cols-4 py-10 px-5 gap-x-6" ref={countUpRef}>
        <div className="text-[#d8ac47eb] flex flex-col gap-y-4 text-center text-xl font-semibold">
          <h1 className="text-4xl">
            {inView && <CountUp end={12} duration={3} />}
            <span className="ml-2">+</span>
          </h1>
          <h1>World Cuisines to choose from</h1>
        </div>
        <div className="text-[#d8ac47eb] flex flex-col gap-y-4 text-center text-xl font-semibold">
          <h1 className="text-4xl">
            {inView && <CountUp end={5} duration={3} />}
            <span className="ml-2">+</span>
          </h1>
          <h1>In-House Chefs</h1>
        </div>
        <div className="text-[#d8ac47eb] flex flex-col gap-y-4 text-center text-xl font-semibold">
          <h1 className="text-4xl">
            {inView && <CountUp end={100} duration={3} />}
            <span className="ml-2">+</span>
          </h1>
          <h1>Events across Categories</h1>
        </div>
        <div className="text-[#d8ac47eb] flex flex-col gap-y-4 text-center text-xl font-semibold">
          <h1 className="text-4xl">
            {inView && <CountUp end={25000} duration={3} />}
            <span className="ml-2">+</span>
          </h1>
          <h1>Guests catered to</h1>
        </div>
      </div>
      <h1 className="text-center text-4xl mt-14 text-[#d8ac47eb] playwrite">What Sets Us Apart</h1>
      <hr className="border-t-4 mt-5 border-[#d8ac47eb] mx-auto w-1/12" />
      <div className="grid grid-cols-4 py-10 px-5 gap-x-6">
        <div className="flex flex-col items-center justify-center mt-7">
           <img src={Fork} className="h-16"/>
           <h1 className="text-white mt-5">Passionate and experienced culinary team</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-7">
           <img src={Glass} className="h-16"/>
           <h1 className="text-white mt-5">⁠Customized menus tailored to your unique needs</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-7">
           <img src={Attention} className="h-16"/>
           <h1 className="text-white mt-5">Impeccable attention to detail and presentation</h1>
        </div>
        <div className="flex flex-col items-center justify-center mt-7">
           <img src={Bag} className="h-16"/>
           <h1 className="text-white mt-5">Unparalleled service and event coordination</h1>
        </div>
      </div>
    </>
  );
};

export default Catering;
