import React from 'react';
import heroImage from '../assets/heroImage.png';
import bouqet from '../assets/bouqet.jpg';
import Nav from '/components/Nav';
function Home() {
 

  return (
    <>
    
     
    
    <div className="grid grid-cols-5 grid-rows-5 gap-0 bg-[#ffcdb7] bg-cover bg-center h-screen overflow-hidden">
  <div className="col-span-5">
    <Nav />
  </div>

  {/* Text + Button Section */}
  <div className="col-span-3 row-span-4 row-start-2 flex flex-col justify-center px-12">
    <h1 className="text-4xl sm:text-5xl font-bold text-[#3B2F2F] mb-4">Bloom With Love</h1>
    <p className="text-lg text-[#4A3E3E] mb-6 max-w-lg">
      Discover handcrafted bouquets and fresh flowers for every occasion. Same-day delivery with a petal-perfect touch.
    </p>
    <button className="w-[20%]  text-sm sm:text-base rounded-[16px] font-medium  
        text-white bg-[#D72638] hover:bg-[#B51E2F] focus:border-[#FADADD] focus:bg-[#D72638] px-6 py-2 sm:py-2.5 sm:px-7">
      Shop Now
    </button>
  </div>

  {/* Image Section */}
  <div className="col-span-2 row-span-4 col-start-4 row-start-2 flex items-center justify-center pr-12">
    <img
      src={heroImage}
      alt="Rose"
      className="max-h-[80%] object-contain"
    />
    <img
      src={bouqet}
      alt="bouqet"
      className="max-h-[80%] object-contain mix-blend-darken mb-[-120px] mr-[-30px]"
    />
  </div>
</div>
    

     
    

    
    </>
  )
}

export default Home;