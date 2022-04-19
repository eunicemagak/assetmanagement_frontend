

import React, {useState, useEffect} from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

const Adduser = ({handleClose, show}) => {  
const [assets, setAsset] =  useState([]);
const [department, setDepartment] =  useState([]);
const [accessory, setAccessory] =  useState([]);
const [name, setName]= useState()
const [email, setEmail] = useState()
const [val, setUserdpt] = useState()
const [asset, setUserasset] = useState()
const [res, setUseraccessory] = useState()
  function submit(e) {
    e.preventDefault();
    axios.post("/users", {
      name: name,
      email: email,
      department_id:parseInt(val),
      asset_id:parseInt(asset),
      accesorie_id:parseInt(res),
    })
  .then(res => {
    console.log(res.data)
    // window.location.href = "../Users";
  })
}
  function getAllAsset(){
      axios.get('/assets', {
          responseType: 'json'
      }).then(response => {
          if(response.status === 200){
           setAsset(response.data)
          }
    })
  }
    
    useEffect(() => {
      getAllAsset();
  }, []);
  const popup = show ? "popup display-block" : "popup display-none";
  function getAllDepartment(){
        axios.get('/department', {
            responseType: 'json'
        }).then(response => {
            if(response.status === 200){
                setDepartment(response.data)
            }
        })
      }
    
      useEffect(() => {
        getAllDepartment();
    }, []);
    function getAllAccessory(){
          axios.get('/accessories', {
              responseType: 'json'
          }).then(response => {
              if(response.status === 200){
                  setAccessory(response.data)
              }
          })
        }
      
        useEffect(() => {
          getAllAccessory();
      }, []);

const unassignedAsset = assets.filter(asset => asset.is_assigned === false)
const unassignedAccessory = accessory.filter(accessorie => accessorie.is_assigned === false)
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
              <input type='email' required placeholder='email address' onChange={(e) => setEmail(e.target.value)} id="email" value={email}/>
            </div>
            <div className='username'>
              <h4>USERNAME</h4>
              <input type='text' required placeholder='username' onChange={(e) => setName(e.target.value)} id="name" value={name}/>
            </div>
            <div className='password'>
              <h4>DEPARTMENT</h4>
              <select required onChange={(e) => setUserdpt(e.target.value)} >
                <option disabled selected value="">department</option>
            {
              department.map((val) => {
                return(
                <option id="department" value={val.ID}>{val.title}</option>
                                )})
                              }
              </select>
            </div>
            <div className='assign-assets'>
              <h4>ASSIGN ASSET</h4>
              <select required onChange={(e) => setUserasset(e.target.value)} >
                <option disabled selected value="">select asset to assign</option>
            {
              unassignedAsset.map((asset) => {
                return(
                <option id="asset" value={asset.ID}>{asset.title}</option>
                                )})
                              }
              </select>
            </div>
            <div className='accessories'>
              <h4>ACCOMPANING ACCESSORIES</h4>
              <select onChange={(e) => setUseraccessory(e.target.value)} >
                <option disabled selected value="">select accompaning accessories</option>
            {
              unassignedAccessory.map((res) => {
                return(
                <option id="accessory" value={res.ID}>{res.title}</option>
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
