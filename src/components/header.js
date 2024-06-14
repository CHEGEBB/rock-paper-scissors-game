import React from 'react';
import '../sass/header.scss';

const header = () => {
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
                <h1>12</h1>
            </div>
        </div>
     );
}
 
export default header;