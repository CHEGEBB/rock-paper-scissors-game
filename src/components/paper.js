// PaperComponent.js
import React, { useContext } from 'react';
import PaperIcon from '../images/icon-paper.svg'; // Adjust path as necessary
import '../sass/paper.scss';
import { GameContext } from '../context/GameContext';

const PaperComponent = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    setSelectedChoice('Paper');
  };

  return (
    <div className="paper" onClick={handleClick}>
      <div className={`hand ${selectedChoice === 'Paper' ? 'selected' : 'hidden'}`}>
        <img src={PaperIcon} alt="Paper" />
      </div>
    </div>
  );
};

export default PaperComponent;
