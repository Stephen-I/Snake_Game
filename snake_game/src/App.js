import "./App.css";
import { useInterval } from "./useInterval";
import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  snakeStart,
  directions,
  speed,
  appleStart,
  scale,
  canvas,
} from "./constants";

function App() {
  const [snake, setSnake] = useState(snakeStart);
  const [apple, setApple] = useState(appleStart);
  const [dir, setDir] = useState([0, -1]);
  const [Speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const canvasRef = useRef(null);
  const startGame = () => {
    setSnake(snakeStart);
    setApple(appleStart);
    setDir([0, -1]);
    setSpeed(speed);
    setGameOver(false);
  };
  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
  };
  const moveSnake = ({ keyCode }) => {
    keyCode >= 37 && keyCode <= 40 && setDir(directions[keyCode]);
  };
  const createApple = () => {
    return apple.map((_, i) => {
      return Math.floor((Math.random() * canvas[i]) / scale);
    });
  };
  console.log(createApple());
  const checkCollision = (piece, body = snake) => {
    if (
      piece[0] * scale >= canvas[0] ||
      piece[0] < 0 ||
      piece[1] * scale >= canvas[1] ||
      piece[1] < 0
    )
      return true;

    for (const segment of body) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) {
        return true;
      }
    }
    return false;
  };
  const checkAppleCollison = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };
  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollison(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(scale, 0, 0, scale, 0, 0);
    context.clearRect(0, 0, canvas[0], canvas[1]);
    context.fillStyle = "blue";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "red";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  useInterval(() => gameLoop(), Speed);

  return (
    <div className="App">
      <header className="App-header">
        <p>snake</p>
        <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
          <canvas
            style={{
              border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            ref={canvasRef}
            width={`${canvas[0]}px`}
            height={`${canvas[1]}px`}
          />
          {gameOver && <div>GAME OVER!</div>}
          <button className="startBtn" onClick={startGame}>
            Start
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
