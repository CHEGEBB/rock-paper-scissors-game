import React from 'react';
import '../sass/game.scss';
import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';
import Triangle from '../images/bg-triangle.svg';
import PaperComponent from '../components/paper';
const game = () => {
    return ( 
        <div className="game-container">
        <div className="game">
        <div className="triangle">
          <img src={Triangle} alt="triangle" />
        
        <div className="choices-row-one">
            <div className="paper-container">
              <PaperComponent />
            </div>
            <div className="scissors">
              <div className="scissor">
                <img src={Scissors} alt="paper" />
              </div>
            </div>
        </div>
        <div className="choice-row-two">
        <div className="rock-content">
              <div className="rock">
                <img src={Rock} alt="paper" />
              </div>
            </div>
        </div>
        </div>
            </div>
        </div>
     );
}
 
export default game;