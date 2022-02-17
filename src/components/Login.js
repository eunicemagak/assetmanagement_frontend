import React from 'react';



const Login= () => {
    return (
<div className='right'>
        <div className="form-group">
                <h3 className="para-form">LOG IN TO THE ACCESS PORTAL</h3>
        <form>
          <div className="formEmail">
            <label for ="username">Email Adress </label>
            <input type="email" placeholder="enter email" required />
           
          </div>
          <div className="formPass">
            <label for="password">Password </label>
            <input type="password" placeholder="Password" required />
            
          </div>
          <button type="submit" class="btn btn-default"> LOG IN</button>
          
        </form>
        <a href="#" class="forgot-link"> Forgot password?</a>
          
      </div>
      
    </div>
    )};
export default Login;