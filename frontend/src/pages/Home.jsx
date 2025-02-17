import React, { useState ,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {handleError, handleSuccess} from '../utils/utils'
function Home() {
    const navigate  = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('')
    useEffect(() => {
      setLoggedInUser(localStorage.getItem('loggedInUser')); 
    
    }, [])
    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('loggedInUser');
        localStorage.removeItem('token');
        handleSuccess('User logged out');
        setTimeout(()=>{
            navigate('/login');
        },1000)
  
    }
    const fetchProducts=async()=>{
        try {
            const url="http://localhost:8080/products"
            const headers={
                headers:{
                    'authorization':localStorage.getItem('token')
                }
            }
            const response= await fetch(url,headers);
            const result= await response.json();
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[])
  return (
    <div>
        <h1>Welcome {loggedInUser}</h1>
        <button onClick={handleLogout} >Logout</button>
        <div>
            {
            products && products?.map((item,index)=>(
                <ul key={index}>
                    <span>{item.name} : {item.price}</span>
                </ul>
            ))
            }
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Home