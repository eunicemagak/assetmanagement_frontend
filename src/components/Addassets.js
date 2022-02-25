import React from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";

const Addasset = ({closeComponent}) => {
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
          <h3>ADD NEW ASSET</h3>
          <button className='close'onClick={() => closeComponent(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <form>
            <div className='email'>
              <h4>ASSET NAME</h4>
              <input type='text' required placeholder='asset name'/>
            </div>
            <div className='username'>
              <h4>SERIAL NUMBER</h4>
              <input type='text' required placeholder='serial number'/>
            </div>
            <div className='password'>
              <h4>PRICE</h4>
              <input type='number' required placeholder='price'/>
            </div>
            <div className='assign-assets'>
              <h4>CATEGORY</h4>
              <select required>
                <option disabled selected value="">select category</option>
                <option value="">HP SPECTRE</option>
                <option value="">Lenovo Thinkpad</option>
                <option value="">Macbook Air</option>
                <option value="">Hp Probook</option>
              </select>
            </div>
            <div className='accessories'>
              <h4>DESCRIPTION</h4>
              <input type='text' required placeholder='give more info'/>
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

export default Addasset