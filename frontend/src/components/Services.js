import subNotes from './Sub-notes.png'
import QuesPaper from './ques.webp'
import blog from './bog.jpg'
import { useNavigate } from 'react-router-dom';

function Services() {
  
  const navigate = useNavigate()

  return (
    <div id='services' className='px-5'>
      <h1 className=' h1-responsive text-center heading-service ' >Our Services</h1>
      <hr />
      <div className='row mt-5'>

        <div className="col-md-3 Service-item">

          <div className="card style" onClick={()=>navigate('/subjct/It%20tools%20&%20Application')} >
            <img src={subNotes} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Subject Notes</h5>
              <p className="card-text">We Provide All subject note of bca. That is very benifitial for bca student</p>
            </div>
          </div>

        </div>
        <div className="col-md-3 Service-item">

          <div className="card style" onClick={()=>navigate('/paper')} >
            <img src={QuesPaper} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Quetion paper</h5>
              <p className="card-text">We provide All Subject Question paper with answer. That is very benifitial for bca student.</p>
            </div>
          </div>

        </div>
        <div className="col-md-3 Service-item">
          <div className="card style" onClick={()=>navigate('/blog')}>
            <img src={blog} className="card-img-top card-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Tutorials & Blog</h5>
              <p className="card-text">We provide blog about bca that is very helpful for additional knowladge.</p>
            </div>
          </div>
          <h4> </h4>

        </div>

      </div>
    </div>
  )
}

export default Services
