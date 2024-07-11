import React from 'react';
import Image1 from "../assets/slide1.jpg";
import Image2 from "../assets/slide2.jpg";
import Image3 from "../assets/slide3.jpg";

const Context = () => {
  return (
    <>
    <div className='bg-[#282828] py-20'>
         <div className='flex flex-col mx-auto w-1/2'>
            <h1 className='text-3xl text-[#d8ac47eb] playwrite text-center'>An Elegant Venue for the Discerning Guest</h1>
            <hr className='border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12' />
            <p className="text-white mt-8 text-lg text-center">Located in the vibrant heart of Mumbai at MIDC Dombivli, Ashtavinayak Banquet stands as a premier destination for unforgettable events and celebrations. Its central location ensures easy accessibility for guests from all corners of the city. Experience the perfect blend of elegance and convenience with our versatile, stunning spaces. Indulge in award-winning luxury catering and enjoy unparalleled hospitality, all under one roof. Make your next event truly exceptional at Ashtavinayak Banquet.</p>
            <button className='bg-[#d8ac47eb] text-black uppercase px-6 py-2 mt-4 w-2/4 mx-auto'>Download brochure</button>
         </div>
    </div>
    <div className='grid grid-cols-2 gap-x-12 gap-y-20 bg-[#282828] px-20 py-10'>
        <div className='my-auto'>
            <h1 className='text-3xl text-[#d8ac47eb] playwrite text-center'>Grandeur and Versatility</h1>
            <hr className='border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12'/>
            <p className="text-white mt-8 text-lg text-center">At Ashtavinayak Banquet, velvet curtains drape the frame and chandeliers take to the sky. A stunning open-air patio surrounds two large indoor spaces, making it an ideal venue to host 50 to 600 guests seated and up to 1000 guests floating for any special occasion. Our state-of-the-art contemporary interiors create a versatile space for you to host events and functions of all kinds, whether intimate or grand, personal or professional. The convenient address also comes with a car park facility for over 300 cars, along with ample road parking, ensuring the comfort and convenience of your discerning guests.</p>
        </div>
        <div>
              <img src={Image1} className='block w-full'/>
        </div>
        <div>
              <img src={Image3} className='block w-full'/>
        </div>
        <div className='my-auto'>
            <h1 className='text-3xl text-[#d8ac47eb] playwrite text-center'>A Bespoke Experience, Curated for You</h1>
            <hr className='border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12'/>
            <p className="text-white mt-8 text-lg text-center">At Ashtavinayak Halls, we are driven by our meticulous commitment to quality and consistency. Every aspect of your event is carefully designed and executed to ensure nothing short of the exceptional, every time you choose us. Every team strives to bring to you the best of their ability. Whether it’s an extraordinary menu, unrivalled hospitality, or the simple charm of an event well done, you can be sure that you are with the best.</p>
        </div>
        <div className='my-auto'>
            <h1 className='text-3xl text-[#d8ac47eb] playwrite text-center'>Luxury and Award-Winning Catering</h1>
            <hr className='border-t-4 border-[#d8ac47eb] mt-5 mx-auto w-2/12'/>
            <p className="text-white mt-8 text-lg text-center">The venue is exclusively catered to by the award-winning luxury catering company, Blue Sea Catering along with Chetak Caterers and the exclusive vegetarian catering service, Pavitra Catering.
            Having over four decades of experience in high-end, innovative, and personalized culinary services for celebrities and industrialists across the world, our esteemed catering partners bring you exceptional catering and hospitality for all your events and celebrations at Ashtavinayak Halls. Their expert culinary team works tirelessly to bring you bespoke recipes and dishes from different corners of India and the world, tailored for you with an elevated touch with the highest quality of ingredients and service standards making for a truly memorable experience for you and all your guests.</p>
        </div>
        <div>
              <img src={Image2} className='block w-full'/>
        </div>
    </div>
    </>
  )
}

export default Context