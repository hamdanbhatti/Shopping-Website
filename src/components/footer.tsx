import React from "react";
import Image from "next/image";

const Footer = () => {
   return (
      <footer className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-24">
         <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
            <div className="flex flex-col gap-6 md:gap-8 max-w-sm">
               <h1 className="text-3xl md:text-4xl font-black">FASHION</h1>
               <p className="text-lg md:text-2xl font-normal text-[#8E8E8E]">
                  Complete your style with awesome clothes from us.
               </p>
               <div className="flex gap-4 flex-wrap">
                  {["/images/icon.png", "/images/icon-2.png", "/images/icon-3.png", "/images/icon-4.png"].map((src, index) => (
                     <Image
                        key={index}
                        src={src}
                        width={54}
                        height={14}
                        alt={`social icon ${index + 1}`}
                        priority
                     />
                  ))}
               </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
               {[
                  { title: "Company", links: ["About", "Contact Us", "Support", "Careers"] },
                  { title: "Quick Links", links: ["Share location", "Orders Tracking", "Size Guide", "FAQs"] },
                  { title: "Legal", links: ["Terms & conditions", "Privacy Policy"] }
               ].map((section, index) => (
                  <div key={index} className="flex flex-col gap-4 md:gap-6">
                     <a href="#" className="text-xl md:text-2xl font-semibold">{section.title}</a>
                     {section.links.map((link, linkIndex) => (
                        <a key={linkIndex} href="#" className="text-sm md:text-base hover:text-gray-300 transition-colors">{link}</a>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
// import React from "react";
// import Image from "next/image";

// const Header = () => {
//    return (
//       <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-24 w-full pt-6 sm:pt-11 ">
//          <div>
//             <Image
//                src="/images/logo.png"
//                alt="Fashion item"
//                width={192}
//                height={82}
//                className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto"
//             />
//          </div>
//          <div className="font-poppins flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 lg:gap-14 items-center">
//             <a
//                href="#"
//                className="font-medium text-sm sm:text-base hover:text-gray-600 transition-colors relative group"
//             >
//                CATALOGUE
//                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-600 transition-all group-hover:w-full"></span>
//             </a>
//             <a
//                href="#"
//                className="font-medium text-sm sm:text-base hover:text-gray-600 transition-colors relative group"
//             >
//                FASHION
//                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-600 transition-all group-hover:w-full"></span>
//             </a>
//             <a
//                href="#"
//                className="font-medium text-sm sm:text-base hover:text-gray-600 transition-colors relative group"
//             >
//                FAVORITE
//                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-600 transition-all group-hover:w-full"></span>
//             </a>
//             <a
//                href="#"
//                className="font-medium text-sm sm:text-base hover:text-gray-600 transition-colors relative group"
//             >
//                LIFESTYLE
//                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-600 transition-all group-hover:w-full"></span>
//             </a>
//             <button className="bg-black text-white px-4 py-2 rounded-md transition-all hover:bg-white hover:text-black hover:shadow-lg hover:scale-105 border-2 border-transparent hover:border-black sm:px-5 sm:py-3 md:px-6 md:py-3 text-sm sm:text-base">
//                SIGN UP
//             </button>
//          </div>
//       </nav>
//    );
// };

// export default Header;

