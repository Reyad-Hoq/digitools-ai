import React, { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/banner'
import Summary from './components/summary'
import Product from './products/product'
import Account from './components/Account'
import Heading from './components/heading'
import { ToastContainer } from 'react-toastify'

const fetchProducts = async () => {
  const res = await fetch('data/data.json');
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  return (
    <div className="space-y-15">
      <Navbar />
      <Banner />
      <Summary />
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>}>
        <Product productsPromise={productsPromise} />
      </Suspense>
      <div className="min-h-screen space-y-2 flex flex-col justify-center items-center bg-base-200">
        <Heading />
        <Account />
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  )
}

export default App
