// components/PaperComponent.js
import React, { useContext } from 'react';
import PaperIcon from '../images/icon-paper.svg';
import '../sass/paper.scss';
import { GameContext } from '../context/GameContext';

const PaperComputer = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    console.log("PaperComputer selected");  // Add this line to debug
    setSelectedChoice('PaperComputer');
  };

  // Render only if no choice has been made or if 'Paper' is selected
  if (selectedChoice && selectedChoice === 'PaperComputer') {
    return PaperComputer.render();
  }

  return (
    <div className="paper" onClick={handleClick}>
      <div className="hand">
        <img src={PaperIcon} alt="Paper" />
      </div>
    </div>
  );
};

export default PaperComputer;
