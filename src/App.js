import './App.scss';
import Rules from './components/rules';
import Header   from './components/header';
import Game from './components/game';

function App() {
  return (
    <div className="App">
    <div className="header-section">
    <Header />
    </div>
    <div className="game-content">
    <Game/>
      {/* <Rules /> */}

      <div className="rules-toggle-button">
        <button>Rules</button>
      </div>
    </div>
    
    </div>
  );
}

export default App;
