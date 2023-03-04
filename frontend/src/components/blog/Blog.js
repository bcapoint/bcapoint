import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Blog.css'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom';
function Blog() {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [recent, setRecent] = useState([]);
  const [category, setCategory] = useState('');
  const [ifFilter, setIfFilter] = useState(false);

  const fetchData = () => {
    return (
      axios.get("https://api.bcapoints.in/api/blog").then((response) => setData(response.data))

    )
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    fetchData();
    axios.get("https://api.bcapoints.in/api/blog/recent").then((response) => setRecent(response.data));
  }, [])

  const filterProduct = (cat) => {
    if (cat !== 'recent') {
      setIfFilter(true);
      setCategory(cat);
      handleClick();
      const updateList = data.filter((x) => x.catogery === cat);
      setFilter(updateList);
    }else{
      setIfFilter(false);
    }
  }
  const handleClick = () => {
    window.scrollTo({
      top: 86,
      behavior: "smooth"
    });
  }
  return (
    <div id='blog'>
      <div className="recentTab container-fluid px-5">
        <div className="recent">
          <div className='blogHeading'>
            <i className="fa-sharp fa-solid fa-blog"></i><h4>Blog</h4>
          </div>
          <select className='  px-4 py-1 font-size-5  filter' onChange={(e) => { filterProduct(e.target.value) }}>
            <option value='0' >All Blogs</option>
            <option value="recent">Recent</option>
            <option value="bca related">BCA related</option>
            <option value="skill related">Skill related</option>
            <option value="exam related">Exam related </option>
            <option value="motivational">Motivational </option>
            <option value="self-growth">Self-growth </option>
            <option value="tech related">Tech Releted</option>
          </select>
        </div>
        {data.length === 0 && <div className='btn-load'> <br/><br/><RotatingLines
          height="40"
          width="40"
          radius="9"
          color="red"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        /><p>Fetching Data,Please wait...</p></div>}
        <div className="recentBlogContainer mt-5">
          {!ifFilter && <><h3 className='text-center text-capitalize' >Recent Blog</h3>

            <div className="container mx-2 mt-5">

              <div className='row mx-3  align-items-start justify-content-center'>
                {
                  recent.map(item =>
                    <div className="col-6 col-md-4 card mx-3 my-3 " style={{ width: "18rem" }} key={item._id}>
                      <img src={item.thum} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h3>{item.title}</h3>
                        <Link to={`/FullBlog/${item._id}`} className='btn btn-outline-primary'>Read More</Link>
                      </div>
                    </div>
                  )
                }

              </div>
            </div>
            <hr />
          </>}
          {category === '' || category === '0' ? <h3 className='text-center text-capitalize'>All Blog</h3> : <h3 className='text-center text-capitalize'>{category}</h3>}

          <div className="container mx-2 mt-3">
            <div className='row align-items-start justify-content-center mx-3'>
              {
                (filter.length === 0) && data.map(item => {
                  return (

                    <div className="col-4 card mx-3 my-3" style={{ width: "18rem" }} key={item._id}>
                      <img src={item.thum} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h3>{item.title}</h3>
                        <Link to={`/FullBlog/${item._id}`} className='btn btn-outline-primary'>Read More</Link>
                      </div>
                    </div>

                  )
                })
              }

              {
                filter.map(item => {
                  return (

                    <div className="col-4 card mx-3 my-3" style={{ width: "18rem" }} key={item._id}>
                      <img src={item.thum} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h3>{item.title}</h3>
                        <Link to={`/FullBlog/${item._id}`} className='btn btn-outline-primary'>Read More</Link>
                      </div>
                    </div>

                  )
                })
              }

            </div>
          </div>


        </div>
      </div>
    </div>

  );
}

export default Blog
