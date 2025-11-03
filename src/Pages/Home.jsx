import React from "react";
import Banner from "../Components/Banner";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/appCard";

const Home = () => {
  const { apps, loading, error } = useApps();
  const featuredApps = apps.slice(0, 8);

  return (
    <div>
      <Banner />
      <div className="text-center mt-14 mb-10">
        <h1 className="text-[48px] font-bold">Trending Apps</h1>
        <p className="text-[17px] text-[#627382]">
          Explore All Trending Apps on the Market developed by us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-11/12 mx-auto">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>

      <div className="w-max mx-auto mt-12 mb-20">
        <a href="/applications" className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-7 py-2 text-[16px] rounded-sm font-semibold hover:cursor-pointer">
          Show All
        </a>
      </div>
    </div>
  );
};

export default Home;
