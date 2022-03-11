import React from "react";
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";

const Suspend = ({closeComponent}) => {
  return (
    /**
     * *Add new user interface with a form to capture user details
     * *This will play off as a popup module on the ALL USERS page and once all fields are inserted, redirect back to ALL USERS page
     * TODO: implement add user functionality
     * TODO: connet to DB to push new user details to DB
     */
    <div>
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>SUSPEND USER</h3>
          <button className='close'onClick={() => closeComponent(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
        <div className='name'>
              <h4>Name</h4>
             <p>Tom Thomas</p>
            </div>
            <div className='email_address'>
              <h4>Email</h4>
              <p>user@roamtech.com</p>
            </div>
            <div className='department'>
              <h4>Department</h4>
              <p>Finance</p>
            </div>
          
            <button className='suspend'>
              SUSPEND
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Suspend
