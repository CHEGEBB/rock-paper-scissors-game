import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [pickSide, setPickSide] = useState(false);
  const [hideTriangle, setHideTriangle] = useState(false);
  const [computerSide, setComputerSide] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const updateScore = (result) =>{
    if(result === 'win'){
      setWins(wins + 1);
    }
    else if(result === 'lose'){
      setLosses(wins + 1);
    }
  }

  return (
    <GameContext.Provider value={{ selectedChoice, setSelectedChoice, pickSide, setPickSide,hideTriangle,setHideTriangle,computerSide,setComputerSide,wins,setWins,updateScore,losses }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };