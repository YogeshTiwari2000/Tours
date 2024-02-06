import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour }) => {
  return <section>
    <div className='title'>
      <h2>
        Our tours
        <div className='underline'> </div>
      </h2>
    </div>
    <div>
      {tours.map((item) => { return <Tour key={item.id} {...item} removeTour={removeTour}></Tour> }
      )}
    </div>
  </section>;
};

export default Tours;
