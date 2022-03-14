
import React from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";

const Suspenduser = ({closeSuspenduser}) => {
  
  return(
    <div>
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>SUSPEND USER</h3>
          <button className='close'onClick={() => closeSuspenduser(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <p>Are you sure you want to Suspend User?</p>
            <button className='suspenduser' onClick={Suspenduser}>
              SUSPEND USER
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}
          export default Suspenduser