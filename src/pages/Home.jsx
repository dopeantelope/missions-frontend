import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";

function Home() {
 return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 ">
      <Link to="/create-room">
        <button className="text-[#050517] bg-[#ef233c] w-[300px] py-4 rounded-md">
          Create Room
        </button>
      </Link>

      <Link to="/join-room">
        <button className="text-[#050517] bg-[#edf2f4] w-[300px] py-4 rounded-md">
          Join Room
        </button>
      </Link>
    </div>
  )
}

export default Home