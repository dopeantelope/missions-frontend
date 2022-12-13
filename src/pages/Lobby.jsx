import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";


function Lobby(props) {

  const [gameCode, setGameCode] = useState("xxxx");
  props.socket.on("getGameCode", handleGameCode);
  console.log(props.socket)

  let users = []
  let user = props.socket.id
  users.push(user)
  let usersConnected = users.map(element => <li className="text-ming" key={props.socket.id}>{element}</li>)


  function handleGameCode(roomName) {
    setGameCode(roomName)
  }

  return (
    <div className="flex flex-col items-center mt-8 px-4 text-center">


      <h1 className="font-['Archivo_Black'] mb-8 text-white text-4xl">
        Game Lobby
      </h1>

      <span className="text-ming">Game Code</span>
      <h1 className="font-['Archivo_Black'] mb-8 text-brightTeal text-5xl">
        {gameCode}
      </h1>

      <h2 className="font-['Archivo_Black'] mb-2 text-ming">Users Connected</h2>
      <ul>
        {usersConnected}
      </ul>

      <div className="h-[30vh] flex items-end">
        <Link to="/missions">
          <button className="mt-8 font-['Archivo_Black'] text-darkBackground text-xl bg-brightTeal w-[300px] py-6 rounded-full">
            Start
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Lobby