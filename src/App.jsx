import React, { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/banner'
import Summary from './components/summary'
import Product from './products/product'

const fetchProducts = async () => {
  const res = await fetch('data/data.json');
  return res.json();
};

function App() {
  const productsPromise = fetchProducts();
  return (
    <div className="space-y-5">
      <Navbar />
      <Banner />
      <Summary />
      <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-xl"></span>
      </div>}>
        <Product productsPromise={productsPromise} />
      </Suspense>
    </div>
  )
}

export default App
