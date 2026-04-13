import React from "react";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="shadow navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar w-full md:w-9/12 mx-auto gap-10">

        {/* Left */}
        <div className="navbar-start">
          <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold">
            DigiTools
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-[18px] font-medium">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <button className="btn btn-ghost hidden lg:inline-flex"><BsCart3 />
          </button>
          <button className="btn btn-ghost hidden lg:inline-flex">Log In</button>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
