import './App.css';
import Form from './components/form/Form';
import Menu from './components/menu/Menu';



function App() {
  return (
    <div className="App">

      {/* Il faudra faire en sorte que le menu ne s'affiche pas sur la première page mais que sur toutes les autres */}
      <header className="App-header"> 
        <img src="/img/logo/logo_ressources_relationnelles_transparent.png" className="App-logo-menu" alt="logo" />
        <Menu />
      </header>

      <body className="App-body">

        <img src="/img/logo/logo_ressources_relationnelles_transparent.png" className="App-logo" alt="logo" />

        <div class="login-form">
          <Form />
        </div>

      </body>

    </div>
  );
}

export default App;
