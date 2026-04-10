import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/banner'
import Summary from './components/summary'
import Product from './products/product'
function App() {

  return (
    <div className="space-y-2">
      <Navbar />
      <Banner />
      <Summary />
      <Product />
    </div>
  )
}

export default App
