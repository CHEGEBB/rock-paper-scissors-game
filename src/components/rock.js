// components/RockComponent.js
import React, { useContext } from 'react';
import RockIcon from '../images/icon-rock.svg'; 
import '../sass/rock.scss';
import { GameContext } from '../context/GameContext';

const RockComponent = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);
  const {pickSide, setPickSide } = useContext(GameContext);


  const handleClick = () => {
    console.log("Rock selected"); 
    setSelectedChoice('Rock');
  };

  if (selectedChoice && selectedChoice !== 'Rock') {
    return null;
  }

  return (
    <div className="rock" onClick={handleClick}>
      <div className="hand">
        <img src={RockIcon} alt="Rock" />
      </div>
    </div>
  );
};

export default RockComponent;
