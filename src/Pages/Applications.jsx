import React from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/appCard";

const Applications = () => {
   const {apps} = useApps()
  
  return (
    <div className="APPS-SECTION w-11/12 mx-auto">

      <div className="SECTION-TEXTS text-center mt-15 mb-10">

        <h1 className="text-[48px] font-bold">Our All Applications</h1>
        <p className="text-[20px] text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
        <p className="text-[24px] font-semibold">
          (<span>{apps.length}</span>) Apps Found
        </p>

        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-15">
         {
            apps.map(app=><AppCard key={app.id} app={app}></AppCard>)
         }
      </div>
    </div>
  );
};

export default Applications;
