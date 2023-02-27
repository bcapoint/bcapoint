import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Books.css';
import stand from './image/stand.png'
import Data from './Data';
import ShowMore from './ShowMore';
import { Link } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { AiFillCloseCircle } from 'react-icons/ai'



function Books() {

    var item = Data[Math.floor(Math.random() * Data.length)];
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([])

    const [link,setLink] = useState('0');
    const fetchData = () => {
        return (
            axios.get(`http://api.bcapoints.in/api/book`).then((response) => setData(response.data))
        )
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.bookType === cat);
        setFilter(updateList);
    }

    const download = async (name) => {
        setLink(`http://api.bcapoints.in/public/${name}`);
    }

    const handleClick = () => {
        filterProduct('Free Book')
        window.scrollTo({
            top: 530,
            behavior: "smooth"
        });
    }


    return (

        <div >
            {/* {console.log( )} */}
            {/* // home section starts    */}

            <section className="book-home container"  >
            {link !=='0' && <div className='iframe'><h1 onClick={()=>setLink('0')} className='closeBtn'><AiFillCloseCircle /></h1><iframe  src={link} title={"Question Paper by BcaPooint-Team"} ></iframe></div>}
                <div className="row ">

                    <div className="content col-md-6">
                        <h5>{item.line}</h5>
                        <p>{item.author}</p>
                        <Link onClick={handleClick} to="" className="btn btn-outline-light px-5">Free Book</Link>
                    </div>


                    <div className=' col-md-4 display-resp'>
                        <div className=' books-slider  book-slid-sow '>
                            {data.map(item => !(item.isDownloadable) && <a key={item._id} href={item.link}  className="swiper-slide"><img src={item.thumbnail} alt="" /></a>)}
                        </div>
                        <img src={stand} className="stand" alt="" />
                    </div>
                </div>
            </section>


            <main>
                <div className="container-fluid bg-trasparent my-4 p-3" >

                    <div className='filterBtn m-2'>
                        <button className='btn btn-outline-dark filBtn' onClick={() => setFilter(data)} >All Books</button>
                        <button className='btn btn-outline-dark filBtn' onClick={() => filterProduct('BCA')} >BCA Books</button>
                        <button className='btn btn-outline-dark filBtn ' onClick={() => filterProduct('Programing')} >Programming Books</button>
                        <button className='btn btn-outline-dark filBtn' onClick={() => filterProduct('Self Help')} >Self Help</button>
                        <button className='btn btn-outline-dark filBtn ' onClick={() => filterProduct('Ethical Hacking')} >Ethical Hacking</button>
                        <button className='btn btn-outline-dark filBtn ' onClick={() => filterProduct('Free Book')} >Free Book</button>
                    </div>

                    <div className="row row-cols-1 row-cols-xs-1 row-cols-sm-2 row-cols-lg-4 g-3">
                        {data.length === 0 && <div className='btn-load'><RotatingLines
                            height="40"
                            width="40"
                            radius="9"
                            color="red"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        /><p>Fetching Data,Please wait...</p></div>}
                       
                        {(filter.length === 0) && data.map(item =>
                            <div className=" col" key={item._id}>
                                <div className="product card h-100 shadow-sm"> 
                                {item.isDownloadable && <span class="new">Free</span>}<img src={item.thumbnail} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="clearfix ">
                                            <h5 className=" fw-bold">{item.title}</h5>
                                            <p className="card-title"> <ShowMore text={item.description} /> </p>
                                            <div className="text-center "> {item.isDownloadable ? <button className='btn btn-success ' onClick={() => download(`${item.title}`)}>Download</button> : <a href={item.link} className="btn btn-primary">Buy Now</a>} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                        {filter.map(item =>

                            <div className="col " key={item._id}>
                                    
                                   
                                <div className="card product h-100 shadow-sm"> {item.isDownloadable && <span class="new">Free</span>} <img src={item.thumbnail} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <div className="clearfix ">
                                            <h5 className=" fw-bold">{item.title}</h5>
                                            <p className="card-title"> <ShowMore text={item.description} /> </p>
                                            <div className="text-center "> {item.isDownloadable ? <button className='btn btn-success ' onClick={() => download(`${item.title}`)}>Download</button> : <a href={item.link} className="btn btn-primary">Buy Now</a>} </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                </div>
            </main>


        </div>
    )
}

export default Books
