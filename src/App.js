import logo from './logo.svg';
import './App.css';

function CoolComponent({ adjective = 'Cool' }) {
  return <p>Youpi So {adjective} !</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm sorry
          <CoolComponent adjective="awesome" />
          <CoolComponent />
        </p>
      </header>
    </div>
  );
}

export default App;
