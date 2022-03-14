import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { ImUsers, ImFilesEmpty } from "react-icons/im";
import { /*FiMessageCircle,*/ FiLogOut } from "react-icons/fi";
import {GoThreeBars} from "react-icons/go";
import {ImCross} from "react-icons/im";
import { BiAddToQueue } from "react-icons/bi";
import '../assets/css/sidebar.css';
import Logout from './Logout';
import axios from 'axios';



const Sidebar = ({val}) => {
  const [admin, setAdmin] = useState([]);
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
    function getAdmin(){
   
          axios.get('/admin', {
              responseType: 'json'
          }).then(response => {
              if(response.status === 200){
                  setAdmin(response.data.data)
              }
          })
        }
      
        useEffect(() => {
          getAdmin();
      }, [])
    const[showLogout, setShowLogout] = useState(false);
  return (
    
    <div>
      {showLogout && <Logout closeLogout={setShowLogout}/>}
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
            {
                admin.map((val) => {
                  return(
            <div className='Name' >
              <p className='name-main'>{val.first_name} {val.last_name}</p>
              <p className='title'>ADMINISTRATOR</p>
            </div>
            )})
            }
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
          {/* <li>
            <NavLink activeClassName='active' className='nav-link' exact to='/complaints'>
            <FiMessageCircle size='calc(1vw + .5vw)' className='sidebar-icon'/>
            <p className='nav-title'>COMPLAINTS</p>
            </NavLink>
          </li> */}
          <li>
            <NavLink activeClassName='active' className='nav-link' exact to='/accessories'>
            <BiAddToQueue size='calc(1vw + .5vw)' className='sidebar-icon'/>
            <p className='nav-title'>ACCESSORIES</p>
            </NavLink>
          </li>
        </ul>
        <div className='sidebar-logout'>
        <FiLogOut size='calc(1vw + .5vw)' className='sidebar-icon' onClick={() => setShowLogout(true)}/>
        <p className='nav-title' onClick={() => setShowLogout(true)} >LOG OUT</p>
        </div>
    </div>
        )}
    </div>
  )
}

export default Sidebar