import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpateBlogOne = () => {
  const { id } = useParams();
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [catogery, setcatogery] = useState(0);
  const [thum, setthum] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const fetchData = () => {
    return (
      axios.get(`https://api.bcapoints.in/api/blog/${id}`).then((response) => {
       setData(response.data);
       setContent(response.data.description)
      })
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
  }, []);

  const update = () => {
    axios.put(`https://api.bcapoints.in/api/blog/${data._id}`, {
      "title": title,
      "thum": thum,
      "description": content,
      "username": username,
      "catogery": catogery
    })
      .then(res => {
        toast.success("Data Successfully Updated 😎✌ Hurrhe!");
      }).catch(err => toast.error(err.response.data));
  }

  return (
    <div className='container' >
      <ToastContainer />
      {console.log(data)}
      <p>Title:{data.title}</p>
      <p>Author:{data.username}</p>
      <p>Thumbnail:{data.thum}</p>
      <p>Category:{data.catogery}</p>
      <div className="App">
      <center><h2 className='mb-3'>Update Blog</h2></center>
        <input className='my-2 px-4 py-1 font-size-5' type={'text'} placeholder='Title ..' value={title} onChange={(e) => setTitle(e.target.value)} /><br />
        <input className='my-2 px-4 py-1 font-size-5' type={'text'} placeholder='Author Name' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <input className='my-2 px-4 py-1 font-size-5' type={'text'} placeholder='Enter thumbnail URL' value={thum} onChange={(e) => setthum(e.target.value)} /><br />
        <select className='my-2  px-4 py-1 font-size-5' onChange={(e) => { setcatogery(e.target.value) }}>
            <option >Select Category:</option>
            <option value="bca related">BCA related</option>
            <option value="skill related">Skill related</option>
            <option value="exam related">Exam related </option>
            <option value="motivational">Motivational </option>
            <option value="self-growth">Self-growth </option>
            <option value="tech related">Tech Releted</option>
        </select>
        <JoditEditor
          ref={editor}
          value={content}
          onChange={newContent => { setContent(newContent) }}
        />
        <button className='btn btn-success my-3' onClick={update}>Update</button>
      </div>
    </div>
  )
}

export default UpateBlogOne