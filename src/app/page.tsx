import React from "react";
import HeroSection from "@/components/heroSection";
import NewArrivals from "@/components/newArrivals";
import Banner from "@/components/banner";
import Favorites from "@/components/favorites";
import Vouchers from "@/components/vouchers";
import Community from "@/components/community";
import Footer from "@/components/footer";
const Home = () => {
   return (
      <>
         <HeroSection />
         <NewArrivals />
         <Banner />
         <Favorites />
         <Vouchers/>
         <Community/>
         <Footer />
      </>
   );
};

export default Home;
