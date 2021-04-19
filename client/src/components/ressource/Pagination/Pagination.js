import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

import './Pagination.css';

const PaginationInterne = ({ postsPerPage, totalPosts, paginate , currentPage }) => {
  const pageNumbers = [];
  const pageNumberAfficher = [];
  const pagninationAfficer  = [];
  // const pageNumberAfficher = [1,25,26,27,28,29,50];
  const lastPost =  Math.ceil(totalPosts/postsPerPage)

  for (let i = 1; i <= Math.ceil(lastPost); i++) {
    pageNumbers.push(i);
  }

  pageNumberAfficher.push(1);
  if(!pageNumberAfficher.includes(lastPost)){ pageNumberAfficher.push(lastPost)}
  if(!pageNumberAfficher.includes(currentPage)){ pageNumberAfficher.push(currentPage)}
  

  for (let i = 1; i <= Math.ceil(lastPost); i++) {
    if(!pageNumberAfficher.includes(i))
    {
      if(i>= currentPage-2 && i <= currentPage +2 )
      {
        pageNumberAfficher.push(i);
      }
    }
  }
  pageNumberAfficher.sort(function(a, b) {return a - b;});

  for (let i = 0; i <= pageNumberAfficher.length-1; i++) {
    if(i !== 0 && i !== (pageNumberAfficher.length))
    {
      if(pageNumberAfficher[i] !== (pageNumberAfficher[i-1]+1))
      {
        pagninationAfficer.push('...');
      }
    }
    pagninationAfficer.push(pageNumberAfficher[i]);
  }

  // recupérer le dernier élémenet ajouter ===> pageNumberAfficher[pageNumberAfficher.length-1]


  return (
    <>
    <Pagination>
      {currentPage !== 1 ? 
        <>
          <Pagination.First onClick={() => paginate(1)} />
          <Pagination.Prev onClick={() => {if(currentPage !== 1) {paginate(currentPage-1)}}} />
        </>
        :
        <></>
      }
        {pagninationAfficer.map(number => (
          <>
            {currentPage === number ?  
              <Pagination.Item active key={number} onClick={() => paginate(number)} >{number}</Pagination.Item>
              :
            number === '...' ?
              <Pagination.Ellipsis />
            :
              <Pagination.Item key={number} onClick={() => paginate(number)} >{number}</Pagination.Item>
            }
          </>
        ))}
      {currentPage !== lastPost ? 
        <>
          <Pagination.Next onClick={() => {if(currentPage !== lastPost) {paginate(currentPage+1)}}}/>
          <Pagination.Last onClick={() => paginate(lastPost)}/>
        </>
        :
        <></>
      }
    </Pagination>
    </>
  );
};
// {(post.fk_user === idUser || role >=4)
// {filtreExiste ? <test>d</test> : <span>Aucun résultat</span>}

export default PaginationInterne;
