import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/appCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const Applications = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLowerCase().includes(term))
    : apps;

     if (loading) return <LoadingSpinner/>;

  return (
    <div className="APPS-SECTION w-11/12 mx-auto">
      <div className="SECTION-TEXTS text-center mt-15 mb-10">
        <h1 className="text-[48px] font-bold">Our All Applications</h1>
        <p className="text-[20px] text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
        {
            searchedApps.length === 0 ?  "⭕" : <p className="text-[24px] font-semibold">
          (<span>{searchedApps.length}</span>) Apps Found
        </p>
        }

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
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>

      {searchedApps.length === 0 ? (
        <div className="flex justify-center items-center max-h-screen">
          <p className="text-3xl md:text-6xl md:mb-0 mb-7 font-semibold text-gray-600">No Apps Found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-15">
          {searchedApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
