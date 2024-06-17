import React, { useContext } from 'react';
import '../sass/header.scss';
import { GameContext } from '../context/GameContext';

const Header = () => {
    const { wins, losses } = useContext(GameContext);

    return ( 
        <div className="header">
            <div className="intro">
                <div className="rock-heading">
                    <h1>Rock</h1>
                </div>
                <div className="paper-heading">
                    <h1>Paper</h1>
                </div>
                <div className="scissors-heading">
                    <h1>Scissors</h1>
                </div>
            </div>
            <div className="score">
                <p>Score</p>
                <h1>{wins}</h1> {/* Display wins */}
                <h1>{losses}</h1> {/* Display losses */}
            </div>
        </div>
     );
}
 
export default Header;
