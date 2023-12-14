export const AlertBox = ({ gameState, wins, losses, onRestart }) => {
  const gameStates = {
    won: "You Won!",
    lost: "You Lost!",
    gaveup: "You Gave Up!",
  };

  return (
    <div
      className={
        "alert-box " + (gameState === "won" ? "alert-success" : "alert-error")
      }
    >
      <h6>{gameStates[gameState]}</h6>
      <p>
        {" "}
        You played {wins + losses} games
        <br />
        You won {wins} games
        <br />
        You lost {losses} games
      </p>
      <button onClick={onRestart} className="btn btn-white">
        Start New Game
      </button>
    </div>
  );
};
