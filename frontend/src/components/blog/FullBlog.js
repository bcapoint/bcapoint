import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Parser from 'html-react-parser';

import axios from 'axios';

function FullBlog() {
  const { _id } = useParams();

  const [data, setData] = useState([]);
  
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get(`https://api.bcapoints.in/api/blog/${_id}`)
      setData(response.data)
      // console.log(response)
    }
    fetchData()
  }, [_id]);

  return (
    <div className='container'>
      <h1>{data.title}</h1>
      {Object.keys(data).map(key => { return key === 'description' && <div key={Math.random() * 10}> {Parser(data[key])}</div> })}
                
    </div>
  )
}

export default FullBlog