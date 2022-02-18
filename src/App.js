import React from 'react';
import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
import './assets/css/global.css'; 
import './assets/css/sidebar.css';
import './assets/css/admin.css';
import './assets/css/nav.css'
import Admindash from './components/Admindash';
import Users from './components/Users';
import Assets from './components/Assets';
import Complaints from './components/Complaints';
import Sidebar from './components/Sidebar';
import Nav from './components/Nav';
import Landing from './components/Landing'

const App = () => {
  return (
    <div className='wrapper'>
      <Router>
          <Nav />
          <Sidebar/>
      <div className='bg'>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/dashboard' element={<Admindash/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/assets' element={<Assets/>} />
          <Route path='/complaints' element={<Complaints/>} />
        </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App;

