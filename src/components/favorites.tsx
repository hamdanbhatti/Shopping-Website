import React from "react";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Favorites = () => {
   return (
      <>
         <div className="mt-12">
            <h1 className="font-poppins font-black text-center text-2xl sm:text-3xl lg:text-4xl lg:text-left tracking-wider mx-24">
               Young's Favorites
            </h1>
         </div>
         <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 md:mx-12 lg:mx-48 items-center mt-4 gap-8 font-poppins">
            <div className="mt-4 px-2 sm:px-4 md:px-8 lg:px-24 w-full h-auto">
               <Image
                  src={"/images/fashion-6.png"}
                  width={834}
                  height={575}
                  alt="fashion"
                  className="w-full h-auto"
               />
               <div className="flex justify-between items-center mt-4 gap-4 sm:gap-8 lg:gap-48">
                  <div className="">
                     <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
                        Trending on instagram
                     </h1>
                     <p className="text-lg sm:text-xl lg:text-2xl text-[#7F7F7F] py-2 cursor-pointer">
                        Explore Now!
                     </p>
                  </div>
                  <FaArrowAltCircleRight
                     size={20}
                     color="#000000"
                     className="my-custom-class mx-auto hover:translate-x-1 transition-transform ease-out sm:text-2xl lg:text-3xl"
                  />
               </div>
            </div>

            <div className="mt-4 px-2 sm:px-4 md:px-8 lg:px-24 w-full h-auto">
               <Image
                  src={"/images/fashion-7.png"}
                  width={838}
                  height={678}
                  alt="fashion"
                  className="w-full h-auto"
               />
               <div className="flex justify-between items-center mt-4 gap-4 sm:gap-8 lg:gap-48">
                  <div className="">
                     <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
                        All Under $40
                     </h1>
                     <p className="text-lg sm:text-xl lg:text-2xl text-[#7F7F7F] py-2 cursor-pointer">
                        Explore Now!
                     </p>
                  </div>
                  <FaArrowAltCircleRight
                     size={20}
                     color="#000000"
                     className="my-custom-class mx-auto hover:translate-x-1 transition-transform ease-out sm:text-2xl lg:text-3xl"
                  />
               </div>
            </div>
         </div>
      </>
   );
};

export default Favorites;
