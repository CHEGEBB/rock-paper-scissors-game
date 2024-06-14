import React from 'react';
import Scissors from '../images/icon-scissors.svg';
import '../sass/scissors.scss';

const scissors = () => {
    return ( 
        <div className="scissors">
            <div className="scissor">
                <img src={Scissors} alt="paper" />
            </div>
        </div>
     );
}
 
export default scissors;