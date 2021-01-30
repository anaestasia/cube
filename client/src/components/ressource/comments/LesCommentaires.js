import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [idUser, setIdUser] = useState("");

  const { id } = useParams();
  
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {

    const interval = setInterval(() => {
     const fetchPosts = async () => {
      const res = await axios.get('http://localhost:3001/comments/get/'+id);
      setPosts(res.data);
    };

    fetchPosts();

    axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setIdUser(response.data.user[0].id);
      }
    });
    }, 1000);
    return () => clearInterval(interval);

    

  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Row>
      <Col>
      <Posts posts={currentPosts}  idUser={idUser}/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      </Col>
    </Row>
  );
};

export default App;
