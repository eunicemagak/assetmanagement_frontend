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
    <div className='nav-wrapper' id='fixed'>
    <ul className='nav'>
      <li>
        <FaSearch size='calc(1vw + .5vw)' />
      </li>
      <li>
          <FaBell size='calc(1vw + .5vw)'/>
      </li>
      <li>
        <FaUser size='calc(1vw + .5vw)'/>
      </li>
    </ul>
    </div>
  )
}

export default Nav