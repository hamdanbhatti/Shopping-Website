import React from "react";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Favorites = () => {
   return (
      <section className="py-12 px-4 sm:px-6 lg:px-8">
         <h1 className="font-poppins font-black text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-wider mb-8 lg:mb-12">
            Young's Favorites
         </h1>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {[
               {
                  image: "/images/fashion-6.png",
                  title: "Trending on instagram",
                  alt: "Trending fashion",
               },
               {
                  image: "/images/fashion-7.png",
                  title: "All Under $40",
                  alt: "Affordable fashion",
               },
            ].map((item, index) => (
               <div key={index} className="flex flex-col">
                  <div className="relative aspect-w-16 aspect-h-9 w-full">
                     <Image
                        src={item.image}
                        layout="fill"
                        objectFit="cover"
                        alt={item.alt}
                        className="rounded-lg"
                     />
                  </div>
                  <div className="flex justify-between items-center mt-4">
                     <div>
                        <h2 className="text-lg sm:text-xl lg:text-2xl font-medium">
                           {item.title}
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-1 cursor-pointer hover:underline">
                           Explore Now!
                        </p>
                     </div>
                     <FaArrowAltCircleRight
                        size={24}
                        className="text-black hover:text-gray-700 transition-colors duration-200 ease-in-out cursor-pointer"
                     />
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Favorites;
