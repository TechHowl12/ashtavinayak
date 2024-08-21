import React from "react";
import Form from "./Form";
import Logo from "../assets/Logo1.png";

const Contact = () => {
  return (
    <div className="contact-bg gap-y-5 sm:gap-y-0 sm:gap-x-5 lg:gap-x-10 flex flex-col sm:flex-row justify-center p-5 lg:p-10">
      <div className="sm:w-1/2 bg-[#ffffff2a] rounded-lg p-5">
        <img className="w-24 sm:w-36 sm:mt-10 flex mx-auto" src={Logo} />
        <p className="lg:text-xl text-white mt-5 sm:mt-10 text-center">
          Whether it’s a wedding, a corporate event, or an intimate family
          function, our banquet hall will package all your precious memories for
          that special day, making them unforgettable.
        </p>
        <hr className="border-t-4 border-[#d8ac47eb] mt-5 mb-10 mx-auto w-2/12" />
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
        <h1 className="text-white flex gap-x-4 items-center mt-10">
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
          7977020477
        </h1>
        <h1 className="text-white flex gap-x-4 items-center mt-10">
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
          ashtavinayakahall@gmail.com
        </h1>
      </div>
      <div className="sm:w-1/2">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
