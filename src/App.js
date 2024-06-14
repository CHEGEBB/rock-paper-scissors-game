import './App.scss';
import Rules from './components/rules';
import Header   from './components/header';
import Game from './components/game';
import {useState} from 'react';

function App() {

  const [showRules, setShowRules] = useState(false);
  
  const handleToggle= (rules) =>{
    setShowRules(!showRules);
  }

  return (
    <div className="App">
    <div className="header-section">
    <Header />
    </div> 
    <div className="game-content">
    <Game/>

    {showRules && (
      <div className="rules">
      <Rules />
      </div>
    )}

      <div className="rules-toggle-button">
        <button onClick={handleToggle}>Rules</button>
      </div>
    </div>
    
    </div>
  );
}

export default App;
