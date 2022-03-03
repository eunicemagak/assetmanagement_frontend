import React from 'react'
import { NavLink } from 'react-router-dom'
import { ImUsers, ImFilesEmpty } from "react-icons/im";
import { FiMessageCircle, FiLogOut } from "react-icons/fi";
import {GoThreeBars} from "react-icons/go";
import {ImCross} from "react-icons/im";
import '../assets/css/sidebar.css'

const Sidebar = () => {
  return (
    <div>
      <GoThreeBars className='nav-inactive nav-icon'/>
    <div className='sidebar' id='fixed'>
      <div className='logo'>
        <ImCross className='nav-active nav-icon'/>
          <img className='logo' 
            src={require("../assets/images/logowhite.png")}alt=''> 
          </img>
      </div>
      <ul className='navigation'>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/'>
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
          <ImUsers size='calc(1vw + .5vw)' className='sidebar-icon'/>
          <div className='nav-title'>USERS</div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/assets'>
          <ImFilesEmpty size='calc(1vw + .5vw)' className='sidebar-icon'/>
          <div className='nav-title'>ASSETS</div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/complaints'>
          <FiMessageCircle size='calc(1vw + .5vw)' className='sidebar-icon'/>
          <div className='nav-title'>COMPLAINTS</div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/logout'>
          <FiLogOut size='calc(1vw + .5vw)' className='sidebar-icon'/>
          <div className='nav-title'>LOG OUT</div>
          </NavLink>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar