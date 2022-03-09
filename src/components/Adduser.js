

import React, {useState} from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

const Adduser = ({closeComponent}) => {  
const url ="https://asset.rnd.emalify.com/api/v1/users"
const [data, setData] = useState ({
  username: "",
  email: "",
  department: "",
  asset: "",
  accessory: "",
  success: ""
})
function submit(e) {
  e.preventDefault();
  axios.post(url, {
    username: data.username,
    email: data.email,
    department: data.department,
    asset: data.asset,
    accessory: data.accessory,
    success: data.success
  })
  .then(res => {
    console.log(res.data)
    this.setData({success:"USER ADDED SUCCESFULLY"})
  }).catch(e => {
    this.setData({success:"ALL FIELDS ARE REQUIRED"})
  })
}

function handle(e) {
  const newdata ={ ...data }
  newdata[e.target.id] = e.target.value
  setData(newdata)
  console.log(newdata)
}
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
          <form onSubmit={(e) => submit(e)}>
            <div className='email'>
              <h4>EMAIL ADDRESS</h4>
              <input type='email' required placeholder='email address' onChange={(e) => handle(e)} id="email" value={data.email}/>
            </div>
            <div className='username'>
              <h4>USERNAME</h4>
              <input type='text' required placeholder='username' onChange={(e) => handle(e)} id="username" value={data.username}/>
            </div>
            <div className='password'>
              <h4>DEPARTMENT</h4>
              <input type='text' required placeholder='department' onChange={(e) => handle(e)} id="department" value={data.department}/>
            </div>
            <div className='assign-assets'>
              <h4>ASSIGN ASSET</h4>
              <select required>
                <option disabled selected value="">select asset to assign</option>
                <option onChange={(e) => handle(e)} id="asset" value={data.asset}>HP SPECTRE</option>
              </select>
            </div>
            <div className='accessories'>
              <h4>ACCOMPANING ACCESSORIES</h4>
              <select required>
                <option disabled selected value="">select asset to assign</option>
                <option onChange={(e) => handle(e)} id="accessory" value={data.accessory}>Mouse</option>
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
