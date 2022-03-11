import React from "react";
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";

const Logout = ({closeLogout}) => {
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "../";
  }


  return (
    /**
     * *Add new user interface with a form to capture user details
     * *This will play off as a popup module on the ALL USERS page and once all fields are inserted, redirect back to ALL USERS page
     * TODO: implement add user functionality
     * TODO: connet to DB to push new user details to DB
     */
    <div>
    <div className='popup' id="fixed">
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>LOG OUT</h3>
          <button className='close'onClick={() => closeLogout(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <p>Are you sure you want to log out of Asset Management Portal?</p>
            <button className='logout' onClick={logout}>
              LOG OUT
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Logout

