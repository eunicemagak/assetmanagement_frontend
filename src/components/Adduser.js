import React from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";

const Adduser = ({closeComponent}) => {
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
          <h3>ADD NEW USER</h3>
          <button className='close'onClick={() => closeComponent(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <form>
            <div className='email'>
              <h4>EMAIL ADDRESS</h4>
              <input type='email' required placeholder='email address'/>
            </div>
            <div className='username'>
              <h4>USERNAME</h4>
              <input type='text' required placeholder='username'/>
            </div>
            <div className='password'>
              <h4>DEPARTMENT</h4>
              <input type='text' required placeholder='department'/>
            </div>
            <div className='assign-assets'>
              <h4>ASSIGN ASSET</h4>
              <select required>
                <option disabled selected value="">select asset to assign</option>
                <option value="">HP SPECTRE</option>
                <option value="">Lenovo Thinkpad</option>
                <option value="">Macbook Air</option>
                <option value="">Hp Probook</option>
              </select>
            </div>
            <div className='accessories'>
              <h4>ACCOMPANING ACCESSORIES</h4>
              <select required>
                <option disabled selected value="">select accessories to assign</option>
                <option disabled selected value="">select asset to assign</option>
                <option value="">Mouse</option>
                <option value="">charger</option>
                <option value="">extensions</option>
                <option value="">monitor</option>
                <input type="radio" name="gender" value="male"/>
               <input type="radio" name="gender" value="female"/>
                <input type="radio" name="gender" value="other"/>
              </select>
            </div>
            <button className='createuser'>
              CREATE USER
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Adduser