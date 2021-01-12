import './App.css';
import Form from './components/form/Form';
import Menu from './components/menu/Menu';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/img/logo/logo_ressources_relationnelles_transparent.png" className="App-logo" alt="logo" />
        <p>
          <Form />
        </p>
        <p>
          <Menu />
        </p>
      </header>
    </div>
  );
}

export default App;
