import React from 'react';
import Logo from "../assets/Logo.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {

  useGSAP(()=>{
     gsap.from(".heading",{
      x:-400,
      duration:1.5,
      opacity:0,
      ease:"elastic"
     })

     gsap.from(".btn",{
      y:700,
      duration:1.5,
      opacity:0,
      ease:"elastic.inOut",
      delay:.5
     })
  },[])

  return (
    <nav className='w-full overflow-x-hidden'>
        <div className='bg-[#d8ac47eb] text-center'>
            <h1 className='text-xs md:text-lg heading playwrite py-2'>Where Precious Moments are Perfectly Crafted</h1>
        </div>
        <div className='bg-[#282828] flex justify-between overflow-y-hidden items-center px-7'>
            <button className='bg-transparent hidden md:invisible border-2 border-[#e5ba56eb] px-6 py-2 text-[#e5ba56eb]'>BOOK NOW</button>
            <img className='w-24 sm:w-36 my-2' src={Logo}/>
            <button className='bg-transparent btn border-2 border-[#e5ba56eb] px-6 py-2 text-[#e5ba56eb] '>ENQUIRE NOW</button>
        </div>
    </nav>
  )
}

export default Header