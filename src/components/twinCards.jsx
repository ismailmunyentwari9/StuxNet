/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const TwinCards = () => (
  <div className="container mx-auto w-5/6 grid gap-5 lg:flex lg:justify-between items-center mt-4 mb-5 md:grid md:col-span-1">
    <div className="bg-gray-300 lg:w-1/2 rounded flex pl-5 p-7 items-center md:col-span-1">
      <div className="left-card w-1/2">
        <h2 className=" font-bold text-3xl leading-8 text-black">E-77 Console</h2>
        <h5 className="font-normal text-base leading-6 text-gray-500">MF841HN/A 13"</h5>
        <h6 className="mt-4 font-normal text-xs leading-4  tracking-wide text-gray-500">weekend sale</h6>
        <span className="mt-1 text-4xl leading-14 font-normal text-black">20%</span>
      </div>
      <div className="w-1/3">
        <img src="https://pngimg.com/d/joystick_PNG11265.png" alt="E-77" />
      </div>
    </div>
    <div className="bg-gray-900 lg:w-1/2 rounded flex pl-5 p-7 items-center md:col-span-1">
      <div className="left-card w-1/2">
        <h2 className=" font-bold text-white text-3xl leading-8">E-57 Camera</h2>
        <h5 className="font-normal text-base leading-6 text-gray-400">MF841HN/A 13"</h5>
        <h6 className="mt-4 font-normal text-xs leading-4 tracking-wide text-gray-500">discount -30%</h6>
        <span className=" text-white text-4xl leading-14 font-normal">$349</span>
      </div>
      <div className="w-1/3">
        <img src="https://m.media-amazon.com/images/I/61VeCzfpSPL._AC_UF894,1000_QL80_.jpg" alt="E-77" />
      </div>
    </div>
  </div>
);
export default TwinCards;
