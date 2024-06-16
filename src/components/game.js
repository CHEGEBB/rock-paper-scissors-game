import React, { useEffect, useContext, useState } from 'react';
import '../sass/game.scss';
import Triangle from '../images/bg-triangle.svg';
import PaperComponent from '../components/paper';
import ScissorsComponent from '../components/scissors';
import RockComponent from '../components/rock';
import { GameContext } from '../context/GameContext';

const Game = () => {
  const { hideTriangle, setHideTriangle } = useContext(GameContext);
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);
  const [chosenComponent, setChosenComponent] = useState(null);
  const {pickSide, setPickSide} = useContext(GameContext);
  const {computerChoice, setComputerChoice} =useState(false)

  useEffect(() => {
    if (selectedChoice) {
      setHideTriangle(true);
      setPickSide(true);
    } else {
      setHideTriangle(false);
      setPickSide(false);
    }
  }, [selectedChoice, setHideTriangle,setPickSide]);

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
    setChosenComponent(choice);
    setHideTriangle(true);
    setPickSide(true);
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

 
    function getRandomInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    const randomNumber = getRandomInt(4);
    

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
        {pickSide && <div className="pick-side"><h1>You Picked</h1></div>}
        {hideTriangle && <div className="chosen-component">{renderChosenComponent()}</div>}
      </div>
    </div>
  );
};

export default Game;
