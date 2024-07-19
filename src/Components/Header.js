import React from 'react';
import Logo from "../assets/Logo1.png";
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
            <h1 className='text-xs md:text-xl heading playwrite py-2'>A Luxurious Destination that Fits Every Occasion</h1>
        </div>
        <div className='bg-[#282828] flex justify-center overflow-y-hidden items-center'>
            <img className='w-36 sm:w-36 my-3' src={Logo}/>
        </div>
    </nav>
  )
}

export default Header