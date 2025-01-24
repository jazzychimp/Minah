import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#161E13";
    document.body.style.backgroundColor = "#161E13";
  }, []);

  const [goToNorthAmerica, setgoToNorthAmerica] = React.useState(false);
  if (goToNorthAmerica) {
    return <Navigate to="/NorthAmerica" />;
  }
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      <header className="w-full text-center py-16 bg-[#161e13] text-customLightText">
        <h1 className="text-4xl font-bold">JINAH-VERSE</h1>
      </header>
      {/* First Card */} {/* Use the 'to' prop for navigation */}
      <div
        className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customLightText"
        onClick={() => {
          setgoToNorthAmerica(true);
        }}
      >
        {/* The SVG background is removed to avoid tiling or gradient */}
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-in-out">
          {/* Removed the gradient background */}
          <img
            className="relative w-40 group-hover:scale-110 transition-transform duration-300 ease-in-out"
            src="/images/northamerica.png"
            alt=""
          />
        </div>

        <div className="relative font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
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
            src="/images/southamerica.png"
            alt=""
          />
        </div>

        <div className="relative font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">SOUTH AMERICA</span>
        </div>
      </div>
      {/* Third Card */}
      <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customUnavailable">
        {" "}
        <div className="relative pt-10 px-10 flex items-center justify-center">
          {/* Removed the gradient background */}
          <img className="relative w-40" src="/images/europe.png" alt="" />{" "}
        </div>
        <div className="relative font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">EUROPE</span>
        </div>
      </div>
      {/* Fourth Card */}
      <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customLightText">
        {" "}
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <img
            className="relative w-40 group-hover:scale-110 transition-transform duration-300 ease-in-out"
            src="/images/asia.png"
            alt=""
          />{" "}
        </div>
        <div className="relative font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
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
            src="/images/australia.png"
            alt=""
          />{" "}
        </div>
        <div className="relative font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">AUSTRALIA</span>
        </div>
      </div>
      {/* Sixth Card */}
      <div className="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg group bg-customUnavailable">
        {" "}
        <div className="relative pt-10 px-10 flex items-center justify-center">
          {/* Removed the gradient background */}
          <img className="relative w-40" src="/images/africa.png" alt="" />{" "}
        </div>
        <div className="relative font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
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
            src="/images/antartica.png"
            alt=""
          />{" "}
        </div>
        <div className="relative font-semibold text-black px-6 pb-6 mt-6 flex justify-center items-center">
          <span className="block opacity-75 -mb-1">ANTARTICA</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
