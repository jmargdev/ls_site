import React, { Fragment } from 'react';

const Spinner = () => (
  <Fragment>
    <div className='text-center'>
      <div className='spinner-grow text-warning' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  </Fragment>
);

export default Spinner;
