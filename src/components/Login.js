import React from 'react';



const Login= () => {
    return (
<div className='right'>
        <div className="form-group">
                <p className="para-form">LOG IN TO THE ACCESS PORTAL</p>
        <form>
          <div className="input-container">
            <label for ="username">Email Adress </label>
            <input type="text" name="uname" required />
           
          </div>
          <div className="input-container">
            <label for="password">Password </label>
            <input type="password" name="pass" required />
            
          </div>
          <button type="submit" class="btn btn-default"> login</button>
            <span class="psw"> <a href="#"> Forgot password?</a></span>
          
        </form>
      
      </div>
    </div>
    )};
export default Login;