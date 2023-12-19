import { useEffect, useReducer } from "react";
import {
  Header,
  Footer,
  TopicLabel,
  Hangman,
  Letters,
  Keyboard,
  AlertBox,
} from "./components";

import data from "./data.json";
import reducer from "./reducer";

const wordGenerator = (topic) => {
  const words = data[topic];
  const index = Math.floor(Math.random() * words.length);
  return words[index].toUpperCase();
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    wins: 0,
    losses: 0,
    word: null,
    guessedLetters: [],
    topic: "animals", // Default topic
    hints: 0,
    mistakeCount: 0,
    gameState: null,
  });

  const startGame = (topic) => {
    dispatch({
      type: "START_GAME",
      payload: { word: wordGenerator(state.topic)},
    });
  };

  useEffect(() => {
    startGame();
  }, [state.topic]);

  const handleTopicChange = (selectedTopic) => {
    // Update the topic in the state
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: { category: selectedTopic },
    });

    // Start a new game with the selected topic
    startGame(selectedTopic);
  };

  const checkGuess = (letter, hintUsed) => {
    if (state.word.includes(letter)) {
      const positions = [...state.word.matchAll(letter)];
      const letters = [...state.guessedLetters];
      positions.forEach((position) => {
        letters[position.index] = letter;
      });
      dispatch({
        type: "UPDATE_LETTERS",
        payload: {
          letters,
          hintUsed,
        },
      });
    } else {
      dispatch({
        type: "MISTAKE",
      });
    }
  };

  const giveUp = () => {
    dispatch({
      type: "GIVE_UP",
    });
  };

  const useHint = () => {
    const allLetters = [...new Set(state.word)];
    const revealedLetters = state.guessedLetters.filter((x) => x);
    const hintLetters = allLetters.filter(
      (letter) => !revealedLetters.includes(letter)
    );
    const hintLetter =
      hintLetters[Math.floor(Math.random() * hintLetters.length)];
    checkGuess(hintLetter, true);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header onSelectTopic={handleTopicChange} onChangeCategory={handleTopicChange} />
      <main className="flex-1 flex">
        <div className="flex-[2] bg-slate-200 flex items-center flex-col gap-8 p-10">
          <TopicLabel topic={state.topic} />
          <Letters letters={state.guessedLetters} />
          {state.gameState === null ? (
            <>
              {" "}
              <Keyboard onClick={checkGuess} />
              <div className="btn-group">
                <button className="btn btn-error" onClick={giveUp}>
                  Give Up!
                </button>
                <button
                  disabled={state.hints === 0}
                  onClick={useHint}
                  className="btn disabled:opacity-30"
                >
                  Hint
                  <span className="btn-label">{state.hints}</span>
                </button>
              </div>{" "}
            </>
          ) : (
            <AlertBox
              gameState={state.gameState}
              wins={state.wins}
              losses={state.losses}
              onRestart={startGame}
            />
          )}
        </div>
        <div className="flex-[1] flex justify-center items-center">
          <Hangman mistakeCount={state.mistakeCount} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
