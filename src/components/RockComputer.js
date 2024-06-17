import React, { useContext } from 'react';
import RockIcon from '../images/icon-rock.svg';
import '../sass/rock.scss';
import { GameContext } from '../context/GameContext';

const RockComputer = () => {
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);

  const handleClick = () => {
    console.log("Rock selected");
    setSelectedChoice('Rock');
  };

  if (selectedChoice === 'Rock') {
    return (
      <div className="rock">
        <div className="hand">
          <img src={RockIcon} alt="Rock" />
        </div>
      </div>
    );
  }

  return (
    <div className="rock" onClick={handleClick}>
      <div className="hand">
        <img src={RockIcon} alt="Rock" />
      </div>
    </div>
  );
};

export default RockComputer;
