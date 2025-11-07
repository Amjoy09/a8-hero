import React from "react";
import Banner from "../Components/Banner";
import useApps from "../Hooks/useApps";
import AppCard from "../Components/appCard";
import { Link } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const Home = () => {
  const { apps, loading, error } = useApps();
  const featuredApps = apps.slice(0, 8);
if (loading){
    return <LoadingSpinner/>
}
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
        <Link to="/applications" className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-6 py-3 text-[18px] rounded-sm font-medium hover:cursor-pointer">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
