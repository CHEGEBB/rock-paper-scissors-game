import React, { useEffect, useState ,useContext} from 'react';
import PaperComputer from '../components/PaperComputer';
import ScissorsComputer from '../components/ScissorsComputer';
import RockComputer from '../components/RockComputer';
import { GameContext } from '../context/GameContext';
import '../sass/game.scss';

const ComputerChoice = () => {
  const [computerChoice, setComputerChoice] = useState(null);
  const { selectedChoice, setSelectedChoice } = useContext(GameContext);
  const [computerSide, setComputerSide ]= useState(false);

  
  useEffect(()=>{
    if(selectedChoice){
      setComputerSide(true);
    }
    else{
      setComputerSide(false);
    }
  },[selectedChoice,setComputerSide]);
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    if (computerChoice === null) {
      const randomNumber = getRandomInt(3);
      setComputerChoice(randomNumber);
    }
  }, [computerChoice]);

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

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };


  return (
    <div className="computer-choice">
       {computerSide && <div className='computer-side'><h1>The house picked</h1></div>}
      {computerChoice !== null && renderComputerComponent()}
      <button onClick={handleChoiceClick}>me</button>
    </div>
  );
};

export default ComputerChoice;
