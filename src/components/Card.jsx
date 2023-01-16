import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'


function Card(props) {
  console.log(props)
  return(
    <div className="flex flex-col items-center text-center text-ming">
      <div className="w-full bg-darkBackground border-solid border-4 border-ming rounded-full px-4 py-2">
        {props.mission}
      </div>
    </div>
  )
}

export default Card
