import React from "react";
import Image from "next/image";

const HeroSection = () => {
   return (
      <>
         <div className="min-h-screen bg-[#f4f6f5] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 flex flex-col lg:flex-row justify-center items-center mt-6 lg:mx-12 xl:mx-24 md:mx-16 sm:mx-12 xs:text-center">
            <div className="container mx-auto font-poppins flex flex-col gap-4 mb-8 lg:mb-0 xs:items-center lg:w-1/2">
               <h1 className="font-black text-3xl max-w-[300px] sm:w-[300px] sm:max-w-none sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl leading-tight sm:leading-tight md:leading-tight lg:leading-[2] relative xs:max-w-full">
                  LET'S EXPLORE <br />
                  <span className="relative inline-block">
                     <span className="relative z-10 xs:bg-yellow-300">
                        UNIQUE&nbsp;
                     </span>
                     <span className="absolute -inset-x-0 sm:-inset-x-2 inset-y-0 bg-yellow-300 -rotate-2 z-0"></span>
                  </span>
                  CLOTHES.
               </h1>
               <p className="text-lg  max-w-[300px] sm:max-w-none sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl xs:max-w-full">
                  Live for Influential and Innovative fashion!
               </p>
               <button className="w-36 sm:w-44 bg-black text-white text-base sm:text-xl lg:text-2xl p-2 sm:p-4 rounded-md mt-4 hover:opacity-80 transition-opacity">
                  Shop Now
               </button>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 xs:flex xs:justify-center">
               <Image
                  src="/images/fashion-1.png"
                  width={871}
                  height={784}
                  alt="Fashion_model"
                  className="w-full h-auto object-contain xs:max-w-[80%] lg:max-w-full"
               />
            </div>
         </div>
         <div className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 bg-white">
            <div className="flex flex-wrap justify-between gap-4 sm:gap-6 md:gap-8 min-w-[320px] bg-[#EBD96B] sm:h-24">
               <Image
                  src="/images/company-logo.png"
                  width={100}
                  height={100}
                  alt="company-logo"
                  className="w-24 sm:w-20 md:w-24 lg:w-28 h-auto object-contain mix-blend-multiply"
               />
               <Image
                  src="/images/company-logo2.png"
                  width={100}
                  height={100}
                  alt="company-logo"
                  className="w-24 sm:w-20 md:w-24 lg:w-28 h-auto object-contain mix-blend-multiply"
               />
               <Image
                  src="/images/company-logo3.png"
                  width={100}
                  height={100}
                  alt="company-logo"
                  className="w-24 sm:w-20 md:w-24 lg:w-28 h-auto object-contain mix-blend-multiply"
               />
               <Image
                  src="/images/company-logo4.png"
                  width={100}
                  height={100}
                  alt="company-logo"
                  className="w-24 sm:w-20 md:w-24 lg:w-28 h-auto object-contain mix-blend-multiply"
               />
               <Image
                  src="/images/company-logo5.png"
                  width={100}
                  height={100}
                  alt="company-logo"
                  className="w-24 sm:w-20 md:w-24 lg:w-28 h-auto object-contain mix-blend-multiply"
               />
               <Image
                  src="/images/company-logo6.png"
                  width={100}
                  height={100}
                  alt="company-logo"
                  className="w-24 sm:w-20 md:w-24 lg:w-28 h-auto object-contain mix-blend-multiply"
               />
            </div>
         </div>
      </>
   );
};

export default HeroSection;
