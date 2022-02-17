import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImUsers, ImFilesEmpty } from "react-icons/im";
import { FiMessageCircle, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className='sidebar' id='fixed'>
      <div className='logo'>
          <img className='logo' 
            src={require("../assets/images/logowhite.png")}alt=''> 
          </img>
      </div>
      <ul className='navigation'>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/dashboard'>
          <img className='profile-img' 
            src={require("../assets/images/user.jpg")}alt=''> 
          </img>
          <div className='Name'>
            <p className='name-main'>JUMA MAJUMBA</p>
            <p className='title'>ADMINISTRATOR</p>
          </div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/users'>
          <ImUsers size='1.5vw' className='sidebar-icon'/>
          USERS
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/assets'>
          <ImFilesEmpty size='1.5vw' className='sidebar-icon'/>
          ASSETS
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/complaints'>
          <FiMessageCircle size='1.5vw' className='sidebar-icon'/>
          COMPLAINTS
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/logout'>
          <FiLogOut size='1.5vw' className='sidebar-icon'/>
          LOG OUT
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar