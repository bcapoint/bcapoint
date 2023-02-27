import { useEffect, useState } from 'react'
import axios from 'axios';
import './customer.css'
import { useNavigate } from 'react-router-dom';


const Customer = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate()
    const fetchData = () => {
        return (
            axios.get(`https://api.bcapoints.in/api/customer`).then((response) => setData(response.data))
        )
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')
        if (token) {
          fetchData();
        }
        if (!token) {
          navigate('/login');
        }
      }, []);


    return (
           <div className='container'>
             <div className='d-flex justify-content-between align-items-center'>
             <h5>Total - {data.length}</h5>
             <input type={'text'} onChange={(e)=> setSearch(e.target.value)} placeholder='search user' /> 
             </div>
              
             <table>
                <thead>
                    <tr>
                        <th scope="col">User-Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                {search === '' &&  <tbody>
                    {data.map(item => 
                            <tr key={item._id}>
                            <td data-label="User-Name">{item.username}</td>
                            <td data-label="E-Mail">{item.email}</td>
                            <td data-label="Message">{item.message}</td>
                        </tr>
                    )}

                </tbody>}
                
                {search !== '' && 
                <tbody>
                    {data.map(item => item.username.toUpperCase().includes(search.toUpperCase()) &&
                            <tr key={item._id}>
                            <td data-label="User-Name">{item.username}</td>
                            <td data-label="E-Mail">{item.email}</td>
                            <td data-label="Message">{item.message}</td>
                        </tr> 
                    )}

                </tbody>}
            </table>

           

           </div>
            
           
    )
}

export default Customer