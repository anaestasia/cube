import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Posts = ({ posts, loading , idUser}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  


  return (
   <>
      <Row>
        <Col className="ml-5">
      {posts.map(post => ( 
      <>
        <Card style={{ width: '65rem' }}>
          <Card.Title>{post.nom}{" "}{post.prénom}</Card.Title>
          <span>Date création le {post.date_creation.substring(8,10)}/{post.date_creation.substring(5,7)}/{post.date_creation.substring(0,4)} à {post.date_creation.substring(11,19)}</span>
          {post.fk_user === idUser && <span>Edit</span> }
          <hr />
            <Card.Text dangerouslySetInnerHTML={{__html: post.content}}>
          </Card.Text>
           {post.nb_like} ♡ {idUser}
        </Card> <br/>
      </>
      ))}
      </Col>
    </Row></>
  );
};

export default Posts;
