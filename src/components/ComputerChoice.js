import React, { useEffect, useState } from 'react';
import PaperComponent from '../components/paper';
import ScissorsComponent from '../components/scissors';
import RockComponent from '../components/rock';

const ComputerChoice = ({ selectedChoice }) => {
  const [computerChoice, setComputerChoice] = useState(null);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    if (selectedChoice) {
      const randomNumber = getRandomInt(3);
      setComputerChoice(randomNumber);
      console.log("The selected random int is: " + randomNumber);
    }
  }, [selectedChoice]);

  const renderComputerComponent = () => {
    switch (computerChoice) {
      case 0:
        return <PaperComponent />;
      case 1:
        return <ScissorsComponent />;
      case 2:
        return <RockComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="computer-choice">
      {computerChoice !== null && renderComputerComponent()}
      <h1>Im here</h1>
    </div>
  );
};

export default ComputerChoice;
