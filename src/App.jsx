import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/banner'
import Summary from './components/summary'
function App() {

  return (
    <div className="space-y-2">
      <Navbar />
      <Banner />
      <Summary />
    </div>
  )
}

export default App
