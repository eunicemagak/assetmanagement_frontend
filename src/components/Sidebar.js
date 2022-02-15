import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>
        roamtech
      </div>
      <ul className='navigation'>
        <li className='active'>
          <img className='profile-img' 
            src={require("../assets/images/user.jpg")}alt=''> 
          </img>
          <div className='Name'>
            <h4>JUMA MAJUMBA</h4>
            <p className='title'>ADMINISTRATOR</p>
          </div>
        </li>
        <li>
          <img className='sidebar-img' src={require("../assets/images/userwhite.png")}alt='' ></img>
          USERS
        </li>
        <li>
          <img className='sidebar-img' src={require("../assets/images/filewhite.png")}alt='' ></img>
          ASSETS
        </li>
        <li>
          <img className='sidebar-img' src={require("../assets/images/messagewhite.png")}alt='' ></img>
          COMPLAINTS
          </li>
        <li>
          <img className='sidebar-img' src={require("../assets/images/logoutwhite.png")}alt='' ></img>
          LOG OUT
          </li>
      </ul>
    </div>
  )
}

export default Sidebar