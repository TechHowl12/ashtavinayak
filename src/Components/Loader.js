import gsap from 'gsap'
import React from 'react'
import { useGSAP } from "@gsap/react";
import Logo from "../assets/Logo1.png";

const Loader = () => {

  const text = "Ashtavinayak Banquets";
  const splitted = text.split('');

  useGSAP(() => {
    gsap.from(".logo",{
      y:-100,
      duration:2,
      opacity:0
    })
    gsap.from(".logo-char", {
      y: -300,
      opacity: 0,
      stagger: 0.1, 
    });
  }, []);

  return (
    <div className='bg-[#282828] flex flex-col justify-center items-center h-[100vh]'>
      <img src={Logo} className='w-48 logo' alt='logo'/>
      <h1 className='playwrite text-[#d8ac47eb] text-2xl md:text-6xl mt-4'>
        {splitted.map((char, index) => (
          <span key={index} className='logo-char'>{char}</span>
        ))}
      </h1>
    </div>
  );
};
export default Loader