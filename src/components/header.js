import React from 'react';
import '../sass/header.scss';

const header = () => {
    return ( 
        <div className="header">
            <div className="intro">
                <div className="rock">
                    <h1>Rock</h1>
                </div>
                <div className="paper">
                    <h1>Paper</h1>
                </div>
                <div className="scissors">
                    <h1>Scissors</h1>
                </div>
            </div>
            <div className="score">
                <h1>Score</h1>
            </div>
        </div>
     );
}
 
export default header;