import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";

const AppDetails = () => {
  const [isBtnDisabled, setIsBtnDisabled] = useState (false);
  const { apps, loading } = useApps();
  const { id } = useParams();
  const app = apps.find((a) => String(a.id) === id);

  if (loading) return <p>Loading...⏳</p>;

  const { image, title, description, downloads, ratingAvg, companyName, size } =
    app;
    const handleClick =() =>{
        setIsBtnDisabled(true);
    }

  const handleAddToInstalledApp = () => {
    const existingItems = JSON.parse(localStorage.getItem("installedApp"));
    let updatedList =[];
    if (existingItems){
        const isDuplicate = existingItems.some(a=>a.id === app.id)
        if (isDuplicate) return alert ('This App is already installed...')
        updatedList = [...existingItems, app]
    }else{
        updatedList.push(app)
    }
    localStorage.setItem("installedApp", JSON.stringify(updatedList));
  };

  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex">
        <figure>
          <img
            className="w-[450px] h-[350px]"
            src={image}
            alt="Useful Application"
          />
        </figure>
        <div className="CARD-BODY w-full ml-8">
          <h2 className="card-title text-[32px] font-bold">{title}</h2>
          <p className="text-lg text-[#627382] ">
            Developed by:
            <span className="text-[#632EE3] text-xl font-semibold">
              {" "}
              {companyName}
            </span>
          </p>
          <p className="text-xl mt-3 text-gray-600">{description}</p>
          <hr className="border-t-[0.5px] border-gray-300 my-5" />

          <div className="flex gap-6">
            <div>
              <div>Download Icon</div>
              <div>Downloads</div>
              <div>Download Number</div>
            </div>
            <div>
              <div>Star Icon</div>
              <div>Average Ratings</div>
              <div>Rating Point</div>
            </div>
            <div>
              <div>Review Icon</div>
              <div>Total Reviews</div>
              <div>Review Number</div>
            </div>
          </div>

          <button
            onClick={() =>{
                handleAddToInstalledApp();
                handleClick();
                alert('App Installed Successfully🎉')
            }}
            disabled = {isBtnDisabled} 

            className="btn bg-[#00D390] text-white mt-20 hover:bg-cyan-500"
          >
          {isBtnDisabled? 'Installed' : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className="border-t-[0.5px] border-gray-300 mt-6" />
    </div>
  );
};

export default AppDetails;
