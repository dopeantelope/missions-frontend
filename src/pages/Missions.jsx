import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Card from '../components/Card'


function Missions() {


  return (
    <div className="flex flex-col items-center mt-8 mb-8 gap-4 px-4 text-center text-ming">
      <h1 className="font-['Archivo_Black'] text-white text-4xl mb-4">
        Missions
      </h1>

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Missions