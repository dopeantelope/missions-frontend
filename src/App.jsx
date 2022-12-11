import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import Missions from "./pages/Missions";
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
          <Route path="create-room" element={<CreateRoom />} />
          <Route path="join-room" element={<JoinRoom />} />
          <Route path="missions" element={<Missions />} />
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
