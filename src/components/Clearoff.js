import React from "react";
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";

const Clearoff = ({closeClear}) => {
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
          <h3>CLEAROFF ASSETS</h3>
          <button className='close'onClick={() => closeClear(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className="popup-main">
        <div class='rowname'>
             <div class='col-sm-3'>
                <h6 class='name_c'>NAME</h6>
                  </div>
                   <p>hp spectre</p>
                      </div>
                      <div class='rowserial'>
                        <div class="col-sm-3">
                          <h6 class="mb-0">SERIAL NUMBER</h6>                                  
                              </div>
                               <p>hp2345ygu6k</p>
                               </div>     
                           
            <button className='clearoff'>
              CLEAR
            </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Clearoff
