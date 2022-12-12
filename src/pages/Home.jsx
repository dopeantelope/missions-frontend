import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
 return (
    <div className="flex flex-col items-center gap-8 mt-8 px-4 text-center">
      <h1 className="font-['Archivo_Black'] text-white text-4xl">
        Missions
      </h1>
      <p className="text-ming font-['Poppins']">
        A party game where players compete against each other to complete secret missions!
      </p>
      <Link to="/create-game">
        <button className="mt-8 font-['Archivo_Black'] text-darkBackground text-xl bg-brightTeal w-[300px] py-6 rounded-full">
          Create Game
        </button>
      </Link>

      <Link to="/join-game">
        <button className="font-['Archivo_Black'] bg-darkBackground border-solid border-4 text-ming caret-ming border-ming text-xl w-[300px] py-6 rounded-full">
          Join Game
        </button>
      </Link>

      <Link to="/how-to-play">
        <button className="font-['Archivo_Black'] bg-darkBackground border-solid border-4 text-ming caret-ming border-ming text-xl w-[300px] py-6 rounded-full">
          How to Play
        </button>
      </Link>
    </div>
  )
}

export default Home