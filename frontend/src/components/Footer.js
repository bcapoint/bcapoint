import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  const handleClick = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }

  return (
    <div className='mt-5'>

      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/profile.php?id=100089712534082" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCQL2aB3Ya0KUumqx_IBMXpA" className="me-4 text-reset">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/bcapoints.in/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/bca-points-19098b264/" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>BCA Points
                </h6>
                <p>
                  This is an educational  website for BCA student , here you will find Notes | Study Material | Book | Blog.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>
                  <Link  onClick={handleClick} to="/" className="text-reset">Home</Link>
                </p>
                <p>
                  <Link onClick={handleClick} to="/about" className="text-reset">About</Link>
                </p>
                <p>
                  <Link onClick={handleClick} to="/services" className="text-reset">Services</Link>
                </p>
                <p>
                  <Link onClick={handleClick} to="/blog" className="text-reset">Blogs </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <Link onClick={handleClick} to="/subjct/It%20tools%20&%20Application" className="text-reset">Tutorials</Link>
                </p>
                <p>
                  <Link onClick={handleClick} to="/books" className="text-reset">Explore Book</Link>
                </p>
                <p>
                  <Link onClick={handleClick} to="/contact" className="text-reset">contact</Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fas fa-home me-3"></i> Gorakhpur, Uttar Pardsh, India</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  bcapoints@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4  footer" >
          © 2023 Copyright:
          <Link className="text-reset fw-bold" to="/">BCApoints.com</Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer
