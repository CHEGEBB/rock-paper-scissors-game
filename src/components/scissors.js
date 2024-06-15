import React, { useContext } from 'react';
import ScissorsIcon from '../images/icon-scissors.svg';
import '../sass/scissors.scss';
import { GameContext } from '../context/GameContext';

const ScissorsComponent = () => {
  const {selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    console.log("Scissors selected"); 
    setSelectedChoice('Scissors');
  };
  

  if (selectedChoice && selectedChoice !== 'Scissors') {
    return null;
  }

  return (
    <div className="scissors" onClick={handleClick}>
      <div className="hand">
        <img src={ScissorsIcon} alt="Scissors" />
      </div>
    </div>
  );
};

export default ScissorsComponent;
