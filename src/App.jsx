import React, { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/banner'
import Summary from './components/summary'
import Product from './products/product'
import Account from './components/Account'
import Heading from './components/heading'
import Info from './components/info'
import InfoHeading from './components/InfoHeading'
import Moreinfo from './components/Moreinfo'
import { ToastContainer } from 'react-toastify'
import Footer from './components/footer'

const fetchProducts = async () => {
  const res = await fetch('data/data.json');
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  return (
    <div>
      <div className="space-y-10">
        <Navbar />
        <Banner />
        <Summary />
        <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-infinity loading-xl"></span>
        </div>}>
          <Product productsPromise={productsPromise} />
        </Suspense>
        <div className="min-h-screen space-y-2 flex flex-col justify-center items-center bg-base-200 py-10">
          <Heading />
          <Account />
        </div>
        <div className="min-h-screen space-y-2 flex flex-col justify-center items-center bg-base-100 py-10">
          <InfoHeading />
          <Info />
        </div>
      </div>
      <div className="max-h-screen pt-20 bg-base-100">
        <Moreinfo />
        <div className="bg-[#101727] p-5">
          <Footer />
        </div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  )
}

export default App
