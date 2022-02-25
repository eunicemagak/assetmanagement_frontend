import React from 'react'
import Sidebar from './Sidebar';
import Nav from './Nav';

const admindash = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className='main'>
        <div className='welcome'>
          <h2>WELCOME JUMA</h2>
          <p>Use this asset management portal to manage, assign and record all company assets for better convinience</p>
        </div>
        <div className='widget'>
          <div className='data'>
            <h1>36</h1>
            <p>total assets</p>
          </div>
          <img className='widget-img' src={require("../assets/images/laptop.png")} alt=''></img>
        </div>
        <div className='widget'>
          <div className='data'>
            <h1>24</h1>
            <p>assigned assets</p>
          </div>
          <img className='widget-img' src={require("../assets/images/assigned.png")} alt=''></img>
        </div>
        <div className='widget'>
          <div className='data'>
            <h1>12</h1>
            <p>unassigned assets</p>
          </div>
          <img className='widget-img' src={require("../assets/images/unassigned.png")} alt=''></img>
        </div>
        <div className='widget'>
          <div className='data'>
            <h1>4</h1>
            <p>new complaints</p>
          </div>
          <img className='widget-img' src={require("../assets/images/complaints.png")} alt=''></img>
        </div>

      </div>
    </div>
  );
}

export default admindash
