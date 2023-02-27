import React, { useEffect,useState } from 'react'
import axios from 'axios';
import Parser from  'html-react-parser';
import './Blog.css'
import { RotatingLines } from 'react-loader-spinner'
function Blog() {
   
  const [data,setData]=useState([]);

  const fetchData = () =>{
    return (
     axios.get("http://api.bcapoints.in/api/posts").then((response) =>  setData(response.data))
    )
 }

 useEffect(()=>{
  fetchData();
 },[])



  return (
    <div id='blog'>
      
  
      <div className="recentTab container-fluid px-5">
        <h4 className="recent">Blog</h4>
        <div className="recentBlogContainer">
        {data.length === 0 && <div className='btn-load'><RotatingLines
                    height="40"
                    width="40"
                    radius="9"
                    color="red"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                /><p>Fetching Data,Please wait...</p></div>}
          {data.map(item => item.sem === 'blog' && <div className="recentBF" key={item._id}> <h1 className='title'>{item.title}</h1><p>{Parser(item.description)}</p><hr/></div>)}
        </div>
      </div>
    </div>
   
  );
}

export default Blog
