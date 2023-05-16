import logo from "./logo.svg";
import "./App.css";
import { useInterval } from "./useInterval";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>snake</p>
        <Routes>
          <Route path="/Snake_Game" element={<Game />}></Route>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
