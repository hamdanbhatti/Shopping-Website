import React from "react";
import Image from "next/image";

const Vouchers = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
      <div className="relative w-full h-0 pb-[48%] sm:pb-[45%] md:pb-[40%] lg:pb-[35%]">
        <Image
          src="/images/Vouchers.png"
          alt="Voucher"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
};

export default Vouchers;
