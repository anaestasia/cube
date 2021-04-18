import React, { useState , useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "axios";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default function HandleUser() {

    const [theUsers, setTheUsers] = useState([]);
    const [refreshKey, setRefreshKey] = useState(1);

    useEffect(() => 
    {
      if(refreshKey)
      {
        Axios.get(process.env.REACT_APP_SITE_URL_API+"/users/get").then((response) => {
              setTheUsers(response.data)
              setRefreshKey(0)
        });
      }
    }, [refreshKey]);

    const deleteUser = (id) => 
    {
      const champ = 'deleted';
      Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
          id: id,
          valeur: 1,
          champ: champ,
        }).then((response) => {
          if(response.data.verif)
          {
            setRefreshKey(1)
          }
        });
    }

    const changeRole = (id) => 
    {
      var select = document.getElementById("selectUser"+id);
      var choice = select.selectedIndex;
      var valeur = select.options[choice].value;
      const champ = 'fk_role';
      Axios.post(process.env.REACT_APP_SITE_URL_API+"/users/edit", {
          id: id,
          valeur: valeur,
          champ: champ,
        })
    }

  return (
    <>
      <Col xl={9} className="col-content-page">
        <Row className="approved-ressource-container">

          
          <Container fluid>
            <Table bordered hover>
              <thead>
                <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Mail</th>
                <th>Adresse</th>
                <th>Vérifié</th>
                <th>Rôle</th>
                <th>Dernière connexion</th>
                <th>Date de création</th>
                <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>
              {theUsers.map(user => ( 
                <tr key={user.id} >
                    <td>{user.lastname}</td>
                    <td>{user.firstname}</td>
                    <td>{user.mail}</td>
                    <td>{user.street_nb}{' '}{user.street_name}{' '}{user.postal_code}{' '}{user.city}{' en '}{user.country}</td>
                    <td>{user.checked === 1 ? 'Oui' : 'Non'}</td>
                    <td>
                      <div><select id={'selectUser' + user.id}>
                        {user.fk_role === 1 ? <option value='1' selected>Not verified</option> : <option value='1'>Not verified</option>}
                        {user.fk_role === 2 ? <option value='2' selected>Citoyen</option> : <option value='2'>Citoyen</option>}
                        {user.fk_role === 3 ? <option value='3' selected>Modérateur</option> : <option value='3'>Modérateur</option>}
                        {user.fk_role === 4 ? <option value='4' selected>Admin</option> : <option value='4'>Admin</option>}
                        {user.fk_role === 5 ? <option value='5' selected>Super-Admin</option> : <option value='5'>Super-Admin</option>}
                      </select>
                      <Button onClick={() => {changeRole(user.id); }} variant="secondary">Ok</Button>{' '}</div>
                      </td>
                    <td>{user.last_connexion.substring(8,10)}/{user.last_connexion.substring(5,7)}/{user.last_connexion.substring(0,4)} à {user.last_connexion.substring(11,19)}</td>
                    <td>{user.date_creation.substring(8,10)}/{user.date_creation.substring(5,7)}/{user.date_creation.substring(0,4)} à {user.date_creation.substring(11,19)}</td>
                    <td><Button variant="danger" onClick={() => {deleteUser(user.id); }} >Supprimer</Button></td>
                </tr>
              ))}
              </tbody>
            </Table>
          </Container>

        </Row>
      </Col>
    </>
  );
}