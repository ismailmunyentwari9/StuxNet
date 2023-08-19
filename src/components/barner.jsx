/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Barner = () => (
  <div className="flex flex-col">
    {/* Upper Barner */}
    <div className="upper-barner w-full h-20 lg:mb-0">
      <div className="container mx-auto w-5/6 flex justify-between items-center mt-4">
        <a href="#logo"><span className="text-xl font-bold">Gizmos</span></a>
        {/* Search Form */}
        <form className="lg:w-1/5 pl-2 rounded lg:flex lg:justify-between lg:border lg:border-gray-300 hidden">
          <input
            className="outline-none w-full placeholder-black font-medium text-base leading-normal "
            type="text"
            placeholder="search here..."
          />
          <button
            type="submit"
            className="rounded-sm lg:border p-1 hover:bg-blue-500 text-black font-medium text-base leading-normal"
          >
            <i className="fa fa-search" />
          </button>
        </form>
        {/* Contact Information for lg screens */}
        <div className="contacts lg:flex lg:gap-2 hidden">
          <span className="w-9"><img src="https://www.iconpacks.net/icons/1/free-headphone-icon-915-thumb.png" alt="headsets" /></span>
          <span>
            <p className="text-xl font-medium leading-normal text-black text-right">+0080 1234 56 789</p>
            <p className="text-base font-medium leading-normal text-gray-600 text-right">gizmos@example.com</p>
          </span>
        </div>
        {/* icons from md screens */}
        <div className=" flex gap-2 lg:hidden items-center">
          <form className=" hidden md:w-1/5 pl-2 rounded md:flex justify-between lg:border lg:border-gray-300 ">
            <input
              className="outline-none w-full placeholder-black font-medium text-base leading-normal "
              type="text"
            />
            <button
              type="submit"
              className="rounded-sm lg:border p-1 hover:bg-blue-500 text-black font-medium text-base leading-normal"
            >
              <i className="fa fa-search" />
            </button>
          </form>
          <span><i className="hidden md:block  fa fa-exchange" /></span>
          <span className="relative">
            <i className="fa fa-shopping-cart" />
            <span className="absolute bottom-[23px] left-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">89</span>
          </span>
          <span><i className="fa fa-bars" /></span>
        </div>
      </div>
    </div>
    {/* Lower Barner */}
    <div className="lower-barner bg-blue-500 h-10 w-full pt-2 pb-4 lg:block hidden">
      <div className="container mx-auto w-5/6 flex justify-between items-center">
        {/* Navigation Links */}
        <div className="links flex items-center gap-4 text-white">
          <span className="flex items-center gap-2">
            <i className="fa fa-bars " />
            <span className="shop font-bold">Shop By Categories</span>
          </span>
          <ul className="flex items-center gap-2 h-full">
            <a href="#home"><li className="text-base leading-tight hover:bg-white hover:text-blue-500 px-2 py-[5px]">Home</li></a>
            <a href="#pages"><li className="text-base leading-tight hover:bg-white hover:text-blue-500 px-2 py-[5px]">Pages</li></a>
            <a href="#shop" className="hover:t-4">
              <li className=" hover:bg-white hover:text-blue-500 px-2 py-[5px] text-base leading-tight group relative flex justify-center">
                <button type="button">Shop</button>
                <div className="container py-3 hidden group-hover:grid grid-cols-8 gap-32 absolute bg-white text-black border-2 border-solid border-blue-500 w-auto z-10 top-8 px-5 ml-[130%]">
                  <div className="col-span-2">
                    <h3 className="font-bold mb-1">Product Types</h3>
                    <p className="text-xs">Accordion product</p>
                    <p className="text-xs">Variable product A</p>
                    <p className="text-xs">Variable product B</p>
                    <p className="text-xs">Countdown product A</p>
                    <p className="text-xs">Downloadable product</p>
                    <p className="text-xs">Virtual product</p>
                    <p className="text-xs">New product</p>
                    <p className="text-xs">Sale product</p>
                    <p className="text-xs">Sold product</p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="font-bold mb-1">Shop List</h3>
                    <p className="text-xs">Standard</p>
                    <p className="text-xs">Standard With Bannner</p>
                    <p className="text-xs">Category Icon</p>
                    <p className="text-xs">Filter On Top</p>
                    <p className="text-xs">Countdown List</p>
                    <p className="text-xs">Slider</p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="font-bold mb-1">Shop Layouts</h3>
                    <p className="text-xs">Two columns</p>
                    <p className="text-xs">Three columns</p>
                    <p className="text-xs">Four columns</p>
                    <p className="text-xs">Four columns Wide</p>
                    <p className="text-xs">Five columns wide</p>
                    <p className="text-xs">Six columns wide</p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="font-bold mb-1">Shop Pages</h3>
                    <p className="text-xs">My Account</p>
                    <p className="text-xs">Wish List</p>
                    <p className="text-xs">Cart</p>
                    <p className="text-xs">Checkout</p>
                  </div>
                </div>
              </li>
            </a>
            <a href="#blog"><li className="text-base leading-tight hover:bg-white hover:text-blue-500 px-2 py-[5px]">Blog</li></a>
            <a href="#landing"><li className="text-base leading-tight hover:bg-white hover:text-blue-500 px-2 py-[5px]">Landing</li></a>
          </ul>
        </div>
        {/* Action Icons */}
        <div className="actions flex items-center text-white gap-2">
          <span>
            <i className="fa fa-user" />
          </span>
          <span>
            <i className="fa fa-heart" />
          </span>
          <span>
            <i className="fa fa-shopping-cart " />
          </span>
          <span>$0</span>
        </div>
      </div>
    </div>
  </div>
);

export default Barner;
