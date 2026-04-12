import React from "react";
const Summary = () => {
  return (
    <div className="h-[200px] lg:h-50 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-10 py-5">
      <div className="h-full w-full md:w-9/12 mx-auto flex flex-row justify-center items-center gap-3  md:justify-around">
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white">50K+</h2>
          <p className="text-base-100 md:text-lg">Active Users</p>
        </div>
        <div>
          <div class="divider lg:divider-horizontal w-0 md:w-0.5 h-18 bg-white/50"></div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white">200+</h2>
          <p className="text-base-100 md:text-lg">Premium Tools</p>
        </div>
        <div>
          <div class="divider lg:divider-horizontal w-0 md:w-0.5 h-18  bg-white/50"></div>
        </div>
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl font-bold text-white">4.9</h2>
          <p className="text-base-100 md:text-lg">Rating</p>
        </div>
      </div>
    </div>
  );
}
export default Summary;