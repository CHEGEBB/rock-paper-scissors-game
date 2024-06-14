// ScissorsComponent.js
import React, { useContext } from 'react';
import ScissorsIcon from '../images/icon-scissors.svg'; // Adjust path as necessary
import '../sass/scissors.scss';
import { GameContext } from '../context/GameContext';

const ScissorsComponent = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    setSelectedChoice('Scissors');
  };

  return (
    <div className="scissors" onClick={handleClick}>
      <div className={`hand ${selectedChoice === 'Scissors' ? 'selected' : 'hidden'}`}>
        <img src={ScissorsIcon} alt="Scissors" />
      </div>
    </div>
  );
};

export default ScissorsComponent;
