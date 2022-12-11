import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
 return (
    <div className="flex flex-col items-center gap-8 mt-8 px-4 text-center">
      <h1 className="font-['Archivo_Black'] text-white text-4xl">
        Missions
      </h1>
      <p className="text-white font-['Poppins']">
        A party game where players compete against each other to complete secret missions!
      </p>
      <Link to="/create-room">
        <button className="mt-8 font-['Archivo_Black'] text-white text-xl bg-[#ef233c] w-[300px] py-6 rounded-full">
          Create Room
        </button>
      </Link>

      <Link to="/join-room">
        <button className="font-['Archivo_Black'] text-[#050517] text-xl bg-[#edf2f4] w-[300px] py-6 rounded-full">
          Join Room
        </button>
      </Link>
    </div>
  )
}

export default Home