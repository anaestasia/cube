import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import { Link } from 'react-router-dom';

var hash = require('object-hash');

export default function Register() {
  const [FirstNameReg, setFirstNameReg] = useState("");
  const [NameReg, setNameReg] = useState("");
  const [EmailReg, setEmailReg] = useState("");
  const [MDPReg, setMDPReg] = useState("");
  const [MDPDReg, setMDPDReg] = useState("");
  const [NbStreet, setNbStreet] = useState("");
  const [nameStreet, setnameStreet] = useState("");
  const [cityName, setCityName] = useState("");
  const [postalCode, setpostalCode] = useState("");
  const [nameCountry, setnameCountry] = useState("");
  
  const [registerStatus, setregisterStatus] = useState("");
  
  Axios.defaults.withCredentials = true;

  const register = event => {
    event.preventDefault();
    const mdpHash = hash.sha1(MDPReg);
    if(FirstNameReg.trim() !== '' && NameReg.trim() !== '' && EmailReg.trim() !== '' && MDPReg.trim() !== '' )
    {
      const date = new Date();
      const sqlDate = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      if(MDPDReg === MDPReg){
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/create", {
          firstname: FirstNameReg,
          lastname: NameReg,
          mail: EmailReg,
          password: mdpHash,
          token :'', //a generer automatiquepment
          street_nb :NbStreet,
          street_name	: nameStreet,
          city	:cityName,
          postal_code: postalCode,	
          country	:nameCountry,
          date_creation: sqlDate,//mettre date now en js	
          last_connexion	: sqlDate,//mettre date now en js
          checked	:'0',
          deleted	:'0',
          fk_role:'1', //regarder pour faire une recherche sur le nom sinon laisser l'id de la table role
        }).then((response) => {
          console.log(response);
          setregisterStatus(response.data.message);
          //window.location.href = "/";
        });
      }
      else
      {
        setregisterStatus('les deux mdp ne sont pas identiques');
      }
    }
    else
    {
        window.location.href = "/register";
    }
  };


  return (
    <div className="App">
      <div className="registration">
        <h1>Inscription</h1>
        <form onSubmit={register}>

          <label>Prénom :</label>
          <input type="text" onChange={(e) => {setFirstNameReg(e.target.value); }} required/>
          <br />
          <label>Nom :</label>
          <input type="text" onChange={(e) => {setNameReg(e.target.value); }} required/>
          <br />
          <label>email :</label>
          <input type="email" onChange={(e) => {setEmailReg(e.target.value); }} required/>
          <br />
          <label>mdp :</label>
          <input type="password" minlength="12" onChange={(e) => {setMDPReg(e.target.value); }} required/>
          <br />
          <label>mdp deuxieme :</label>
          <input type="password" minlength="12" onChange={(e) => {setMDPDReg(e.target.value); }} required/>
          <br />
          {/* <label>mdp :</label>
          <input type="password" minlength="12" onChange={(e) => {setMDPReg(e.target.value); }} required/>
          <br /> regarder pour check les deux mdp */}
          <label>Numéro rue :</label>
          <input type="number" onChange={(e) => {setNbStreet(e.target.value); }}/>
          <br />
          <label>nom rue :</label>
          <input type="text" onChange={(e) => {setnameStreet(e.target.value); }}/>
          <br />
          <label>nom ville :</label>
          <input type="text" onChange={(e) => {setCityName(e.target.value); }}/>
          <br />
          <label>code postal ville :</label>
          <input type="number" onChange={(e) => {setpostalCode(e.target.value); }}/>
          <br />
          <label>pays :</label>
          <input type="text" onChange={(e) => {setnameCountry(e.target.value); }} />
          <br />
          
          <input type="submit" value="S'inscrire"/>
          <Link to="/"> retour</Link>

        </form>
      <h1>{registerStatus}</h1>
          

        
      </div>

    </div>
  );
}
