import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function Lobby(props) {
  console.log(props.socket);

  const [gameCode, setGameCode] = useState("xxxx");
  props.socket.on("getGameCode", handleGameCode);

  const [usersConnected, setUsersConnected] = useState();
  function handleGameCode({roomName, host}) {
    console.log(`HOST: ${host}`)
    setGameCode(roomName);
  }

  function startGame() {
    props.socket.emit("startGame")
  }

  props.socket.on("usersList", ({connectedUsers, host}) => {
    console.log("in connected users")
    console.log(`HOST: ${host}`)
    setUsersConnected(
      connectedUsers.map((element) => (
        <li className="text-ming" key={props.socket.id}>
          {element.username}
        </li>
      ))
    );
  });

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
      <ul>{usersConnected}</ul>


      //if statement to show start game ----- need to pass in host to Lobby

      {(() => {
        if (socket.id == host) {
          <div className="h-[30vh] flex items-end">
          <Link to="/missions">
            <button 
              className="mt-8 font-['Archivo_Black'] text-darkBackground text-xl bg-brightTeal w-[300px] py-6 rounded-full"
              onClick={startGame}
            >
              Start
            </button>
          </Link>
        </div>
      }})}
    </div>
  );
}

export default Lobby;
