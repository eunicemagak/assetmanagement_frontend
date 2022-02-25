import React, { useState, useEffect } from 'react'
import Login from './Login'

const Landing = () => {

    const [token, setToken] = useState();

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/v1/login', {
                    headers: {'Content-Type': 'application/json'},
                
                });

                const content = await response.json();

                setToken(content.token);
            }
        )();
    });
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
                
                <Login setToken={setToken}/>
            </div>
    </div>
  )
}

export default Landing