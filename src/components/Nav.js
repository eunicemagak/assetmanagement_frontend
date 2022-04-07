import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import React from 'react';
import Assets from "./Assets";


const Nav = ({input, setInput}) => {
  
  return (
    
    <div className='nav-wrapper'>
    <div className='nav-wrapper' id='fixed'>
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
    </div>
  )
}

export default Nav
