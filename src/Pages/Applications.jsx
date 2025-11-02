import React from "react";

const Applications = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-15 mb-10">
        <h1 className="text-[48px] font-bold">Our All Applications</h1>
        <p className="text-[20px] text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex items-center justify-between mb-10">
        <p className="text-[24px] font-semibold">(<span>132</span>) Apps Found</p>
        <input className="border-2 border-gray-300 px-8 py-1.5 rounded-sm" type="text" placeholder="Search Apps" />
      </div>
    </div>
  );
};

export default Applications;
