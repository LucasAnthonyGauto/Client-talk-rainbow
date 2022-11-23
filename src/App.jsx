import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import { useState } from "react";
import { Button, Input, Text, Title } from "./Component/Atoms";
import { Chat, Home, Posts } from './Pages';
import { NavBar } from './Component/Organisms';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/chat" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
