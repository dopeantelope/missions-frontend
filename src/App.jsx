import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import CreateGame from "./pages/CreateGame";
import JoinGame from "./pages/JoinGame";
import Missions from "./pages/Missions";
import Lobby from "./pages/Lobby";
import GameOver from "./pages/GameOver";
import HowToPlay from "./pages/HowToPlay";
import io from 'socket.io-client';

function App() { 
  const [socket, setSocket] = useState(null); 
  console.log(socket) 
  useEffect(() => { 
    const newSocket = io(`http://${window.location.hostname}:3000`); 
    setSocket(newSocket); 
    return () => newSocket.close(); 
  }, [setSocket]);

 return (
  <div>
    {socket ? (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="create-game" element={<CreateGame />} />
          <Route path="join-game" element={<JoinGame />} />
          <Route path="missions" element={<Missions />} />
          <Route path="lobby" element={<Lobby />} />
          <Route path="game-over" element={<GameOver />} />
          <Route path="how-to-play" element={<HowToPlay />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ) : (
      <div>Not Connected</div>
  )}
  </div>
 )
}

export default App
