import React from "react";
import logo from '../assets/logo.png'
import fb from '../assets/fbook.png'
import lin from '../assets/in.png'
import x from '../assets/xx.png'
import { Link } from "react-router";

const Footer = () => {
  return (
  <div className="bg-[#001931] px-12 py-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center ">
      <Link to="/" className="btn bg-transparent border-0 shadow-none text-2xl flex">
        <img className="h-10 w-10" src={logo} />
        <p className="text-white font-bold hover:scale-105">
          HERO.IO
        </p>
      </Link>
      <div>
        <p className="text-white text-lg font-semibold mb-3">Social Links</p>
       <div className="FOOTER-SOCIALS flex items-center gap-4">
         <img src={x} alt="" />
        <img src={lin} alt="" />
        <img src={fb} alt="" />
       </div>
      </div>
    </div>
    <hr className="text-gray-500 text-[7px] mt-3 mb-8" />
    <p className="text-white text-center">Copyright © 2025 - All right reserved</p>
  </div>
  );
};

export default Footer;
