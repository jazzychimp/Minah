import "../App.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, Route, Routes } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#161E13";
    document.body.style.backgroundColor = "#161E13";
  }, []);

  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to navigate to North America page
  const goToNorthAmerica = () => {
    navigate("/NorthAmerica");
  };

  const goToAsia = () => {
    navigate("/Asia");
  };

  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      <header className="w-full text-center py-16 bg-[#161e13] text-customLightText">
        <h1 className="font-customFont font-extrabold text-5xl">JINAH-VERSE</h1>
      </header>
      {/* First Card */} {/* Use the 'to' prop for navigation */}
      <div
        className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customLightText"
        onClick={goToNorthAmerica}
      >
        {/* The SVG background is removed to avoid tiling or gradient */}
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in-out">
          {/* Removed the gradient background */}
          <img
            className="relative w-40 group-hover:scale-110 transition-transform duration-300 ease-in-out"
            /* src="/images/northamerica.png"*/
            src={`${process.env.PUBLIC_URL}/images/northamerica.png`} // This can help resolve path issues
            alt=""
          />
        </div>

        <div className="relative font-customFont font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">NORTH AMERICA</span>
        </div>
      </div>
      {/* Second Card */}
      <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customUnavailable">
        {/* The SVG background is removed to avoid tiling or gradient */}

        <div className="relative pt-10 px-10 flex items-center justify-center">
          {/* Removed the gradient background */}
          <img
            className="relative w-40"
            src={`${process.env.PUBLIC_URL}/images/southamerica.png`} // This can help resolve path issues
            alt=""
          />
        </div>

        <div className="relative font-customFont font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">SOUTH AMERICA</span>
        </div>
      </div>
      {/* Third Card */}
      <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customUnavailable">
        {" "}
        <div className="relative pt-10 px-10 flex items-center justify-center">
          {/* Removed the gradient background */}
          <img
            className="relative w-40"
            src={`${process.env.PUBLIC_URL}/images/europe.png`} // This can help resolve path issues
            alt=""
          />{" "}
        </div>
        <div className="relative font-customFont font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">EUROPE</span>
        </div>
      </div>
      {/* Fourth Card */}
      <div
        className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customLightText"
        onClick={goToAsia}
      >
        {" "}
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img
            className="relative w-40 group-hover:scale-110 transition-transform duration-300 ease-in-out"
            src={`${process.env.PUBLIC_URL}/images/asia.png`} // This can help resolve path issues
            alt=""
          />{" "}
        </div>
        <div className="relative font-customFont font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">ASIA</span>
        </div>
      </div>
      {/* Fifth Card */}
      <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customUnavailable">
        {" "}
        <div className="relative pt-10 px-10 flex items-center justify-center">
          {/* Removed the gradient background */}
          <img
            className="relative w-40"
            src={`${process.env.PUBLIC_URL}/images/australia.png`} // This can help resolve path issues
            alt=""
          />{" "}
        </div>
        <div className="relative font-customFont font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">AUSTRALIA</span>
        </div>
      </div>
      {/* Sixth Card */}
      <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customUnavailable">
        {" "}
        <div className="relative pt-10 px-10 flex items-center justify-center">
          {/* Removed the gradient background */}
          <img
            className="relative w-40"
            src={`${process.env.PUBLIC_URL}/images/africa.png`} // This can help resolve path issues
            alt=""
          />{" "}
        </div>
        <div className="relative font-customFont font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">AFRICA</span>
        </div>
      </div>
      {/* Seventh Card */}
      <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customUnavailable">
        {" "}
        <div className="relative pt-10 px-10 flex items-center justify-center">
          {/* Removed the gradient background */}
          <img
            className="relative w-40"
            src={`${process.env.PUBLIC_URL}/images/antartica.png`} // This can help resolve path issues
            alt=""
          />{" "}
        </div>
        <div className="relative font-customFont font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">ANTARTICA</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
