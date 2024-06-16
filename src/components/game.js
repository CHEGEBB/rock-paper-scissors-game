import React from 'react';
import '../sass/game.scss';
import Triangle from '../images/bg-triangle.svg';
import PaperComponent from '../components/paper';
import ScissorsComponent from '../components/scissors';
import RockComponent from '../components/rock';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

// import { GameProvider } from '../context/GameContext';

const Game = () => {
  const {hideTriangle,setHideTriangle } = useContext(GameContext);
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  if (selectedChoice && selectedChoice !== null && selectedChoice !== undefined) {
    setHideTriangle(true);
  }
  else {
    setHideTriangle(false);
  }

  if (hideTriangle) {
    return null;
  }

  if (setHideTriangle===true) {
    const HideTriangleStyles ={
      display: 'none'
    }
  }
 
    return ( 
        <div className="game-container">
        <div className="game">
        <div className="triangle">
          <img src={Triangle} alt="triangle" />
        
        <div className="choices-row-one">
            <div className="paper-container">
              <PaperComponent/>
            </div>
            <div className="scissors-container">
            <ScissorsComponent />
            </div>
        </div>
        <div className="choice-row-two">
        <div className="rock-container">
        <RockComponent />
            </div>
        </div>
        </div>
            </div>
        </div>

     );
}
 
export default Game;