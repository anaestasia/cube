import React, { useState , useEffect} from "react";
import Axios from "axios";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";




export default function EditCountry() {
 
    const [country, setCountry] = useState("");

    const [idUser, setIdUser] = useState("");

    const [informationCountry, setInformationsCountry] = useState("");
    
    Axios.defaults.withCredentials = true;
  
    useEffect(() => 
    {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
            if (response.data.loggedIn === true) {
                setIdUser(response.data.user[0].id)
                Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/getid/"+response.data.user[0].id).then((resp) => {
                    document.getElementById("countryId").value = resp.data[0].country;
                    setCountry(resp.data[0].country)
                })
            }
        });
    }, []); 

    function validerChangement(event)
    {
        event.preventDefault();
        const champ = 'country';
        Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
            id: idUser,
            valeur: country,
            champ: champ,
          }).then((response) => {
              if(response.data.verif)
              {
                setInformationsCountry('Ton pays a bien été changé')
                // document.getElementById("countryId").value = '';
                setInterval(() => {
                  setInformationsCountry('')
                }, 2000);
              }
        });
    }

    return (
        <Row className="profile-field">
            <form onSubmit={validerChangement} id="countryForm">
              <Col sm={12}><label>Pays :</label></Col>
              <Row className="input-btn-field">
                <Col sm={10}><input id='countryId' className="pass-input" type="text" onChange={(e) => { setCountry(e.target.value) }} /></Col>
                <Col sm={2}><button id="btn-edit" form="countryForm"><i className="far fa-save"></i></button></Col>
              </Row>
          </form>  
          {informationCountry}
  
        </Row>
      );
    }