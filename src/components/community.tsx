import React from "react";

const Community = () => {
   return (
      <div className="bg-[#E5C643] flex flex-col items-center justify-center gap-4 py-12 px-4 sm:px-8 md:px-16 lg:px-24">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white font-black leading-tight">
               JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </h1>
         </div>
         <div className="max-w-2xl mx-auto">
            <p className="font-normal text-lg sm:text-xl md:text-2xl lg:text-4xl text-white text-center">
               Type your email down below and be young wild generation
            </p>
         </div>
         <div className="w-full max-w-xl mx-auto mt-4">
            <div className="flex flex-col sm:flex-row p-2 rounded-lg">
               <input
                  type="email"
                  placeholder="Add your email here"
                  className="flex-grow p-4 rounded-lg sm:rounded-r-none outline-none text-lg sm:text-xl mb-2 sm:mb-0"
               />
               <button className="bg-black text-white px-4 py-2 rounded-lg sm:rounded-l-none w-full sm:w-28 text-lg sm:text-xl hover:bg-gray-800 transition-colors ease-out">
                  SEND
               </button>
            </div>
         </div>
      </div>
   );
};

export default Community;
