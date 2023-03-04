import React, { useState } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const UploadBook = () => {

    const [title,setTitle] = useState('');
    const [des,setDes] = useState('');
    const [url,setUrl] = useState('');
    const [isDown,setIsDown] = useState(0)
    const [book,setBook] = useState('');
    const [thum,setThum] = useState('');

    


    const upload = () => {
       

        
        axios.post("https://api.bcapoints.in/api/book", {
          "title":title,
          "thumbnail":thum,
          "description":des,
          "link":url,
          "isDownloadable":isDown,
          "bookType":book
        })
          .then(res => {
            toast.success("New Note Created 😎 Hurrehh! ")
          }).catch(err => console.log(err));
      }


  return (
    <div className='container'>
        <br/><br/><br/>
        <input onChange={(e)=>setTitle(e.target.value)} type={'url'}  placeholder='Title'/><br/><br/>
        <input onChange={(e)=>setThum(e.target.value)} type={'url'}  placeholder='URL... for thumbnail'/><br/><br/>
        <textarea onChange={(e)=>setDes(e.target.value)} placeholder='description' rows={'5'} cols={'60'} /><br/><br/>
        <input onChange={(e)=>setUrl(e.target.value)} type={'url'}  placeholder='URL... for affiliate or free book'/><br/><br/>
        <select onChange={(e) => { setIsDown(e.target.value) }}>
            <option value={0}>isDownloadable</option>
            <option value={1}>Yes</option>
            <option value={0}>No</option>
        </select><br/><br/>
        <select onChange={(e) => { setBook(e.target.value) }}>
            <option value={'0'}>Select Book</option>
            <option value={'BCA'}>BCA</option>
            <option value={'Programing'}>Programing</option>
            <option value={'Self Help'}>Self Help</option>
            <option value={'Ethical Hacking'}>Ethical Hacking</option>
            <option value={'Free Book'}>Free Book</option>
        </select>
        <button onClick={upload}>Upload Book</button>
   <ToastContainer />
    </div>
  )
}

export default UploadBook