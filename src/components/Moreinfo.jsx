import React from "react";
const Moreinfo = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full mx-auto flex justify-center items-center flex-col text-center p-10 space-y-6 text-white">
      <h1>Ready to Transform Your Workflow?</h1>
      <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
      <div className="mt-6 flex gap-4">
        <button className="btn btn-primary">Explore Products</button>
        <button className="btn btn-secondary">View Pricing</button>
      </div>
    </div>
  )
};
export default Moreinfo;