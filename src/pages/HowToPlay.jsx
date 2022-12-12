import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";


function HowToPlay() {
  return (
    <div className="flex flex-col items-center mt-8 px-4 text-center">
      <h1 className="font-['Archivo_Black'] mb-8 text-white text-4xl">
        How to Play
      </h1>
    </div>
  )
}

export default HowToPlay