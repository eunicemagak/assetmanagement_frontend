import React from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";

const Generatereport = ({closeGeneratereport}) => {
  
  return(
    <div>
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>GENERATE REPORT</h3>
          <button className='close'onClick={() => closeGeneratereport(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
            <button className='suspenduser' onClick={Generatereport}>
              GENERATE REPORT
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}
          export default Generatereport