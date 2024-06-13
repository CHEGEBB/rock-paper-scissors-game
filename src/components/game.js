import React from 'react';
import '../sass/game.scss';
import Paper from '../images/icon-paper.svg';
import Scissors from '../images/icon-scissors.svg';
import Rock from '../images/icon-rock.svg';
const game = () => {
    return ( 
        <div className="game-container">
        
        <div className="game">
        <div className="choices-row-one">
            <div className="paper">
              <div className="hand">
                <img src={Paper} alt="paper" />
              </div>
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
     );
}
 
export default game;