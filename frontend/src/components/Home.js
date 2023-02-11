import React from 'react'
import img from './main.png'
import Service from './Services'
import ContactUs from './ContactUs'
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()
    return (
        <>
        <div className='padding'>
            <div className="home d-flex">

                <div className="text">
                    <h1 className='heading'>
                        Ready!<br />
                        For <br />
                        Exam.
                    </h1>
                    <h3 className='sub-heading' >
                        prepare your self with us <br />
                        <span>for free</span>

                    </h3>
                    <div className="d-flex btns">
                        <button className="btn btn-primary button-1" onClick={()=>navigate('/books')}>Explore Books</button>
                        <button className="btn btn-outline-light button-2" onClick={()=>navigate('/subjct/It%20tools%20&%20Application')} >Get Started</button>
                    </div>
                    </div>

                    <img src={img} alt="Home" className='home-img' />

                </div>
            </div>
            <Service/>
            <ContactUs/>

            </>
    )
}

export default Home

