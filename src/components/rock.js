// RockComponent.js
import React, { useContext } from 'react';
import RockIcon from '../images/icon-rock.svg'; // Adjust path as necessary
import '../sass/rock.scss';
import { GameContext } from '../context/GameContext';

const RockComponent = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    setSelectedChoice('Rock');
    alert('Rock selected ' + selectedChoice);
  };

  return (
    <div className={`rock ${selectedChoice === 'Rock' ? 'hidden' : ''}`} onClick={handleClick}>
      <div className="hand">
        <img src={RockIcon} alt="Rock" />
      </div>
    </div>
  );
};

export default RockComponent;
