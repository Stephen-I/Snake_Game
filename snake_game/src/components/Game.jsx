import { useEffect } from "react";
import { snakeStart, directions, speed, appleStart } from "../constants";

const Game = () => {
  const startGame = () => {};
  const endGame = () => {};
  const moveSnake = () => {};
  const createApple = () => {};
  const checkCollision = () => {};
  const checkAppleCollison = () => {};
  const gameLoop = () => {};

  //   useEffect(() => {}, [snake, apple, gameOver]);

  return (
    <div role="button" tabIndex="0" onKeyDown={(e) => moveSnake(e)}>
      <canvas
        style={{ border: "1px solid black" }}
        // ref={canvasRef}
        width={"800px"}
        height={"800px"}
      />
      {/* {gameOver && <div>GAME OVER!</div>} */}
      <button></button>
    </div>
  );
};

export default Game;
