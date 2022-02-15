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
            src={require("../assets/user.jpg")}> 
          </img>
          <div className='Name'>
            <h4>JUMA MAJUMBA</h4>
            <p>system admin</p>
          </div>
        </li>
        <li>
          <img className='sidebar-img' src={require("../assets/userwhite.png")} ></img>
          USERS</li>
        <li>
          <img className='sidebar-img' src={require("../assets/filewhite.png")} ></img>
          ASSETS</li>
        <li>
          <img className='sidebar-img' src={require("../assets/messagewhite.png")} ></img>
          COMPLAINTS</li>
        <li>
          <img className='sidebar-img' src={require("../assets/logoutwhite.png")} ></img>
          LOG OUT</li>
      </ul>
    </div>
  )
}

export default Sidebar