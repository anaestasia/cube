import './App.css';
import Compo from './components/menu/Compo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/img/logo/logo_ressources_relationnelles.png" className="App-logo" alt="logo" />
        <p>
          <Compo />
        </p>
      </header>
    </div>
  );
}

export default App;
