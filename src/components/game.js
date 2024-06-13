import React from 'react';
import '../sass/game.scss';
import Paper from '../images/icon-paper.svg';
const game = () => {
    return ( 
        <div className="game-container">
            <div className="game">
            <div className="paper">
              <div className="hand">
                <img src={Paper} alt="paper" />
              </div>
            </div>
                
            </div>
        </div>
     );
}
 
export default game;