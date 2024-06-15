// components/RockComponent.js
import React, { useContext } from 'react';
import RockIcon from '../images/icon-rock.svg'; 
import '../sass/rock.scss';
import { GameContext } from '../context/GameContext';

const RockComponent = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    console.log("Rock selected");  // Add this line to debug
    setSelectedChoice('Rock');
  };

  // Render only if no choice has been made or if 'Rock' is selected
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
