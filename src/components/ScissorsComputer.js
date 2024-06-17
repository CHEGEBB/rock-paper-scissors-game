import React, { useContext } from 'react';
import ScissorsIcon from '../images/icon-scissors.svg';
import '../sass/scissors.scss';
import { GameContext } from '../context/GameContext';

const ScissorsComputer = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    console.log("Scissors selected");
    setSelectedChoice('Scissors');
  };

  if (selectedChoice === 'Scissors') {
    return (
      <div className="scissors">
        <div className="hand">
          <img src={ScissorsIcon} alt="Scissors" />
        </div>
      </div>
    );
  }

  return (
    <div className="scissors" onClick={handleClick}>
      <div className="hand">
        <img src={ScissorsIcon} alt="Scissors" />
      </div>
    </div>
  );
};

export default ScissorsComputer;
