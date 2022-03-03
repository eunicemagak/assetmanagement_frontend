import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { ImUsers, ImFilesEmpty } from "react-icons/im";
import { FiMessageCircle, FiLogOut } from "react-icons/fi";
import {GoThreeBars} from "react-icons/go";
import {ImCross} from "react-icons/im";
import '../assets/css/sidebar.css'

const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {

      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])
  return (
    <div>
      <button onClick={toggleNav} className="sidebar-btn">
      <GoThreeBars className='nav-inactive nav-icon'/>
      </button>
        {(toggleMenu || screenWidth > 800) && (
    <div className='sidebar' id='fixed'>
      <div className='logo'>
      <button onClick={toggleNav} className="sidebar-btn">
        <ImCross className='nav-active nav-icon'/>
      </button>
          <img className='logo-img' 
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
          <p className='nav-title'>USERS</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/assets'>
          <ImFilesEmpty size='calc(1vw + .5vw)' className='sidebar-icon'/>
          <p className='nav-title'>ASSETS</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/complaints'>
          <FiMessageCircle size='calc(1vw + .5vw)' className='sidebar-icon'/>
          <p className='nav-title'>COMPLAINTS</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' className='nav-link' exact to='/logout'>
          <FiLogOut size='calc(1vw + .5vw)' className='sidebar-icon'/>
          <p className='nav-title'>LOG OUT</p>
          </NavLink>
        </li>
      </ul>
    </div>
        )}
    </div>
  )
}

export default Sidebar