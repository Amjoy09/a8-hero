import React from "react";
import errorImg from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5E8] ">
      <Navbar />
      <div className="flex-1 flex justify-center items-center mt-18">
        <img src={errorImg} alt="" />
      </div>
     
        <p className="text-[48px] font-semibold text-center">
          Oops, page not found!
        </p>
        <p className="text-center text-[28px] font-semibold text-red-600">
          {error.message}
        </p>
      <Link to='/' className="text-center text-[18px] font-normal rounded-[6px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white w-[150px] mx-auto py-3 mt-6 mb-14">Go Back!</Link>
      <Footer />
    </div>
  );
};

export default ErrorPage;
