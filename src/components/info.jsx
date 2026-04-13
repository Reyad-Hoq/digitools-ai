import React from "react";

const Info = () => {
  return (
    <div className="max-w-9/12 mx-auto grid lg:grid-cols-3 bg-base-100 p-5 gap-15">
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body space-y-2">
          <h2 className="text-3xl font-bold">Starter</h2>
          <p className="text-lg text-gray-500">Perfect for getting started</p>
          <p className="text-gray-500 text-2xl"><span className="text-5xl font-bold text-black">$0/</span>Month</p>
          <ul className="mt-6 flex flex-col gap-2">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Access to 10 free tools</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Basic templates</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Community support</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>1 project per month</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div >
      <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg ">
        <div className="card-body text-white space-y-2">
          <div className=" relative">
            <div className="badge badge-xl absolute left-1/2 -translate-x-1/2 -top-10 bg-[#FEF3C6] text-[#BB4D00] font-semibold py-1 w-24
             md:w-30 rounded-full text-[12px] md:text-sm">Most Popular</div>
          </div>
          <h2 className="text-3xl font-bold">Starter</h2>
          <p className="text-lg">Perfect for getting started</p>
          <p className="text-white text-2xl"><span className="text-5xl font-bold">$0/</span>Month</p>
          <ul className="mt-6 flex flex-col gap-2">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Access to all premium tools</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Unlimited templates</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Priority support</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Unlimited projects</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Cloud sync</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>Advanced analytics</span>
            </li>

          </ul>
          <div className="mt-6">
            <button className="btn btn-block bg-base-100  rounded-full"
            >
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Start Pro Trial</span>
            </button>
          </div>
        </div>
      </div >
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body space-y-2">

          <div>
            <img src="" alt="" />
          </div>
          <h2 className="text-3xl font-bold">product.name</h2>
          <p className="text-lg font-semibold text-gray-500">Generate personalized cover letters in seconds.</p>
          <span className="text-xl">$12/one-time</span>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>AI-powered writing</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>AI-powered writing</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>AI-powered writing</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn btn-block bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div >
    </div>
  )
}
export default Info;