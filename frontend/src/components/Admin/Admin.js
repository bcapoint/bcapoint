import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { SlNote } from 'react-icons/sl'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import {ImUsers} from "react-icons/im"

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
      <Link className='btn btn-primary m-3' to="/uploadQP"><SlNote />Upload Question Paper</Link>
      <Link className='btn btn-success m-3' to="/updateData"><BiEdit />Update Note</Link>
      <Link className='btn btn-success m-3' to="/uploadBook"><BiEdit />Upload Book</Link>
      <Link className='btn btn-danger m-3' to="/updateData"><AiFillDelete />Delete Note</Link>
      <Link className='btn btn-info m-3' to="/userData"><ImUsers />User Data</Link>
    </div>
  )
}

export default Admin