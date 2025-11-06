import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import MyBarChart from "../Components/MyBarChart";


const AppDetails = () => {
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const { apps, loading } = useApps();
  const { id } = useParams();
  const app = apps.find((a) => String(a.id) === id);

  if (loading) return <p>Loading...⏳</p>;

  const {
    reviews,
    image,
    title,
    description,
    downloads,
    ratingAvg,
    companyName,
    size,
    slogan,
    ratings
  } = app;

  
  const handleClick = () => {
    setIsBtnDisabled(true);
  };

  const handleAddToInstalledApp = () => {
    const existingItems = JSON.parse(localStorage.getItem("installedApp"));
    let updatedList = [];
    if (existingItems) {
      const isDuplicate = existingItems.some((a) => a.id === app.id);
      if (isDuplicate) return alert("This App is already installed...");
      updatedList = [...existingItems, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex flex-col md:flex-row">
        <figure>
          <img
            className="w-[450px] h-[350px]"
            src={image}
            alt="Useful Application"
          />
        </figure>
        <div className="CARD-BODY w-full ml-8">
          <div className="flex items-center">
            <h2 className="card-title text-[32px] font-bold">{title}:</h2>
            <p className="text-[32px] font-bold">{slogan}</p>
          </div>
          <p className="text-lg text-[#627382] ">
            Developed by:
            <span className="text-[#632EE3] text-xl font-semibold">
              {" "}
              {companyName}
            </span>
          </p>

          <hr className="border-t-[0.5px] border-gray-300 my-5" />

          <div className="flex flex-col md:flex-row gap-6">
            <div>
              <img src={downloadIcon} alt="" />
              <div className="text-[18px] text-gray-600 mt-2">Downloads</div>
              <p className="text-[40px] font-bold">{downloads}</p>
            </div>
            <div>
              <img src={ratingIcon} alt="" />
              <div className="text-[18px] text-gray-600 mt-2">Average Ratings</div>
              <p className="text-[40px] font-bold">{ratingAvg}</p>
            </div>
            <div>
              <img src={reviewIcon} alt="" />
              <p className="text-[18px] text-gray-600 mt-2">Total Reviews</p>
              <p className="text-[40px] font-bold">{reviews}K</p>
            </div>
          </div>

          <button
            onClick={() => {
              handleAddToInstalledApp();
              handleClick();
              alert("App Installed Successfully🎉");
            }}
            disabled={isBtnDisabled}
            className=" bg-[#00D390] rounded-sm px-5 py-2.5 text-white text-xl mt-12 hover:bg-lime-600 hover:cursor-pointer"
          >
            {isBtnDisabled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className="border-t-[0.5px] border-gray-300 mt-15" />
   
    <div className=" my-10">
        <h1 className="text-2xl font-bold mb-7">Ratings</h1>
        <div className="flex h-120 ">
       <MyBarChart className='flex-1'></MyBarChart>
    </div>
    </div>
    <hr className="border-t-[0.5px] border-gray-300 mb-10" />

    <div className="mb-15">
      <h1 className="text-2xl font-bold mt-10 mb-4">Description</h1>
      <div>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
    </div>
   
    </div>

  );
};

export default AppDetails;
