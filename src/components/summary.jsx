import React from "react";
const Summary = () => {
  return (
    <div className="h-30 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-">
      <div className="h-full w-9/12 mx-auto flex items-center justify-around">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white">50K+</h2>
          <p className="text-base-100 text-lg">Active Users</p>
        </div>
        <div>
          <div class="divider lg:divider-horizontal h-18"></div>
        </div>
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white">200+</h2>
          <p className="text-base-100 text-lg">Premium Tools</p>
        </div>
        <div>
          <div class="divider lg:divider-horizontal h-18"></div>
        </div>
        <div className="text-center">
          <h2 className="text-6xl font-bold text-white">4.9</h2>
          <p className="text-base-100 text-lg">Rating</p>
        </div>
      </div>
    </div>
  );
}
export default Summary;