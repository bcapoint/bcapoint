import React, { useState } from 'react';

const ShowMore = ({text}) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {setIsReadMore(!isReadMore)};

  return (
    <p >
      {isReadMore ? text.slice(0, 60): text }
      {text.length > 60 &&
        <span className='text-primary' onClick={toggleReadMore}>
          {isReadMore ? '...read more' : ' ...show less'}
        </span>
      }
    </p>
  )
}

export default ShowMore;