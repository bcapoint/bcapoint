import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UpdateBlog = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [catogery, setCatogery] = useState('');

    const fetchData = () => {
        return (
            axios.get("https://api.bcapoints.in/api/blog").then((response) => setData(response.data))
        )
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')
        if (token) {
            fetchData();
        }
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const deleteData =  (id) =>{
        const yes = window.confirm("Do You Really Want to Delete?");
         yes && axios.delete(`https://api.bcapoints.in/api/blog/${id}`).then(()=> alert("deleted Successfully") )
   }
    return (
        <div className='container'>
            <select className='my-2  px-4 py-1 font-size-5' onChange={(e) => setCatogery(e.target.value)}>
                <option >Select Category:</option>
                <option value="bca related">BCA related</option>
                <option value="skill related">Skill related</option>
                <option value="exam related">Exam related </option>
                <option value="motivational">Motivational </option>
                <option value="self-growth">Self-growth </option>
                <option value="tech related">Tech Releted</option>
            </select>

            {catogery !== '' && data.map(item => item.catogery === catogery && <div key={item._id}><h4>{item.title}</h4><button className='btn btn-success mx-2 my-1' onClick={()=>navigate(`/updateBlogOne/${item._id}`)}>Update</button><button className='btn btn-danger mx-2 my-1' onClick={()=>{deleteData(item._id)}}>Delete</button></div> )}
            

        </div>
    )
}

export default UpdateBlog
   