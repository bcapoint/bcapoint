import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Paper.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import Img from './paper.png'
import { RotatingLines } from 'react-loader-spinner'

const Paper = () => {

    const [sem, setSem] = useState(0);
    const [sub, setSub] = useState('0');
    const [data, setData] = useState([]);
    const [link,setLink] = useState('0');
    const fetchData = () => {
        return (
            axios.get(`http://api.bcapoints.in/upload`).then((response) => setData(response.data))
        )
    }

    useEffect(() => {
        fetchData();
    }, [])

    const download = async (name) => {
        setLink(`http://api.bcapoints.in/public/${name}`);
    }

    return (
        <div className='container QCon'>
            <div className='App'>
                <section className="paper-home container"  >

                    <div className="row ">

                        <div className="content col-md-6">
                            <h4>Previous Year Quetions Paper</h4>
                            <p>We Provide Previous year Question paper, that is very favorable for BCA student   </p>
                        </div>

                        <div className=' col-md-4 display-resp'>
                            <img className='paper-img' src={Img} alt='banner-img' />
                        </div>
                    </div>
                </section>
                <br />
                <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSem(e.target.value) }}>
                    <option value="0">Select Semester:</option>
                    <option value="1 semester">1 Semester</option>
                    <option value="2 semester">2 Semester </option>
                    <option value="3 semester">3 Semester </option>
                    <option value="4 semester">4 Semester </option>
                    <option value="5 semester">5 Semester </option>
                    <option value="6 semester">6 Semester </option>
                </select>
                {
                    sem === "1 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="It tools & Application">It tools & Application</option>
                        <option value="Functional English">Functional English</option>
                        <option value="Introduction to C Language">Introduction to C Language</option>
                        <option value="Principle Of mathematic">Principle Of mathematic</option>
                    </select>}
                {
                    sem === "2 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Descrite mathematics">Descrite mathematics</option>
                        <option value="Accounting & Financial management">Accounting & Financial management</option>
                        <option value="Digital Circuit & Logic Design">Digital Circuit & Logic Design</option>
                        <option value="Introduction to Object Oriented Programing & C++">Introduction to Object Oriented Programing & C++</option>
                    </select>}
                {
                    sem === "3 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Operating System">Operating System</option>
                        <option value="Computer Oriented Mathematic">Computer Oriented Mathematic</option>
                        <option value="Data Structure">Data Structure</option>
                        <option value="Computer Organization & Architecture">Computer Organization & Architecture</option>
                    </select>}
                {
                    sem === "4 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Introduction to DBMS">Introduction to DBMS</option>
                        <option value="Operation Research">Operation Research</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Computer Graphics">Computer Graphics</option>
                    </select>}
                {
                    sem === "5 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Internet & JAVA Programing">Internet & JAVA Programing</option>
                        <option value="ORACLE & PL/SQL">ORACLE & PL/SQL</option>
                        <option value="Software Project Management">Software Project Management</option>
                        <option value="Computer Networks">Computer Networks</option>
                    </select>}
                {
                    sem === "6 semester" &&
                    <select className='my-2 px-4 py-1 font-size-5' onChange={(e) => { setSub(e.target.value) }}>
                        <option value="0">Select Subject:</option>
                        <option value="Advance Network & Network Security">Advance Network & Network Security</option>
                        <option value="Web Development Tools & Techniques">Web Development Tools & Techniques</option>
                    </select>}
            </div>
            {sub !== '0' && <div className="three">
                <h1>{sub}</h1>
            </div>}
            {sub === '0' && <div className="three">
                <h1>Recent Question Paper</h1>
            </div>}
            <div className='PaperContainer'>
                {data.length === 0 && <div className='btn-load'><RotatingLines
                    height="40"
                    width="40"
                    radius="9"
                    color="red"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                /><p>Fetching Data,Please wait...</p></div>}
                {link !=='0' && <div className='iframe'><h1 onClick={()=>setLink('0')} className='closeBtn'><AiFillCloseCircle /></h1><iframe  src={link} title={"Question Paper by BcaPooint-Team"} ></iframe></div>}

                {sub !== '0' && data.map(item => item.sub === sub && <div className='container QuestionC' key={item._id}> <h3 onClick={() => download(`${item.name}`)}>{item.name}</h3></div>)}
                {sub === '0' && data.map(item => <div className='container QuestionC' key={item._id}> <h3 onClick={() => download(`${item.name}`)}>{item.name}</h3></div>)}
                
            </div>


        </div>
    )
}

export default Paper