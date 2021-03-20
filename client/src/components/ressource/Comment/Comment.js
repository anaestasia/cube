import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from './Posts';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import './Comment.css';

const App = () => {
  const [idUser, setIdUser] = useState("");
  const [role, setRole] = useState("");

  const { id } = useParams();
  
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {

    const interval = setInterval(() => {
     const fetchPosts = async () => {
      const res = await axios.get(process.env.REACT_APP_SITE_URL_API+'/comments/get/'+id);
      setPosts(res.data);
    };

    fetchPosts();

    axios.get(process.env.REACT_APP_SITE_URL_API+"/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setIdUser(response.data.user[0].id);
        setRole(response.data.user[0].fk_role);
      }
    });
    }, 1000);
    return () => clearInterval(interval);

    

  }, [id]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
      <Col>
        <Posts posts={currentPosts}  idUser={idUser} role={role}/>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Col>
  );
};

export default App;
