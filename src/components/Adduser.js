

import React, {useState, useEffect} from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

const Adduser = ({handleClose, show}) => {  
const [assets, setAssets] =  useState([]);
const [departments, setDepartments] =  useState([]);
const [accessories, setAccessories] =  useState([]);
const [data, setData] = useState ({
  username: "",
  email: "",
  department: "",
  asset: "",
  accessory: "",
  success: ""
})
  function getAllAssets(){
      axios.get('/assets', {
          responseType: 'json'
      }).then(response => {
          if(response.status === 200){
              setAssets(response.data.data)
          }
      })
    }
    useEffect(() => {
      getAllAssets();
  }, []);
  const popup = show ? "popup display-block" : "popup display-none";
  function getAllDepartments(){
        axios.get('/department', {
            responseType: 'json'
        }).then(response => {
            if(response.status === 200){
                setDepartments(response.data.data)
            }
        })
      }
    
      useEffect(() => {
        getAllDepartments();
    }, [])

    function getAllAccessories(){
          axios.get('/accessories', {
              responseType: 'json'
          }).then(response => {
              if(response.status === 200){
                  setAccessories(response.data.data)
              }
          })
        }
      
        useEffect(() => {
          getAllAccessories();
      }, [])

function submit(e) {
  e.preventDefault();
  axios.post('/users', {
    name: data.name,
    email: data.email,
    department: data.department,
    asset: data.asset,
    accessory: data.accessory,
    success: data.success
  })
  .then(res => {
    console.log(res.data)
    this.setData({success:"USER ADDED SUCCESFULLY"})
    window.location.href = "../Users";
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
    <div className={popup}>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>ADD NEW USER</h3>
          <button className='close'onClick={handleClose}>
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
              <input type='text' required placeholder='username' onChange={(e) => handle(e)} id="name" value={data.name}/>
            </div>
            <div className='password'>
              <h4>DEPARTMENT</h4>
              <select required>
                <option disabled selected value="">department</option>
            {
              departments.map((val) => {
                return(
                <option onChange={(e) => handle(e)} id="department" value={data.department}>{val.title}</option>
                                )})
                              }
              </select>
            </div>
            <div className='assign-assets'>
              <h4>ASSIGN ASSET</h4>
              <select required>
                <option disabled selected value="">select asset to assign</option>
            {
              assets.map((val) => {
                return(
                <option onChange={(e) => handle(e)} id="asset" value={data.asset}>{val.title}</option>
                                )})
                              }
              </select>
            </div>
            <div className='accessories'>
              <h4>ACCOMPANING ACCESSORIES</h4>
              <select required>
                <option disabled selected value="">select accompaning accessories</option>
            {
              accessories.map((val) => {
                return(
                <option onChange={(e) => handle(e)} id="accessory" value={data.accessory}>{val.title}</option>
               )})
            }
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
