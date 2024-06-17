import React, { useEffect, useState, useContext } from 'react';
import PaperComputer from '../components/PaperComputer';
import ScissorsComputer from '../components/ScissorsComputer';
import RockComputer from '../components/RockComputer';
import { GameContext } from '../context/GameContext';
import '../sass/game.scss';

const ComputerChoice = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);
  const [computerSide, setComputerSide] = useState(false);
  const [resultMessage, setResultMessage] = useState(null);

  useEffect(() => {
    if (selectedChoice) {
      setComputerSide(true);
    } else {
      setComputerSide(false);
    }
  }, [selectedChoice]);

  useEffect(() => {
    if (computerChoice === null) {
      const randomNumber = getRandomInt(3);
      setComputerChoice(randomNumber);
    }
  }, [computerChoice]);

  useEffect(() => {
    handleResult();
  }, [selectedChoice, computerChoice]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const handleResult = () => {
    if (!selectedChoice || computerChoice === null) {
      return; // Exit early if choices are not set
    }

    if (selectedChoice === 'Paper' && computerChoice === 0) {
      setResultMessage('Tie');
    } else if (selectedChoice === 'Paper' && computerChoice === 1) {
      setResultMessage('You win');
    } else if (selectedChoice === 'Paper' && computerChoice === 2) {
      setResultMessage('You lose');
    } else if (selectedChoice === 'Scissors' && computerChoice === 0) {
      setResultMessage('You lose');
    } else if (selectedChoice === 'Scissors' && computerChoice === 1) {
      setResultMessage('Tie');
    } else if (selectedChoice === 'Scissors' && computerChoice === 2) {
      setResultMessage('You win');
    } else if (selectedChoice === 'Rock' && computerChoice === 0) {
      setResultMessage('You win');
    } else if (selectedChoice === 'Rock' && computerChoice === 1) {
      setResultMessage('You lose');
    } else if (selectedChoice === 'Rock' && computerChoice === 2) {
      setResultMessage('Tie');
    }
  };

  const renderComputerComponent = () => {
    switch (computerChoice) {
      case 0:
        return <PaperComputer />;
      case 1:
        return <ScissorsComputer />;
      case 2:
        return <RockComputer />;
      default:
        return null;
    }
  };

  return (
    <div className="computer-choice">
      <div className="results">
      <div className="result">
        {resultMessage && <h1>{resultMessage}</h1>}
      </div>
      </div>
    <div className="the-house">
      {computerSide && <div className='computer-side'>
      <h1>The house picked</h1>
      <button>
        Play Again
      </button>
      </div>}
      {computerChoice !== null && renderComputerComponent()}
      </div>
    
      
    </div>
  );
};

export default ComputerChoice;
