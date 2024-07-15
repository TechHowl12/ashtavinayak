import React from 'react';
import Logo from "../assets/Logo1.png";

const Footer = () => {
  
  return (
    <div className='grid grid-cols-1 gap-y-16 sm:gap-y-0 items-center  sm:grid-cols-3 p-8 lg:p-16 gap-x-5 lg:gap-x-10 bg-[#282828] text-white'>
        <div>
          <img className="w-24 sm:w-36 flex mx-auto" src={Logo} />
          <p className='text-center text-lg playwrite mt-4'>Experience opulent celebrations with our Luxury Banquets, redefining grandeur, elegance, and style.</p>
        </div>
        <div>
            <h1 className='text-center uppercase mb-6 text-xl'>Address</h1>
            <h1 className="text-white flex gap-x-4 items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          2nd Floor, Citi Mall, Kalyan Rd, near K V Pendharkar College, Azde
          Gaon, MIDC, Dombivli East, Mumbai, Dombivli, Maharashtra 421203
        </h1>
        <h1 className="text-white flex gap-x-4 items-center mt-6">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </span>
          07947427419
        </h1>
        <h1 className="text-white flex gap-x-4 items-center mt-6">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </span>
          info@ashtavinayak.com
        </h1>
        </div>
        <div>
        <iframe
        className="aspect-video"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15520.909837055526!2d73.10581571222602!3d19.213206507654508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795aac78194f7%3A0x974f630cbf95e2df!2sAshtavinayaka%20Banquet%20Hall%3A%20Shauk%20Se%20Shakahari!5e0!3m2!1sen!2sin!4v1720621727931!5m2!1sen!2sin"
          allowfullscreen=""
          width="100%"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    </div>
  )
}

export default Footer