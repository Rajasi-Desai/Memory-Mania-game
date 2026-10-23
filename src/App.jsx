import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Graffiti from "./components/Graffiti";
import ResetButton from "./components/ResetButton";
import ScoreBoard from "./components/ScoreBoard";
import Settings from "./components/Settings";
import TempComponent from "./components/TempComponent";
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
  };

  return (
    <div className="h-screen flex flex-col p-4 max-w-screen-md mx-auto bg-gradient-to-bl from-cyan-100 via-blue-50 to-white">
      <TempComponent 
        deck={deck}
        gridSize={gridSize}
        moves={moves}
        matches={matches}
        resetCounter={resetCounter}
        setMoves={setMoves}
        setMatches={setMatches}
      />
      <h1 className="text-3xl font-bold text-center mb-4"> 
        Memory Match Mania
      </h1>

      <Settings onGridChange={reInitializeGame} />

      <ScoreBoard 
        moves={moves}
        matches={matches}
        total={deck.length / 2}
      />
      
      <ResetButton onReset={() => reInitializeGame(gridSize)} />

      <div className="flex-grow">
        <GameBoard 
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
