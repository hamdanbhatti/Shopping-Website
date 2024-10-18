import React from "react";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";

const NewArrivals = () => {
   return (
      <>
         <div>
            <h1 className="font-poppins font-black text-center lg:mx-24 lg:text-4xl lg:text-left tracking-wider">
               NEW ARRIVALS
            </h1>
         </div>
         <div className="flex flex-col lg:flex-row justify-between items-center mt-4 gap-8 font-poppins">
            <div className="mt-4 px-4 sm:px-8 md:px-12 lg:px-24 w-full lg:w-[484px] h-auto">
               <Image
                  src={"/images/fashion-2.png"}
                  width={400}
                  height={584}
                  alt="fashion"
                  className="w-full h-auto"
               />
               <div className="flex justify-between items-center mt-4 xs:gap-12 gap-8">
                  <div className="">
                     <h1 className="text-lg sm:text-xl md:text-2xl font-medium ">
                        Hoodies & Sweetshirt
                     </h1>
                     <p className="text-2xl text-[#7F7F7F] py-2 cursor-pointer">
                        Explore Now!
                     </p>
                  </div>
                  <FaArrowAltCircleRight
                     size={24}
                     color="#000000"
                     className="my-custom-class mx-auto hover:translate-x-1 transition-transform ease-out"
                  />
               </div>
            </div>
            <div className="mt-4 px-4 sm:px-8 md:px-12 lg:px-24 w-full lg:w-[484px] h-auto">
               <Image
                  src={"/images/fashion-3.png"}
                  width={400}
                  height={584}
                  alt="fashion"
                  className="w-full h-auto"
               />
               <div className="flex justify-between items-center mt-4 gap-24">
                  <div className="">
                     <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
                        Coats & Parkas
                     </h1>
                     <p className="text-2xl text-[#7F7F7F] py-2">
                        Explore Now!
                     </p>
                  </div>
                  <FaArrowAltCircleRight
                     size={24}
                     color="#000000"
                     className="my-custom-class mx-auto hover:translate-x-1 transition-transform ease-out"
                  />
               </div>
            </div>
            <div className="mt-4 px-4 sm:px-8 md:px-12 lg:px-24 w-full lg:w-[484px] h-auto">
               <Image
                  src={"/images/fashion-4.png"}
                  width={400}
                  height={584}
                  alt="fashion"
                  className="w-full h-auto"
               />
               <div className="flex justify-between items-center mt-4 gap-28">
                  <div className="">
                     <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
                        Tees & T-Shirt
                     </h1>
                     <p className="text-2xl text-[#7F7F7F] py-2">
                        Explore Now!
                     </p>
                  </div>
                  <FaArrowAltCircleRight
                     size={24}
                     color="#000000"
                     className="my-custom-class mx-auto hover:translate-x-1 transition-transform ease-out"
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default NewArrivals;
