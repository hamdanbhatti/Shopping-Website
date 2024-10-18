import React from "react";
import Image from "next/image";

const Banner = () => {
   return (
      <div className="flex flex-col lg:flex-row mx-4 lg:mx-24">
         <div className="w-full lg:w-1/2">
            <Image
               src={"/images/fashion-5.png"}
               width={900}
               height={900}
               alt="Fashion banner image"
               layout="responsive"
            />
         </div>
         <div className="w-full lg:w-1/2 bg-[#FAE157] py-8 lg:py-24 flex flex-col gap-6 lg:gap-12">
            <div className="font-poppins mx-4 lg:mx-8">
               <span className="relative inline-block left-4 lg:left-9">
                  <span className="relative z-10 bg-yellow-300 text-4xl lg:text-9xl font-black">
                     PAY DAY
                  </span>
                  <span className="absolute -inset-x-0 sm:-inset-x-2 inset-y-0 bg-white -rotate-2 z-0"></span>
               </span>
               <h1 className="font-extrabold text-5xl lg:text-9xl leading-tight lg:leading-[137px]">
                  SALE NOW
               </h1>
            </div>
            <div className="mx-4 lg:mx-8 flex flex-col gap-6 lg:gap-12">
               <p className="text-2xl lg:text-4xl font-medium">
                  Spend minimal $100 get 30% off voucher code for your next purchase
               </p>
               <div className="">
                  <p className="text-2xl lg:text-4xl font-bold">1 June - 10 June 2021</p>
                  <p className="text-xl lg:text-4xl font-normal">
                     *Terms & Conditions apply
                  </p>
               </div>
               <button className="bg-black text-white p-4 lg:p-6 px-6 lg:px-8 text-xl lg:text-3xl rounded-lg font-semibold w-full lg:w-1/3 hover:bg-gray-900 transition-colors ease-in">
                  Shop Now
               </button>
            </div>
         </div>
      </div>
   );
};

export default Banner;
