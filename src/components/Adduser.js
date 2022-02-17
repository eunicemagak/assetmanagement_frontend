import React from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import close from 'reactjs-popup'

const Adduser = () => {
  return (
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h2>ADD NEW ASSET</h2>
          <button className='close'>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn' onClick={close}/>
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
              <h4>PASSWORD</h4>
              <input type='password' required placeholder='password'/>
            </div>
            <div className='assign-assets'>
              <h4>ASSIGN ASSET</h4>
              <select required>
                <option disabled selected value="">select asset to assign</option>
              </select>
            </div>
            <div className='accessories'>
              <h4>ACCOMPANING ACCESSORIES</h4>
              <select required>
                <option disabled selected value="">select accessories to assign</option>
              </select>
            </div>
            <button className='createuser'>
              CREATE USER
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Adduser