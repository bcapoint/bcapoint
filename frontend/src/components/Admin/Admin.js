import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { SlNote } from 'react-icons/sl'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {ImUsers} from "react-icons/im";
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-243871076-1";
ReactGA.initialize(TRACKING_ID);

const Admin = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    if (token) {
      navigate('/admin')
    }
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className='container'>
      <Link className='btn btn-primary m-3' to="/addData"><SlNote />Create Note</Link> 
      <Link className='btn btn-primary m-3' to="/uploadBlog"><SlNote />Create Blog</Link>
      <Link className='btn btn-primary m-3' to="/uploadQP"><SlNote />Upload Question Paper</Link>
      <Link className='btn btn-success m-3' to="/updateData"><BiEdit />Update Note</Link>
      <Link className='btn btn-success m-3' to="/uploadBook"><BiEdit />Upload Book</Link>
      <Link className='btn btn-danger m-3' to="/updateData"><AiFillDelete />Delete Note</Link>
      <Link className='btn btn-info m-3' to="/userData"><ImUsers />User Data</Link>
      <Link className='btn btn-danger m-3' to="/deleteQP"><AiFillDelete />Delete Question Paper</Link>
      <Link className='btn btn-danger m-3' to="/deleteBook"><AiFillDelete />Delete Book</Link>
      <Link className='btn btn-success m-3' to="/updateBlog"><BiEdit />Update Blog</Link>
    </div>
  )
}

export default Admin