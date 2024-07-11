import gsap from 'gsap'
import React from 'react'
import { useGSAP } from "@gsap/react";
import Logo from "../assets/Logo.png"

const Loader = () => {

  const text = "Ashtavinayak Banquets";
  const splitted = text.split('');

  useGSAP(() => {
    gsap.from(".logo-char", {
      y: -300,
      opacity: 0,
      stagger: 0.1, 
    });
  }, []);

  return (
    <div className='bg-[#282828] flex justify-center items-center h-[100vh]'>
      <h1 className='playwrite text-[#d8ac47eb] text-6xl'>
        {splitted.map((char, index) => (
          <span key={index} className='logo-char'>{char}</span>
        ))}
      </h1>
    </div>
  );
};
export default Loader