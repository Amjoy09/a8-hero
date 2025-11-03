import React from "react";

const Banner = () => {
  return (
    <div>
      <h1 className="text-[72px] leading-18 font-bold text-center mt-10">
        We Build <br /> <span className="bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2] ">Productive</span> Apps
      </h1>
      <p className="text-center mx-auto mt-6 mb-9 text-[16px] w-10/12 md:w-5/12 text-[#627382]">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="BANNER-BUTTONS flex flex-col md:flex-row gap-3 w-max mx-auto">
        <a target="_blank" href="https://play.google.com/store/games?hl=en">
            <button className="hover:cursor-pointer hover:bg-gray-300 flex text-[20px] font-semibold border-2 border-gray-300 shadow-accent gap-2 px-3.5 py-1.5 rounded-sm">
          <img src="gplay.png" alt="" />
          Google PLay
        </button>
        </a>
       <a target="_blank" href="https://www.apple.com/app-store/">
         <button className="hover:cursor-pointer hover:bg-gray-300 flex text-[20px] font-semibold border-2 border-gray-300 shadow-accent gap-2 px-3.5 py-1.5 rounded-sm">
          <img src="appstore.png" alt="" />
          App Store
        </button>
       </a>
      </div>
      <img className="mx-auto mt-9" src="hero.png" alt="" />

      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] ">
        <h1 className="text-center text-white text-[55px] font-semibold pt-10">Trusted by Millions, Built for You</h1>
       <div className="flex flex-col md:flex-row md:justify-between justify-center w-5/12 md:w-8/12 mx-auto py-14">
         <div className="text-center">
            <p className="text-[18px] text-gray-300">Total Downloads</p>
            <h1 className="text-[72px] font-bold text-white">29.6M</h1>
            <p className="text-[18px] text-gray-300">21% more than last month</p>
        </div>
        <div className="text-center">
            <p className="text-[18px] text-gray-300">Total Reviews</p>
            <h1 className="text-[72px] font-bold text-white">906K</h1>
            <p className="text-[18px] text-gray-300">46% more than last month</p>
        </div>
        <div className="text-center">
            <p className="text-[18px] text-gray-300">Active Apps</p>
            <h1 className="text-[72px] font-bold text-white">132+</h1>
            <p className="text-[18px] text-gray-300">31 more will Launch</p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Banner;
