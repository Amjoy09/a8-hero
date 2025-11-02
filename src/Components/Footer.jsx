import React from "react";

const Footer = () => {
  return (
  <div className="bg-[#001931] px-12 py-8">
      <div className="flex justify-between items-center ">
      <a href="/" className="btn btn-ghost text-xl flex">
        <img className="h-10 w-10" src="logo.png" />
        <p className="text-white font-bold">
          HERO.IO
        </p>
      </a>
      <div>
        <p className="text-white mb-3">Social Links</p>
       <div className="FOOTER-SOCIALS flex items-center gap-4">
         <img src="xx.png" alt="" />
        <img src="in.png" alt="" />
        <img src="fbook.png" alt="" />
       </div>
      </div>
    </div>
    <hr className="text-gray-500 text-[7px] mt-3 mb-8" />
    <p className="text-white text-center">Copyright © 2025 - All right reserved</p>
  </div>
  );
};

export default Footer;
