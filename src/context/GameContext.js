import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [pickSide, setPickSide] = useState(false);
  const [hideTriangle, setHideTriangle] = useState(false);

  return (
    <GameContext.Provider value={{ selectedChoice, setSelectedChoice, pickSide, setPickSide,hideTriangle,setHideTriangle }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };