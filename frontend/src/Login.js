import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import Validation from './LoginValidation';


function Login() {
    const [values,setValues]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate();
    const [errors, setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event) =>{
        event.preventDefault();
        setErrors(Validation(values));
        if( errors.email==="" && errors.password===""){
            axios.post('http://localhost:8081/login',values)
            .then(res=>{
             if(res.data==="success"){
                navigate('/Home');
             }else{
                alert("no record existed")
             }
            })
            .catch(err=>console.log(err));
          }

    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-in</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Email' name='email' 
                
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.email &&<span className='text-danger'>{errors.email }</span>}


            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Password' name='password'
                onChange={handleInput}  className='form-control rounded-0'/>
                {errors.password &&<span className='text-danger'>{errors.password }</span>}

            </div>
            <button type='submit' className='btn btn-success w-100'><strong>Log in</strong></button>
            <p>You agree to our terms</p>
            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0  text-decoration-none'>Create Account</Link>
        </form>
    </div>
    </div>
  )
}

export default Login