import React, { useEffect, useState } from 'react';
import PaperComponent from '../components/paper';
import ScissorsComponent from '../components/scissors';
import RockComponent from '../components/rock';

const ComputerChoice = ({ selectedChoice }) => {
  const [computerChoice, setComputerChoice] = useState(null);

  useEffect(() => {
    if (selectedChoice) {
      setTimeout(() => {
        const randomInt = getRandomInt(3);
        setComputerChoice(randomInt);
        console.log('his is'+randomInt);
      }, 3000);
    }
  }, [selectedChoice]);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

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
    </div>
  );
};

export default ComputerChoice;
