import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const DeleteBook = () => {

    const [book, setBook] = useState('0');
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const fetchData = () => {
        return (
            axios.get("https://api.bcapoints.in/api/book").then((response) => setData(response.data))
        )
    }

    const deleteData = (id) => {
        const yes = window.confirm("Do You Really Want to Delete?");
        yes && axios.delete(`https://api.bcapoints.in/api/book/${id}`).then(() => alert("deleted Successfully"))
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

    return (
        <div className='container'>
            <div className='App'>
            <select onChange={(e) => { setBook(e.target.value) }}>
            <option value={'0'}>Select Book</option>
            <option value={'BCA'}>BCA</option>
            <option value={'Programing'}>Programing</option>
            <option value={'Self Help'}>Self Help</option>
            <option value={'Ethical Hacking'}>Ethical Hacking</option>
            <option value={'Free Book'}>Free Book</option>
        </select>
        { data.map(item => item.bookType === book && <div key={item._id}>
            <br />
            <h6>{item.title}</h6>
            <button className='btn btn-danger px-5' onClick={() => deleteData(item._id)}>Delete</button>
        </div>)}
            </div>

        </div>


    )
}


export default DeleteBook