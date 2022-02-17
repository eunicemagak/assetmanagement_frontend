import React from 'react'
import { FaBell, FaUser, FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    
    <div className='nav-wrapper' id='fixed'>
    <ul className='nav'>
      <li>
        <FaSearch size='2rem' />
      </li>
      <li>
          <FaBell size='2rem'/>
      </li>
      <li>
        <FaUser size='2rem'/>
      </li>
    </ul>
    </div>
  )
}

export default Nav