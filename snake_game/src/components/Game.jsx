import { useEffect, useRef, useState } from "react";
import { snakeStart, directions, speed, appleStart } from "../constants";

const Game = () => {
  const [snake, setSnake] = useState(snakeStart);
  const [apple, setApple] = useState(appleStart);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const canvasRef = useRef(null);
  const startGame = () => {};
  const endGame = () => {};
  const moveSnake = () => {};
  const createApple = () => {};
  const checkCollision = () => {};
  const checkAppleCollison = () => {};
  const gameLoop = () => {};

  useEffect(() => {}, [snake, apple, gameOver]);

  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
      <canvas
        style={{ border: "1px solid black" }}
        ref={canvasRef}
        width={"800px"}
        height={"800px"}
      />
      {gameOver && <div>GAME OVER!</div>}
      <button>start</button>
    </div>
  );
};

export default Game;
