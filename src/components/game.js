import React, { useEffect, useContext, useState } from 'react';
import '../sass/game.scss';
import Triangle from '../images/bg-triangle.svg';
import PaperComponent from '../components/paper';
import ScissorsComponent from '../components/scissors';
import RockComponent from '../components/rock';
import ComputerChoice from '../components/ComputerChoice'; // Import ComputerChoice component
import { GameContext } from '../context/GameContext';

const Game = () => {
  const { hideTriangle, setHideTriangle } = useContext(GameContext);
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);
  const [chosenComponent, setChosenComponent] = useState(null);

  useEffect(() => {
    if (selectedChoice) {
      setHideTriangle(true);
      setTimeout(() => {
        // Simulate computer choice after 3 seconds
        setSelectedChoice('Rock'); // Replace with actual logic to set computer choice
      }, 3000);
    } else {
      setHideTriangle(false);
      setChosenComponent(null);
    }
  }, [selectedChoice, setHideTriangle]);

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
    setChosenComponent(choice);
  };

  const hideTriangleStyles = {
    display: hideTriangle ? 'none' : 'block',
  };

  const renderChosenComponent = () => {
    switch (chosenComponent) {
      case 'Paper':
        return <PaperComponent />;
      case 'Scissors':
        return <ScissorsComponent />;
      case 'Rock':
        return <RockComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="game-container">
      <div className="game">
        <div className="triangle" style={hideTriangleStyles}>
          <img src={Triangle} alt="triangle" />
          <div className="choices-row-one">
            <div className="paper-container" onClick={() => handleChoiceClick('Paper')}>
              <PaperComponent />
            </div>
            <div className="scissors-container" onClick={() => handleChoiceClick('Scissors')}>
              <ScissorsComponent />
            </div>
          </div>
          <div className="choice-row-two">
            <div className="rock-container" onClick={() => handleChoiceClick('Rock')}>
              <RockComponent />
            </div>
          </div>
        </div>
        {hideTriangle && <div className="chosen-component">{renderChosenComponent()}</div>}
        <ComputerChoice selectedChoice={selectedChoice} /> {/* Render ComputerChoice component */}
      </div>
    </div>
  );
};

export default Game;
