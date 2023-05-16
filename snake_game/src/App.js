import logo from "./logo.svg";
import "./App.css";
import { useInterval } from "./useInterval";

import { Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>snake</p>
        <Link to="/Snake_Game">Start Game</Link>;
        <Routes>
          <Route path="/Snake_Game" element={<Game />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
