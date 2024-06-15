// components/PaperComponent.js
import React, { useContext } from 'react';
import PaperIcon from '../images/icon-paper.svg';
import '../sass/paper.scss';
import { GameContext } from '../context/GameContext';

const PaperComponent = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    console.log("Paper selected");  // Add this line to debug
    setSelectedChoice('Paper');
  };

  // Render only if no choice has been made or if 'Paper' is selected
  if (selectedChoice && selectedChoice !== 'Paper') {
    return null;
  }

  return (
    <div className="paper" onClick={handleClick}>
      <div className="hand">
        <img src={PaperIcon} alt="Paper" />
      </div>
    </div>
  );
};

export default PaperComponent;
