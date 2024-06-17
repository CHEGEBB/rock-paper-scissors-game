import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [pickSide, setPickSide] = useState(false);
  const [hideTriangle, setHideTriangle] = useState(false);
  const [computerSide, setComputerSide] = useState(false);

  return (
    <GameContext.Provider value={{ selectedChoice, setSelectedChoice, pickSide, setPickSide,hideTriangle,setHideTriangle,computerSide,setComputerSide }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };