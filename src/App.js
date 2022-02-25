import React from 'react';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import './assets/css/global.css'; 
import './assets/css/sidebar.css';
import './assets/css/admin.css';
import './assets/css/nav.css'
import './assets/css/login.css'
import './assets/css/landing.css'
import './assets/css/assetprofile.css'
import Admindash from './components/Admindash';
import Users from './components/Users';
import Assets from './components/Assets';
import Complaints from './components/Complaints';
import Assetprofile from './components/Assetprofile';
//import Landing from './components/Landing';


const App = () => {

  
  return (
    //<Route path ='/' element={<Landing/>} />
      <Router>
        <Routes>
          <Route path='/admindash' element={<Admindash/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/assets' element={<Assets/>} />
          <Route path='/complaints' element={<Complaints/>} />
          <Route path='/' element={<Assetprofile/>} />
        </Routes>
  
      </Router>
  

  )
}

export default App;

