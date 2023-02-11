import React from 'react'
import './AboutUs.css';
import Hamid from './Hamid.jpeg';
import Faizan from './faizan.jpg';



function AboutUs() {
  return (
    <div className='container'>

<div className="bg-light">
  <div className="container py-5">
    <div className="row h-100 align-items-center py-5">
      <div className="col-lg-6">
        <h1 className="display-4 fw-bold">WHO WE ARE</h1>
        <p className="lead text-muted mb-0">we are spot here , where design and devlope beautiful and 100% working website.</p>
        <p className="lead  mb-0">“We don't just sell websites, we create websites that SELL.”</p>
      </div>
      <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid"/></div>
    </div>
  </div>
</div>


<div className="bg-light ">
  <div className="container ">
        <h2 className="display-4 font-weight-light fw-bolder text-center">Our team</h2>
        <p className="font-italic text-muted text-center">Individually, we are one drop. Together, we are an ocean..</p>

    <div className="row text-center">
      <div className="col-xl-6 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Hamid} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Hamid Raza</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="https://www.facebook.com/people/Hamid-Raza/100025427798457/" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="https://github.com/Hamid092" className="social-link"><i className="fa fa-github"></i></a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com/hamid.__05/" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/hamid-raza-847997221/" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
          <p className='small mx-3'>I'm a Front end web devloper & a BCA student. I design and develop beautiful and interactive websites that are fully responsive across all the devices. I also love to design and devlope ecommerse websites, social websites, and many more.</p>

        </div>
      </div>
    

      <div className="col-xl-6 col-sm-6 mb-5">
        <div className="bg-white rounded shadow-sm py-5 px-4"><img src={Faizan} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
          <h5 className="mb-0">Faizan Ansari</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><a href="https://github.com/Fz-Ansari" className="social-link"><i className="fa fa-github"></i></a></li>
            <li className="list-inline-item"><a href="https://www.youtube.com/@LearnwithFz" className="social-link"><i className="fa fa-youtube"></i></a></li>
            <li className="list-inline-item"><a href="https://www.instagram.com/learn_with_fz/?igshid=ZDdkNTZiNTM%3D" className="social-link"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="https://www.linkedin.com/in/thefaizan" className="social-link"><i className="fa fa-linkedin"></i></a></li>
          </ul>
          <p className='small mx-3'>I'm a Website Developer & a BCA student & a youtuber  <a href="https://www.youtube.com/@LearnwithFz">Learn with Fz</a> - where I have around 4k subscribers.I usually use MERN Technology for creating a website.</p>

        </div>
      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default AboutUs