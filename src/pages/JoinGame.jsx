import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom";


function JoinGame(props) {

  const [gameCodeInput, setGameCodeInput] = useState('');

  function joinGame() {
    const code = gameCodeInput;
    props.socket.emit('joinGame', code);
  }

  const handleChange = (event) => {
    setGameCodeInput(event.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-8 px-4 text-center">


      <h1 className="font-['Archivo_Black'] text-white text-4xl">
        Join Game
      </h1>

      <div className="">
        <h2 className='mb-2 text-ming'>
          Enter nickname
        </h2>
        <form 
          action=""
        >
          <input
          className="font-['Archivo_Black'] bg-darkBackground border-solid border-4 text-white caret-ming border-ming w-[300px] py-5 rounded-full text-center text-3xl" 
          type="text" 
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
          className="font-['Archivo_Black'] bg-darkBackground border-solid border-4 text-white caret-ming border-ming w-[300px] py-5 rounded-full text-center text-3xl" 
          type="text"
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