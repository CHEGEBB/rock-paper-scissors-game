import React, { useContext } from 'react';
import PaperIcon from '../images/icon-paper.svg';
import '../sass/paper.scss';
import { GameContext } from '../context/GameContext';

const PaperComputer = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    console.log("PaperComputer selected");
    setSelectedChoice('PaperComputer');
  };

  if (selectedChoice === 'PaperComputer') {
    return (
      <div className="paper">
        <div className="hand">
          <img src={PaperIcon} alt="Paper" />
        </div>
      </div>
    );
  }

  return (
    <div className="paper-computer">
    <div className="paper" onClick={handleClick}>
      <div className="hand">
        <img src={PaperIcon} alt="Paper" />
      </div>
    </div>
    </div>
  );
};

export default PaperComputer;
