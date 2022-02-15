import React from 'react'
import Sidebar from './Sidebar'

const admindash = () => {
  return (
    <div className='admindash'>
      <Sidebar />
      <div className='board'>
        <ul className='nav'>
          <li>
            <img className='nav-img' src={require("../assets/search.png")}></img>
          </li>
          <li>
            <img className='nav-img' src={require("../assets/bell.png")}></img>
          </li>
          <li>
            <img className='nav-img' src={require("../assets/user.png")}></img>
          </li>
        </ul>
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
            <img className='widget-img' src={require("../assets/laptop.png")}></img>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>24</h1>
              <p>assigned assets</p>
            </div>
            <img className='widget-img' src={require("../assets/assigned.png")}></img>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>12</h1>
              <p>unassigned assets</p>
            </div>
            <img className='widget-img' src={require("../assets/unassigned.png")}></img>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>4</h1>
              <p>new complaints</p>
            </div>
            <img className='widget-img' src={require("../assets/complaints.png")}></img>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default admindash
