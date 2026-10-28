import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Graffiti from "./components/Graffiti";
import ResetButton from "./components/ResetButton";
import ScoreBoard from "./components/ScoreBoard";
import Settings from "./components/Settings";
import generateIcons from "./utils/generateIcons";
import shuffleDeck from "./utils/shuffleDeck";
import './App.css';

function App() {
  const [gridSize, setGridSize] = useState(4);

  const createNewDeck = (size) => {
    const iconCount = (size * size) / 2;
    const icons = generateIcons(iconCount);

    const newDeck = [...icons, ...icons];

    return shuffleDeck(newDeck);
  };

  const [deck, setDeck] = useState(() => createNewDeck(4))
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [resetCounter, setResetCounter] = useState(0);

  const reInitializeGame = (size) => {
    setGridSize(size);

    setDeck(createNewDeck(size));

    setMoves(0);

    setMatches(0);

    setResetCounter((prev) => prev + 1);
  };

  return (
    <div className="h-screen flex flex-col p-4 max-w-3xl mx-auto bg-linear-to-bl from-rd-purple-200 via-pink-100 to-rd-purple-50">
      <h1 className="text-3xl text-rd-teal-950 font-bold text-center mb-4"> 
        Memory Match Mania
      </h1>

      <Settings onGridChange={reInitializeGame} />

      <ScoreBoard 
        moves={moves}
        matches={matches}
        total={deck.length / 2}
      />
      
      <ResetButton onReset={() => reInitializeGame(gridSize)} />

      <div className="grow">
        <GameBoard 
          key={resetCounter}
          gridSize={gridSize}
          deck={deck}
          setMoves={setMoves}
          setMatches={setMatches}
        />
      </div>
      
      {matches === deck.length/2 && <Graffiti />}

    </div>
  )
}

export default App
