import React from 'react'
import { FaBell, FaUser, FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    /** 
     * * page top navigation bar
     * *fixed position
     * ! Nav icons have no links or functionality
     * TODO: give funtionality to each nav icon
     * TODO: implement counter for notifications, search database and edit user profile
    */
    <div className='nav-wrapper'>
      <img className='nav-logo' 
        src={require("../assets/images/logoblue.png")}alt=''> 
      </img>
      <ul className='nav'>
        <li>
          <FaSearch  className='nav-icon' />
        </li>
        <li>
          <FaBell  className='nav-icon'/>
        </li>
        <li>
          <FaUser  className='nav-icon'/>
        </li>
      </ul>
    </div>
  )
}

export default Nav