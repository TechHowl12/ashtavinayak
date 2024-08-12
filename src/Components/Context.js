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
            Located in the heart of Mumbai at MIDC Dombivli, Ashtavinayaka
            Banquet’s central location makes it easier for guests to travel from
            every corner of the city. This venue is the preferred choice for all
            events and functions, from lavish wedding receptions and festive
            celebrations to intimate family gatherings. Ashtavinayaka Halls,
            where every event becomes an unforgettable experience.
          </p>
          <button className="bg-[#d8ac47eb] text-black uppercase px-6 py-2 mt-6 sm:w-2/4 mx-auto hover:scale-110 transition-all">
            <a className="flex justify-center items-center" href="tel:+7947427419">
            Call Now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            </a>
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
            Ashtavinayaka Banquets provides you with an elegant space which is
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
          Award-Winning Catering
          </h1>
          <hr className="border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12" />
          <p className="text-white mt-8 text-sm md:text-lg md:text-center">
          At Ashtavinayaka Banquets and Catering, we pride ourselves on delivering exceptional culinary experiences that exceed expectations. Our award-winning catering services have earned us a reputation for excellence.

          <ul className="text-white mt-8 text-left text-sm md:text-lg md:ml-7">
           <li>•⁠  ⁠Winner of the prestigious Golden Fork Award for Best Catering Company</li>
           <li className="my-6">•⁠  ⁠Recognized as one of the Top Catering Companies.⁠</li>
           <li>•⁠  ⁠Recipient of the coveted Catering Excellence Award</li>
          </ul>
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
