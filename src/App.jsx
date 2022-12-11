import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="/" index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
