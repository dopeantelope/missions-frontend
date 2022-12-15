import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function CreateGame(props) {

  const [username, setUsername] = useState('');

  function newGame() {
    props.socket.emit('newGame', ( {username} ))
  }
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };


  return (
    <div className="flex flex-col items-center gap-8 mt-8 px-4 text-center">


      <h1 className="font-['Archivo_Black'] text-white text-4xl">
        Create Game
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
          onChange={handleUsername}
          value={username}/>
        </form>
      </div>

      <Link to="/lobby">
        <button onClick={newGame} className="font-['Archivo_Black'] text-darkBackground text-xl bg-brightTeal w-[300px] py-6 rounded-full">
          Create Game
        </button>
      </Link>
    </div>
  )
};
export default CreateGame;
