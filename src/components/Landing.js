import React, { useState } from 'react'
import axios from 'axios';
// import { Navigate } from 'react-router-dom';

const Landing = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        axios.post('https://asset.rnd.emalify.com/api/v1/login', {email, password})
        .then((res) =>{
                  localStorage.setItem('token',res.data)
                  window.location.href="../"
                  // //navigate
                  // return <Navigate to ="./Admindash"/>
                // success
              }).catch((err) =>{
                  console.log(err);
                  
                //errr
              })
        }
  return (
    <div className='split'>
        <div class="left">
                <header className="App-header">
                    <img src={require("../assets/images/logo.jpeg")} className="App-logo" alt="logo" />    
                </header>
                <div className='intro'>
                    <div className='intro-text'>
                        <h2 className="App-h2">
                        ASSET MANAGEMENT PORTAL
                        </h2>
                        <p className='App-paragraph'>Online Asset Management system for better record keeping and workflow.</p>
                    </div>
                    <img src={require("../assets/images/High_five.png")} className="image-layout"/>
                </div>
        </div>
        
            <div class="centered">
<div className='right'>
        <div className="form-group">
                <h2 className="para-form">LOG IN TO THE ACCESS PORTAL</h2>
        <form onSubmit={submitHandler}>
          <div className="formEmail">
            <label for ="username"><h4>EMAIL ADDRESS</h4></label>
            <input type="email" placeholder="email address" required 
            onChange={e => setEmail(e.target.value)}
            />
           
          </div>
          <div className="formPass">
            <label for="password"><h4>PASSWORD</h4></label>
            <input type="password" placeholder="password" required 
            onChange={e => setPassword(e.target.value)}
            />
            
          </div>
          <button type="submit" class="btn btn-default"> LOGIN</button>
          
        </form>
          
      </div>
      
    </div>
            </div>
    </div>
  )
}

export default Landing