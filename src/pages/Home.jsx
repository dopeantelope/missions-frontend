import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

function Home() {
 return (
    <div className="app--div">
      <button className="text-[#050517] bg-[#ef233c] w-[400px] py-3 rounded-md">
        Create Room
      </button>
      <button className="text-[#050517] bg-[#edf2f4] w-[400px] py-3 rounded-md">
        Join Room
      </button>
    </div>
  )
}

export default Home