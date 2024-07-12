import React from 'react'

const Form = () => {
    
  return (
    <div className='bg-[#ffffff] p-5 sm:p-10 w-full flex flex-col gap-y-2 rounded-lg'>
        <h1 className='text-center text-2xl'>Enquire Now</h1>
        <div>
            <label className='text-lg '>First Name<span className='text-red-500'> *</span></label>
            <input className='w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2' type='text'/>
        </div>        
        <div>
            <label className='text-lg '>Mobile Number<span className='text-red-500'> *</span></label>
            <input className='w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2' type='text'/>
        </div>        
        <div>
            <label className='text-lg '>Email<span className='text-red-500'> *</span></label>
            <input className='w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2' type='text'/>
        </div>        
        <div>
            <label className='text-lg '>Event Date<span className='text-red-500'> *</span></label>
            <input className='w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2' type='text'/>
        </div>        
        <div>
            <label className='text-lg '>No of Guests<span className='text-red-500'> *</span></label>
            <input className='w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2' type='text'/>
        </div>        
        <div>
            <label className='text-lg '>Additional Information</label>
            <input className='w-full border-2 border-[#d8ac47eb] focus:outline-none focus:border-[#d8ac47eb] py-1 text-lg pl-2 mt-2' type='text'/>
        </div>
        <button className='bg-transparent border-2 w-1/2 mx-auto mt-4 border-[#d8ac47eb] px-6 py-2'>SUBMIT</button>        
    </div>
  )
}

export default Form