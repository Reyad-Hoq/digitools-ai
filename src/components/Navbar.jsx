import React from "react";

const Navbar = () => {
  return (
    <div className="shadow navbar bg-base-100">
      <div className="navbar w-full bg-base-100 md:w-9/12 mx-auto">
        <div className="flex-1">
          <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold">DigiTools</a>
        </div>
        <div className="hidden lg:navbar-center lg:flex">
          <ul className=" menu menu-horizontal gap-2  px-1 text-[18px] font-medium">
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
              </div>
            </div>
          </div>
          <button className="btn btn-ghost mx-2">Log In</button>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
