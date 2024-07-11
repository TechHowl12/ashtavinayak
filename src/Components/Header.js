import React from 'react';
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <nav className='w-full'>
        <div className='bg-[#d8ac47eb] text-center'>
            <h1 className='text-lg playwrite py-2'>Where Precious Moments are Perfectly Crafted</h1>
        </div>
        <div className='bg-[#282828] flex justify-between items-center px-7'>
            <button className='bg-transparent invisible border-2 border-[#e5ba56eb] px-6 py-2 text-[#e5ba56eb]'>BOOK NOW</button>
            <img className='w-36 my-2' src={Logo}/>
            <button className='bg-transparent border-2 border-[#e5ba56eb] px-6 py-2 text-[#e5ba56eb]'>ENQUIRE NOW</button>
        </div>
    </nav>
  )
}

export default Header