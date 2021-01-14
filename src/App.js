import React from 'react';
import { observer } from 'mobx-react';
import UserStore from './components/user/UserStore';
import LoginForm from './components/form/LoginForm';
//import InputField from './components/form/InputField';
//import SubmitBtn from './components/form/SubmitBtn';
import Menu from './components/menu/Menu';
import './App.css';
import SubmitBtn from './components/form/SubmitBtn/SubmitBtn';


class App extends React.Component {

  /* Fonction asynchrone */
  async componentDidMount() {
    try {

      // Await permet d'attendre la résolution d'un promise (ici la promise c'est le fetch)
      let res = await fetch('/isLoggedIn', {

        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }

      });

      let result = await res.json();

      if (result && result.success) { // Si c'est bon
        // On met à jour les infos user
        UserStore.loading = false; // N'est plus en chargement
        UserStore.isLoggedIn = true; // Est loggé
        UserStore.username = result.username; // Retourne le username (on changera pour email plus tard c'était surtout pour pas me perdre pendant le tuto)
      }

      else{
        // Sinon l'utilisateur n'est pas loggé mais le chargement est terminé quand même
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }

    }

    catch(e){
      // S'il y a une erreur, il se passe la même chose que si le traitement du form à échoué (le else au dessus)
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }

  }

  /* Fonction Logout */
  async doLogout() {
    try {

      let res = await fetch('/logout', {

        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }

      });

      let result = await res.json();

      if (result && result.success) { // Si c'est bon on le déconnecte et on supprime les infos user
        UserStore.isloggedIn = false;
        UserStore.username = '';
      }

    }

    catch(e){
      console.log(e)
    }

  }

  render() {

    if (UserStore.loading) { // Si le chargement est en cours
      return (
        <div className="App">
          <div className="container">
            Chargement en cours, veuillez patienter...
          </div>
        </div>
      );
    }

    else { // Sinon

      if (UserStore.isLoggedIn) { // Si l'utilisateur a réussi la connexion
        return (
          <div className="App">
            <div className="container">
              Bienvenue sur la page d\'accueil {UserStore.username} !
              <SubmitBtn
                text={'Logout'}
                disabled={false}
                onClick={ () => this.doLogout() }
              />
            </div>
          </div>
        );
      }

      return ( // (Sinon = Si l'utilisateur n'a pas réussi la connexion) On affiche le formulaire
        <div className="App">

          {/* Il faudra faire en sorte que le menu ne s'affiche pas sur la première page mais que sur toutes les autres */}
          <header className="App-header"> 
            <img src="/img/logo/logo_ressources_relationnelles_transparent.png" className="App-logo-menu" alt="logo" />
            <Menu />
          </header>

          <body className="App-body">

            <img src="/img/logo/logo_ressources_relationnelles_transparent.png" className="App-logo" alt="logo" />

            <div class="login-form">
              <LoginForm />
            </div>

          </body>

        </div>
      );
    }

  }
}

export default observer(App);
