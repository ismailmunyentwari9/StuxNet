/* eslint-disable jsx-a11y/control-has-associated-label */

// Import CSS file for the footer
import React from 'react';

// Footer component
const Footer = () => (
  <div className="bg-gray-900 h-auto pb-5">
    {/* Upper section of the footer */}
    <div className="footer-upper container mx-auto w-5/6 flex flex-col gap-2 lg:items-center pt-16 lg:flex-row">
      <span className="text-xl font-bold mr-40 leading-9 text-white">Sign up to Newsletter</span>
      {/* Email subscription form */}
      <form className="w-2/5 pl-2 h-12 rounded flex mr-10 border border-solid border-gray-800">
        <input
          className="outline-none w-full bg-transparent text-white placeholder-gray-400  text-sm font-normal leading-5"
          type="text"
          placeholder="Your Email Address:..."
        />
        <button
          type="submit"
          className="rounded-sm text-white w-10 hover:bg-blue-500"
        >
          <i className="fa fa-envelope" />
        </button>
      </form>
      {/* Social media icons */}
      <div className="contacts flex">
        <span>
          <h4 className="font-medium text-lg leading-6 text-white">Follow us on:</h4>
          <p className="flex mt-3 gap-4 flex-wrap">
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-spotify font-normal text-base mr-1 leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-youtube-play font-normal text-base mr-5 leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-mixcloud font-normal text-base mr-5 leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-twitter font-normal text-base mr-5 leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-dribbble font-normal text-base mr-5 leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-instagram font-normal text-base mr-5 leading-6 text-gray-500" />
            </a>
            <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
              <i className="fa fa-facebook-square font-normal text-base mr-5 leading-6 text-gray-500" />
            </a>
          </p>
        </span>
      </div>
    </div>
    {/* Divider */}
    <div className="divider lg:container lg:mx-auto w-5/6 mt-16 border border-solid border-gray-800" />
    {/* Middle section of the footer */}
    <div className="footer-middle container mx-auto w-10/12 mt-5 flex flex-col
     gap-3 lg:flex lg:justify-between lg:items-center md:grid md:grid-cols-2 md:gap-5 lg:flex-row"
    >
      {/* First column */}
      <div className="flex flex-col gap-1.5 lg:w-1/9 md:col-span-1 ">
        <h4 className="font-medium text-lg leading-6 text-white">Privacy Policy</h4>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Returns & Exchanges</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Payment Terms</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Delivery Terms</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Payment & Pricing</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Terms Of Use</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Privacy Policy</span>
        </a>
      </div>
      {/* Empty column */}
      <div className="lg:w-1/9 lg:block md:hidden " />
      {/* Second column */}
      <div className="flex flex-col gap-1.5 lg:w-1/9 md:col-span-1">
        <h4 className="font-medium text-lg leading-6 text-white">Get Involved</h4>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>About Us</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Our Vision</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Orders & Shipping</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Contact Us</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Customer Service</span>
        </a>
      </div>
      {/* Empty column */}
      <div className="lg:w-1/9 lg:block md:hidden  " />
      {/* Third column */}
      <div className="flex flex-col gap-1.5 lg:w-1/9 md:col-span-1">
        <h4 className="font-medium text-lg leading-6 text-white">Quick Links</h4>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Smartphones</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Headphones</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Laptop & Tablet</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Monitors</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Printers</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Gadgets</span>
        </a>
      </div>
      {/* Empty column */}
      <div className="lg:w-1/9 lg:block md:hidden " />
      {/* Fourth column */}
      <div className="flex flex-col gap-1.5 lg:w-1/9 md:col-span-1">
        <h4 className="font-medium text-lg leading-6 text-white">Customer Care</h4>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>My Account</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Store Locator</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Customer Service</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Returns/Exchange</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>Product Support</span>
        </a>
        <a href="#link" className="font-normal text-sm leading-6 text-gray-400">
          <span>FAQs</span>
        </a>
      </div>
      {/* Empty columns */}
      <div />
      <div />
      <div />
    </div>
    {/* Divider */}
    <div className="divider container mx-auto w-5/6 mt-16 border border-solid border-gray-800" />
    {/* Bottom section of the footer */}
    <div className="w-5/6  flex gap-2 flex-col  lg:flex lg:flex-row container mx-auto lg:justify-between lg:items-center pt-6 flex-wrap md:grid grid-cols-2 md:gap-3">

      {/* Logo */}
      <a href="#logo" className="lg:w-1/9 md:col-span-1"><span className="text-white text-3xl font-bold">Gizmos</span></a>
      {/* Empty columns */}
      <div className="lg:w-1/9 lg:block md:hidden " />
      {/* Contact information */}
      <div className="footer-contacts flex gap-4 lg:w-1/9 md:col-span-1">
        <span><i className="fas fa-headset text-white" /></span>
        <span>
          <p className="text-white font-medium leading-7 text-2xl">+0080 1234 56 789</p>
        </span>
      </div>
      {/* Empty columns */}
      <div className="lg:w-1/9 lg:block md:hidden " />
      <div className="footer-contacts flex gap-4 lg:w-1/9 md:col-span-1">
        <span className="">
          <i className="text-white fi fi-ts-truck-moving text-2xl" />
        </span>
        <span>
          <p className="text-white">Amounts over $100</p>
        </span>
      </div>
      <div className="footer-contacts flex gap-4 lg:w-1/9 md:col-span-1">
        <span className="">
          <i className="text-white fi fi-br-label text-2xl" />
        </span>
        <span>
          <p className="text-white">Save up to 20%</p>
        </span>
      </div>
      {/* Empty columns */}
      <div />
      <div />
      <div />
    </div>
    {/* Divider */}
    <div className="divider container mx-auto w-5/6 mt-7 border border-solid border-gray-800" />
    {/* Copy Rights */}
    <div className="container mx-auto w-5/6 flex justify-between items-center mt-7 lg:flex-row md:flex-row  flex-col gap-2">
      <div className="copyright-name font-medium text-xs leading-4 tracking-tight text-gray-600 w-1/2">
        <p>© 2023 ALEMDAR TEKNIK LTD, ALL RIGHTS RESERVED</p>
      </div>
      {/* Empty columns */}
      <div className="w-1/4" />
      <div className="payment-methods flex gap-2">
        <span><img className="w-16 h-8" src="https://1000logos.net/wp-content/uploads/2020/07/Maestro-logo.jpg" alt="maestro" /></span>

        <span><img className="w-16 h-8 " src="https://thumbs.dreamstime.com/b/web-141701054.jpg" alt="master card" /></span>
        <span><img className="w-16 h-8 " src="https://wallpapercosmos.com/w/full/6/c/7/1258491-3840x2160-desktop-4k-american-express-background-photo.jpg" alt="" /></span>
        <span><img className="w-16 h-8 " src="https://thumbs.dreamstime.com/b/visa-logo-white-background-vector-format-avaliable-visa-logo-124289843.jpg" alt="" /></span>
        <span><img className="w-16 h-8 " src="https://i0.wp.com/usethebitcoin.com/wp-content/uploads/2019/05/PayPal-Logo.jpg" alt="" /></span>
        <span><img className="w-16 h-8 " src="https://cdn.csswinner.com/images/profiles/2019/jul/774885337.jpg" alt="" /></span>

      </div>
      <div />
    </div>
  </div>
);

export default Footer;
