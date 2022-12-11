import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="create-room" element={<CreateRoom />} />
        <Route path="join-room" element={<JoinRoom />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
