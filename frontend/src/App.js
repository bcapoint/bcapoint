import './App.css';
import React from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Blog from './components/blog/Blog'
import ContactUs from './components/ContactUs'
import NoPage from './components/404/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subject from './Notes/Subject';
import Books from './books-store/Books';
import Admin from './components/Admin/Admin';
import AdminData from './components/Admin/AddData'
import Login from './components/Login/Login'
import Search from './components/Search/Search';
import UpdateData from './components/Admin/UpdateData';
import UpdateOne from './components/Admin/UpateOne';
import Paper from './components/Paper/Paper';
import UploadQP from './components/Admin/UploadQP'
import AboutUs from './components/About/AboutUs';
import UploadBook from './components/Admin/UploadBook';
import Services from './components/Services';
import Customer from './components/Customer/customer'
import DeleteQP from './components/Admin/DeleteQP';
import DeleteBook from './components/Admin/DeleteBook';


function App() {
  

  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="books" element={<Books />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="subjct/:id" element={<Subject />} />
          <Route path="admin" element={<Admin />} />
          <Route path='addData' element={<AdminData />} />
          <Route path='updateData' element={<UpdateData />} />
          <Route path='updateData/update/:title' element={<UpdateOne />} />
          <Route path="login" element={<Login />} />
          <Route path="search/:title" element={<Search />} />
          <Route path="*" element={<NoPage />} />
          <Route path='paper' element={<Paper />} />
          <Route path='uploadQP' element={<UploadQP />} />
          <Route path='uploadBook' element={<UploadBook />} />
          <Route path='services' element={<Services />} />
          <Route path='userData' element={<Customer />} />
          <Route path='deleteQP' element={<DeleteQP />} />
          <Route path='deleteBook' element={<DeleteBook />} />


        </Routes>
        <Footer />

      </BrowserRouter>





    </div>
  );
}

export default App;
