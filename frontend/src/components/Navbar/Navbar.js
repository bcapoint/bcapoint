import logo from './logo.jpeg';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { RiAdminFill } from "react-icons/ri"
import './Navbar.css'


function Navbar() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [stog, setStog] = useState(false)
    const navigate = useNavigate();

    const fetchData = () => {
      return (
        axios.get("http://api.bcapoints.in/api/posts").then((response) => setData(response.data))
      )
    }
    useEffect(() => {
      fetchData();
    }, []);
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);


    return (
      <div className='my-2' >
        <nav className="navbar navbar-expand-lg navbar-light bg">
          <div className="container">
          <Link className="navbar-brand logo" to="/"><img className='logo' src={logo} alt=""/></Link>

            
         

        <ul className={open ? "nav-links show-nav navbar-nav me-auto mb-2 mb-lg-0  ul" : "nav-links"} >   
   
                  <li className="nav-item li">
                  <Link className="nav-link links active" aria-current="page" to="/" onClick={handleClose}>Home</Link>
                </li>

                <li className="nav-item dropdown li">
                  <Link className="nav-link dropdown-toggle drop-link links" to="/subjct" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Subject
                  </Link>
                  <ul className="dropdown-menu drop-menu " aria-labelledby="navbarDropdown">
                    <li className="nav-item dropdown li">
                      <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        First Semester </Link>
                      <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown" onClick={handleClose}>
                        <li><Link className="dropdown-item links" to="/subjct/It tools & Application" >IT Tools & Application</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Functional English">Functional English</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Introduction to C Language">Introduction to C language</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Principle Of mathematic">Principles of mathmetics</Link></li>
                      </ul>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li className="nav-item dropdown li">
                      <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Second Semester </Link>
                      <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown" onClick={handleClose}>
                        <li><Link className="dropdown-item links" to="/subjct/Descrite mathematics">Discrete Mathematics</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Accounting & Financial management">Accounting & F. Management</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Digital Circuit & Logic Design">Digital Circuit & Logic Design</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Introduction to Object Oriented Programing & C++">Interoduction To Opps & C++</Link></li>
                      </ul>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li className="nav-item dropdown li">
                      <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Third Semester </Link>
                      <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown" onClick={handleClose}>
                        <li><Link className="dropdown-item links" to="/subjct/Operating System">Operating System</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Computer Oriented Mathematic">Computer Oriented Mathematic</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Data Structure">Data Structure</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Computer Organization & Architecture">Computer Organization & Architecture</Link></li>
                      </ul>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li className="nav-item dropdown li">
                      <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fourth Semester </Link>
                      <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown" onClick={handleClose}>
                        <li><Link className="dropdown-item links" to="/subjct/Introduction to DBMS">Introduction to DBMS</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Operation Research">Operation Research</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Software Engineering">Software Engineering</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Computer Graphics">Computer Graphics</Link></li>
                      </ul>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li className="nav-item dropdown li">
                      <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Fifth Semester </Link>
                      <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown" onClick={handleClose}>
                        <li><Link className="dropdown-item links" to="/subjct/Internet & JAVA Programing">Internet & JAVA Programing</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/ORACLE & PL-SQL">ORACLE & PL/SQL</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Software Project Management">Software Project Management</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Computer Networks">Computer Networks</Link></li>
                      </ul>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li className="nav-item dropdown li">
                      <Link className="nav-link dropdown-toggle drop-link links" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Six Semester </Link>
                      <ul className="dropdown-menu drop-menu-2 " aria-labelledby="navbarDropdown" onClick={handleClose}>
                        <li><Link className="dropdown-item links" to="/subjct/Advance Network & Network Security">Advance Network & Network Security</Link></li>
                        <li><Link className="dropdown-item links" to="/subjct/Web Development Tools & Techniques">Web Development Tools & Techniques</Link></li>
                      </ul>
                    </li>

                  </ul>
                </li>

             
                <li className="nav-item li">
                  <Link className="nav-link links" to="/paper" onClick={handleClose}>QuestionsPaper</Link>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/blog" onClick={handleClose}>Blog</Link>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/books" onClick={handleClose}>Books</Link>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/about" onClick={handleClose}>About</Link>
                </li>
                <li className="nav-item li">
                  <Link className="nav-link links" to="/contact" onClick={handleClose}>Contact</Link>
                </li>
              </ul>
              
              <form className="d-flex  search-bar">
                <input onChange={(e) => setSearch(e.target.value)} onClick={() => { setStog(!stog) }} value={search} className="form-control" type="search" placeholder="Search" aria-label="Search" />
                {/* <button className="btn btn-primary button" onClick={()=>navigate('/admin')}><RiAdminFill  /></button> */}
                <div className="menu-icon" onClick={() => setOpen(!open)}>
          <i className={open ? "fas fa-times" : "fas fa-bars"} ></i>
        </div>

              </form>
            </div>
        </nav>
        {stog && <div className='searchArea container'>
          {search !== '' && data.map(item => <div key={item._id}>{item.title.toUpperCase().includes(search.toUpperCase()) && <Link className='searchFont' onClick={() => { setStog(!stog) }} to={`/search/${item.title}`}>{item.title}</Link>}</div>)}<br />
          {search ==='' && <span>Enter at least one later</span>}
        </div>}
      </div>
    )
  }

export default Navbar









