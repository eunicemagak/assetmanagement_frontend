import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";


const Login= ({setToken}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const response = await axios('https://asset.rnd.emalify.com/api/v1/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            data: {
                email,
                password
            }
          });
        const content = await response.json();

        setNavigate(true);
        setEmail(content.email)
        setPassword(content.password)
        setToken(content.token);
    }

    if (navigate) {
        return <Navigate to="/admindash"/>;
    }

    return (
<div className='right'>
        <div className="form-group">
                <h3 className="para-form">LOG IN TO THE ACCESS PORTAL</h3>
        <form onSubmit={submit}>
          <div className="formEmail">
            <label for ="username">Email Adress </label>
            <input type="email" placeholder="enter email" required 
            onChange={e => setEmail(e.target.value)}
            />
           
          </div>
          <div className="formPass">
            <label for="password">Password </label>
            <input type="password" placeholder="Password" required 
            onChange={e => setPassword(e.target.value)}
            />
            
          </div>
          <button type="submit" class="btn btn-default"> LOG IN</button>
          
        </form>
        <a href="#" class="forgot-link"> Forgot password?</a>
          
      </div>
      
    </div>
    )};
export default Login;