import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installedApp"));
    if (savedList) setInstalledApp(savedList);
  }, []);

  const sortedItems = () => {
    if (sortOrder === "size-asc") {
      return [...installedApp].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installedApp].sort((a, b) => b.size - a.size);
    } else {
      return installedApp;
    }
  };

  const handleRemove = (id) => {
    const existingItems = JSON.parse(localStorage.getItem("installedApp"));
    let updatedList = existingItems.filter((a) => a.id !== id);
    setInstalledApp(updatedList);
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
  };

  return (
    <div className="w-11/12 mx-auto mt-10 mb-20">
      <h1 className="text-5xl font-bold text-center">Your Installed Apps</h1>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between mt-20 mb-10">
        <h2 className="text-[24px] font-semibold">
          {" "}
          {installedApp.length} Apps Installed
        </h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3 ">
        {sortedItems().map((a) => (
          <div className="w-full h-[112px] bg-[#ffffff] rounded-lg flex flex-col md:flex-row items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <figure>
                <img className="h-20 w-20 rounded-lg" src={a.image} alt="" />
              </figure>
              <div>
                <div className="flex items-center">
                  <h2 className="text-[20px] font-medium">{a.title}:</h2>
                  <p className="text-[20px] font-medium">{a.slogan}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <p className="flex items-center gap-[3px] text-[#00D390]">
                    <img className="h-4 w-4" src="icon-downloads.png" alt="" />
                    <span className="font-semibold">{a.downloads}M</span>
                  </p>
                  <p className="flex items-center gap-2 text-[#FF8811] font-semibold">
                    <img className="h-4 w-4" src="icon-ratings.png" alt="" />
                    <span>{a.ratingAvg}</span>
                  </p>
                  <p className="text-gray-600 font-semibold">{a.size} MB</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                handleRemove(a.id), alert("App Uninstalled 🗑");
              }}
              className="text-white bg-[#00D390] px-5 py-1.5 h-10 rounded-[3px] hover:cursor-pointer hover:bg-red-800"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
