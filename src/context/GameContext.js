import React, { createContext, useState } from 'react';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  return (
    <GameContext.Provider value={{ selectedChoice, setSelectedChoice }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };
