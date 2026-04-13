import React from "react";
import UserImg from "../assets/user.png"
import RocketImg from "../assets/rocket.png"
import PackageImg from "../assets/package.png"
const Account = () => {
  return <div className="w-9/12 mx-auto">
    <div className="grid md:grid-cols-3 gap-10 ">

      <div className="card bg-base-100 w-full shadow-lg items-center p-10 space-y-5">
        <div className="bg-linear-to-r not-only:from-[#4F39F6] to-[#9514FA] w-8 h-8 rounded-full  text-white mb-5 absolute right-8 top-5 flex justify-center items-center">
          <span className="text-[14px] font-bold">01</span>
        </div>
        <div className="w-20 h-20 bg-purple-100 flex items-center justify-center rounded-full mt-10">
          <img
            src={UserImg}
          />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Create Account</h2>
          <p className="text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
        </div>
      </div>
      <div className="card bg-base-100 w-full shadow-lg items-center p-10 space-y-5">
        <div className="bg-linear-to-r not-only:from-[#4F39F6] to-[#9514FA] w-8 h-8 rounded-full  text-white mb-5 absolute right-8 top-5 flex justify-center items-center">
          <span className="text-[14px] font-bold">02</span>
        </div>
        <div className="w-20 h-20 bg-purple-100 flex items-center justify-center rounded-full mt-10">
          <img
            src={PackageImg}
          />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Choose Products</h2>
          <p className="text-gray-500">Browse our catalog and select the toolsthat fit your needs.</p>
        </div>
      </div>
      <div className="card bg-base-100 w-full shadow-lg items-center p-10 space-y-5">
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-8 h-8 rounded-full  text-white mb-5 absolute right-8 top-5 flex justify-center items-center">
          <span className="text-[14px] font-bold">03</span>
        </div>
        <div className="w-20 h-20 bg-purple-100 flex items-center justify-center rounded-full mt-10">
          <img
            src={RocketImg}
          />
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Start Creating</h2>
          <p className="text-gray-500">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  </div>
}
export default Account;