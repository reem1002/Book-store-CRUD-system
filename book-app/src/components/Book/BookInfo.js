import React, { Fragment } from 'react';

const PostInfo = ({ data }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {data ? (
        <div>
          <p className='fw-bold'>Title: {data.title}</p>
          <p className='fst-italic'>Price: {data.price}</p>
          <p className='fst-italic'>Author: {data.author}</p>

          <p className='fw-light'>Description: {data.description}</p>
        </div>
      ) : (
        <div className='alert alert-secondary' role='alert'>
          Select a book to read!
        </div>
      )}
    </Fragment>
  );
};

export default React.memo(PostInfo);
