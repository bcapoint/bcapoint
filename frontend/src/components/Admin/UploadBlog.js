import React, { useState, useRef, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UploadBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [catogery, setcatogery] = useState(0);
  const [thum, setthum] = useState('');
  const navigate = useNavigate()

  const upload = () => {
    axios.post("https://api.bcapoints.in/api/blog", {
      "title": title,
      "thum": thum,
      "description": content,
      "username": username,
      "catogery": catogery
    })
      .then(res => {
        toast.success("New Note Created 😎 Hurrehh! ")
      }).catch(err => toast.error('Bhai pahle kuch likh to le 😒'));
  }



  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);


  return (
    <>
      <div className="App container">
        <ToastContainer />
        <center><h2 className='mb-3'>Create A new Blog</h2></center>
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
        <button className='btn btn-primary my-4 px-4' onClick={upload}>Create</button>
      </div>
    </>
  )
}

export default UploadBlog