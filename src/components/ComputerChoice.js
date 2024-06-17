import React, { useEffect, useState } from 'react';
import PaperComputer from '../components/PaperComputer';
import ScissorsComponent from '../components/scissors';
import RockComputer from '../components/RockComputer';

const ComputerChoice = () => {
  const [computerChoice, setComputerChoice] = useState(null);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    if (computerChoice === null) {
      const randomNumber = getRandomInt(3);
      setComputerChoice(randomNumber);
      console.log("The selected random int is: " + randomNumber);  // Log the random number
    }
  }, [computerChoice]);

  const renderComputerComponent = () => {
    switch (computerChoice) {
      case 0:
        return <PaperComputer />;
      case 1:
        return <ScissorsComponent />;
      case 2:
        return <RockComputer />;
      default:
        return null;
    }
  };

  return (
    <div className="computer-choice">
      {computerChoice !== null && renderComputerComponent()}
      <h1>I'm here</h1>
    </div>
  );
};

export default ComputerChoice;
