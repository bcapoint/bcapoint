import { useState } from "react"
import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import {GiConfirmed} from 'react-icons/gi'

function ContactUs() {
    const [submit , setSubmit] = useState(true);
    const [UserData, SetUerData] = useState({
        name: "",
        email: "",
        message: "",
    })

    let name, value;
    const postUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        SetUerData({ ...UserData, [name]: value })
    }
    const submitData = async () => {
        const { name, email, message } = UserData;

        axios.post("http://api.bcapoints.in/api/customer", {
            "username": name,
            "email": email,
            "message": message
        })
            .then(res => {
                toast.success("Thanks for Your Intrest !");
                setSubmit(false);
            }).catch(err => toast.error("Something Gone Wrong!"));

    }

    const handleSubmit = () => {

        if (UserData.email && UserData.message && UserData.name) {
             if (!/\S+@\S+\.\S+/.test(UserData.email)) {
                toast.error("Email is Invalid!")
            }else{
                submitData();
            }
        }
        else {
            toast.error("All fields are Required!")
        }
    }
    return (
        <div className='contact px-3'>
            <div className="container">
                <ToastContainer />
                <section className="mb-4">

                    <h1 className="h1-responsive font-weight-bold text-center my-4 text-white">Contact us</h1>


                    <div className="row">

                        {submit && <div className="col-md-9 mb-md-0 mb-5 form-box">

                            <h1 className="text-center fs-2 mb-4-">Say hello! </h1>
                            <form id="contact-form" name="contact-form" method="POST">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="subject" className="">Your Name</label>
                                            <input type="text" id="name" name="name" className="form-control" value={UserData.name} onChange={postUserData} required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <label htmlFor="subject" className="">Your email</label>
                                            <input type="email" id="email" name="email" className="form-control" value={UserData.email} onChange={postUserData} required />

                                        </div>
                                    </div>
                                </div>

                                <div className="row resp-row">

                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <label htmlFor="message">Your message</label>
                                            <input type="text" id="message" name="message" rows="2" className="form-control md-textarea" value={UserData.message} onChange={postUserData}></input>

                                        </div>

                                    </div>
                                </div>


                            </form>

                            <div className="text-left text-md-left mt-3">
                                <button className="btn btn-primary px-4" onClick={handleSubmit}><i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
                            </div>
                        </div>}
                        { !submit && <div className="col-md-9 mb-md-0 mb-5 form-box">
                         <h1 className="text-center thankHeading">Thank You</h1>
                         <h1 className="text-center text-success confirmIcon" ><GiConfirmed /></h1>
                         <p className="thankPara text-center">We have received your message and will get back to you soon.</p>
                        </div>}


                        <div className="col-md-3 text-center contact-loc">
                            <p className="text-center w-responsive mx-auto mb-5 text-white ">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                                a matter of hours to help you.</p>
                            <ul className="list-unstyled mb-0 primary ">

                                <li><i className="fas fa-map-marker-alt fa-2x "></i>
                                    <p> Gorakhpur , Uttar Pardsh, India</p>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+ 91 639-369-6613</p>
                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>bcapoint@gmail.com</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>

            </div>

        </div>
    )
}

export default ContactUs
