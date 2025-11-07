import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);

  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5E8]">
      <Navbar />
      {navigation.state === "loading" ? (
        <LoadingSpinner/>
      ) : (
        <main className="flex-1">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
