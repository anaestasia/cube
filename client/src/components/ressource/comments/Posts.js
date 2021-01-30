import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Posts = ({ posts , idUser , role}) => {

  const modifierCommentaire = () =>
  {
    alert('ets')
  }

  return (
   <>
      <Row>
        <Col className="ml-5">
      {posts.map(post => ( 
        //li obligatoire sinon erreur dans la console
      <li key={post.id} style={{ listStyle: 'none' }} >
        <Card style={{ width: '65rem' }}>
          <Card.Title>{post.nom}{" "}{post.prénom}</Card.Title>
          <span>Date création le {post.date_creation.substring(8,10)}/{post.date_creation.substring(5,7)}/{post.date_creation.substring(0,4)} à {post.date_creation.substring(11,19)}</span>
          {(post.fk_user === idUser || role >=3) && <button onClick={modifierCommentaire}>Edit</button> }
          <hr />
            <Card.Text dangerouslySetInnerHTML={{__html: post.content}}>
          </Card.Text>
           {post.nb_like} ♡ 
        </Card><br />
      </li>
      ))}
      </Col>
    </Row></>
  );
};

export default Posts;
