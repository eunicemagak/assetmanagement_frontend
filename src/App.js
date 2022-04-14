
import React from 'react';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import './assets/css/global.css'; 
import './assets/css/sidebar.css';
import './assets/css/admin.css';
import './assets/css/nav.css'
import './assets/css/login.css'
import './assets/css/landing.css'
//import './assets/css/userprofile.css'
import './assets/css/assetprofile.css'
import Admindash from './components/Admindash';
import Users from './components/Users';
import Assets from './components/Assets';
import Accessories from './components/Accessories';
import Accessoryprofile from './components/Accessoryprofile';
import Assetprofile from './components/Assetprofile';
import Userprofile from './components/Userprofile';
import Landing from './components/Landing';
import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Logout from './components/Logout';
import Suspend from './components/Suspend';
import Clearoff from './components/Clearoff';
import axios from 'axios';


const App = () => {
  
const token = localStorage.getItem('token');
axios.defaults.baseURL ='https://asset.rnd.emalify.com/api/v1';
  
    if(!token) {
      return <Landing setToken={'token'} />
    }else{
    axios.defaults.headers ={
      Authorization: token,
    }
  }
  

  return (
    <div className='wrapper'>
      <Router>
          <Nav />
          <Sidebar/>
      <div className='bg'>
        <Routes>
          <Route path='/' element={<Admindash/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/assets' element={<Assets/>} />
          <Route path='/accessories' element={<Accessories/>} />
          <Route path='/assetprofile' element={<Assetprofile/>} />
          <Route path='/userprofile' element={<Userprofile/>} />
          <Route path='/users/:userId' element={<Userprofile/>} />
          <Route path='/assets/:assetId' element={<Assetprofile/>} />
          <Route path='/accessories/:accessoryId' element={<Accessoryprofile/>} />
          <Route path='/logout' element={<Logout/>} />
        </Routes>
      </div>
      </Router>
    </div>
  )
}
  

export default App;

