import React from 'react'
import { FaBell, FaUser, FaSearch } from "react-icons/fa";

const Nav = () => {
  return (
    
    <div className='nav-wrapper' id='fixed'>
    <ul className='nav'>
      <li>
        <FaSearch size='1.5vw' />
      </li>
      <li>
          <FaBell size='1.5vw'/>
      </li>
      <li>
        <FaUser size='1.5vw'/>
      </li>
    </ul>
    </div>
  )
}

export default Nav