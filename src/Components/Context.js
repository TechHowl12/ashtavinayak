import React, { useEffect, useState } from "react";
import Image1 from "../assets/8.jpg";
import Image2 from "../assets/19.jpg";
import Image3 from "../assets/11.jpg";
const Context = () => {
  const [enableScroll, setEnableScroll] = useState(true);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth <= 768) {
        setEnableScroll(false);
      } else {
        setEnableScroll(true);
      }
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <>
      <div className="bg-[#282828] mt-10 sm:mt-0 sm:py-20">
        <div
          className={`flex flex-col mx-auto sm:w-3/4 lg:w-1/2 ${
            enableScroll ? "data-scroll" : ""
          }`}
          data-scroll-speed=".2"
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl text-[#d8ac47eb] playwrite text-center">
            A Magnificent Venue for Special Events
          </h1>
          <hr className="border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12" />
          <p className="text-white mt-8 text-sm md:text-lg px-5 sm:px-0 sm:text-center">
            Located in the heart of Mumbai at MIDC Dombivli, Ashtavinayak
            Banquet’s central location makes it easier for guests to travel from
            every corner of the city. This venue is the preferred choice for all
            events and functions, from lavish wedding receptions and festive
            celebrations to intimate family gatherings. Ashtavinayak Halls,
            where every event becomes an unforgettable experience.
          </p>
          <button className="bg-[#d8ac47eb] text-black uppercase px-6 py-2 mt-6 sm:w-2/4 mx-auto">
            Download brochure
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-10 sm:gap-y-20 bg-[#282828] px-5 lg:px-20 py-10 items-center">
        <div className="my-auto order-2 sm:order-2">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-[#d8ac47eb] playwrite text-center">
            Grandeur and Versatility
          </h1>
          <hr className="border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12" />
          <p className="text-white mt-8 text-sm md:text-lg md:text-center">
            Ashtavinayak Banquets provides you with an elegant space which is
            yours to customize and design according to your celebrational needs.
            An exceptional venue which can host 600 guests seated and up to 1000
            guests floating which is versatile to accommodate your special
            needs. Contemporary and cutting edge interior designs make this a
            grand and luxurious space for you to host your personal,
            professional, and intimate events.
          </p>
        </div>
        <div className="order-1 sm:order-1" data-scroll data-scroll-speed=".2">
          <img
            loading="lazy"
            src={Image1}
            className="block w-full aspect-video object-cover"
          />
        </div>
        <div className="order-3 sm:order-4" data-scroll data-scroll-speed=".2">
          <img
            loading="lazy"
            src={Image3}
            className="block w-full aspect-video object-cover"
          />
        </div>
        <div className="my-auto order-4 sm:order-3">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-[#d8ac47eb] playwrite text-center">
            An Unforgettable Luxurious Experience
          </h1>
          <hr className="border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12" />
          <p className="text-white mt-8 text-sm md:text-lg md:text-center">
            Ambience isn’t a one-size-fits-all mechanism. We focus on creating
            bespoke event experiences for your unique needs, creating
            breathtaking settings for all in attendance. Beyond the tangible
            beauty of our setting lies our intangible commitment to excellence
            in curating your experience. Our majestic décor and standout
            hospitality are sure to mesmerize your guests with every passing
            moment. The compliments you will receive from them shall sum up
            everything else.
          </p>
        </div>
        <div className="my-auto order-6">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-[#d8ac47eb] playwrite text-center">
          Award-Winning Catering Services
          </h1>
          <hr className="border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12" />
          <p className="text-white mt-8 text-sm md:text-lg md:text-center">
            Choose from a range of extraordinary menu options listed by
            award-winning catering companies like Blue Sea Catering, Chetak
            Caterers, and the renowned vegetarian catering company, Pavitra
            Catering. Rest assured, your guests are bound to dine on delicious
            food options provided by our catering partners with over four
            decades of experience and culinary excellence
          </p>
        </div>
        <div className="order-5">
          <img
            loading="lazy"
            data-scroll
            data-scroll-speed=".2"
            src={Image2}
            className="block w-full aspect-video object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Context;
