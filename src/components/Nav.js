import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import React, { useState,useEffect } from 'react';
import SearchInput from './SearchInput';
import axios from 'axios'
import DynamicSearch from "./SearchPage";


const Nav = () => {
  
  return (
  
    <div className='nav-wrapper'>
    <div className='nav-wrapper' id='fixed'>
      <img className='nav-logo' 
        src={require("../assets/images/logoblue.png")}alt=''> 
      </img>
      <ul className='nav'>
        <li>
            <DynamicSearch/>
            
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
