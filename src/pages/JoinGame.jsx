import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";


function JoinGame(props) {

  const [username, setUsername] = useState('');
  const [gameCodeInput, setGameCodeInput] = useState('');

  function joinGame() {
    const room = gameCodeInput.toUpperCase();
    props.socket.emit('joinGame',( {username, room} ))
  }

  const handleChange = (event) => {
    setGameCodeInput(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-8 px-4 text-center">


      <h1 className="font-['Archivo_Black'] text-white text-4xl">
        Join Game
      </h1>

      <div className="">
        <h2 className='mb-2 text-ming'>
          Enter username
        </h2>
        <form 
          action=""
        >
          <input
          className="font-['Archivo_Black'] lowercase bg-darkBackground border-solid border-4 text-white caret-ming border-ming w-[300px] py-5 rounded-full text-center text-3xl" 
          type="text"
          maxLength="12"
          value={username}
          onChange={handleUsername}
          />
        </form>
      </div>

      <div className="">
        <h2 className='mb-2 text-ming'>
          Enter game code
        </h2>
        <form 
          action=""
        >
          <input 
          className="font-['Archivo_Black'] uppercase bg-darkBackground border-solid border-4 text-white caret-ming border-ming w-[300px] py-5 rounded-full text-center text-3xl" 
          type="text"
          maxLength="4"
          value={gameCodeInput}
          onChange={handleChange} />
        </form>
      </div>

      <Link to="/lobby">
        <button onClick={joinGame} className="font-['Archivo_Black'] text-darkBackground text-xl bg-brightTeal w-[300px] py-6 rounded-full">
          Join Game
        </button>
      </Link>
    </div>
  )
}

export default JoinGame