import React from "react";
import Image from "next/image";

const Banner = () => {
   return (
      <div className="flex flex-col xl:flex-row mx-4 sm:mx-8 lg:mx-16 xl:mx-32 2xl:mx-40 my-12 xl:my-24">
         <div className="w-full xl:w-1/2 relative aspect-square">
            <Image
               src={"/images/fashion-5.png"}
               alt="Fashion banner image"
               layout="fill"
               objectFit="cover"
               priority
            />
         </div>
         
         <div className="w-full xl:w-1/2 bg-[#FAE157] flex flex-col justify-center">
            <div className="py-8 sm:py-12 lg:py-16 xl:py-24 px-4 sm:px-6 lg:px-8 xl:px-10">
               <div className="font-poppins">
                  <span className="relative inline-block left-2 sm:left-3 lg:left-4 xl:left-5">
                     <span className="relative z-10 bg-yellow-300 text-3xl sm:text-4xl lg:text-6xl xl:text-8xl font-black">
                        PAY DAY
                     </span>
                  </span>
                  <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-7xl xl:text-8xl leading-tight sm:leading-[70px] lg:leading-[90px] xl:leading-[120px]">
                     SALE NOW
                  </h1>
               </div>
               <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 flex flex-col gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
                  <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium">
                     Spend minimal $100 get 30% off voucher code for your next
                     purchase
                  </p>
                  <div>
                     <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
                        1 June - 10 June 2021
                     </p>
                     <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-normal">
                        *Terms & Conditions apply
                     </p>
                  </div>
                  <button className="bg-black text-white py-4 px-8 text-xl sm:text-2xl lg:text-3xl xl:text-4xl rounded-lg font-semibold w-full sm:w-auto hover:bg-gray-900 transition-colors ease-in">
                     Shop Now
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
