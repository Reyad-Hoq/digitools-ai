import React from "react";
import bannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <div className="hero bg-base-100 min-h-screen w-9/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse text-center lg:text-left gap-16">
        <img
          src={bannerImg}
          className=" w-auto lg:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Supercharge Your <br />Digital Workflow</h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products
          </p>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white mx-2 hover:scale-103 delay-100 hover:bg-linear-to-r hover:from-[#9514FA] hover:to-[#4F39F6]">Explore Products</button>
          <div className="inline-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full p-px">
            <button className="btn bg-base-100 rounded-full">
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">Watch Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
