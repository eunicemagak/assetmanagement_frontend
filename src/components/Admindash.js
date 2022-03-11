import React, {useState, useEffect} from 'react'
import { IoIosLaptop } from 'react-icons/io'
import { BsCheckCircle} from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { RiMessage2Line } from 'react-icons/ri'
import axios from 'axios';

const Admindash = ({val}) => {
  const [admin, setAdmin] =  useState([]);
  function getAdmin(){
   
        axios.get('/admin', {
            responseType: 'json'
        }).then(response => {
            if(response.status === 200){
                setAdmin(response.data.data)
            }
        })
      }
    
      useEffect(() => {
        getAdmin();
    }, [])
  return (
    /**
     * * Admin dashboard on login with basic informative widgets on current system state
     * ? Do we need to add functionality to the widgets?
     * TODO: implement counter for all widgets to get information from DB
     */
        <div className='main'>
          {
              admin.map((val) => {
                return(
          <div className='welcome'>
            <h2>welcome {val.first_name}</h2>
            <p>Use this asset management portal to manage, assign and record all company assets for better convinience</p>
          </div>
           )})
          }
          <div className='widget'>
            <div className='data'>
              <h1>36</h1>
              <p>total assets</p>
            </div>
            <IoIosLaptop  className='widget-img'/>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>24</h1>
              <p>assigned assets</p>
            </div>
            <BsCheckCircle  className='widget-img'/>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>12</h1>
              <p>unassigned assets</p>
            </div>
            <ImCross  className='widget-img'/>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>4</h1>
              <p>new complaints</p>
            </div>
            <RiMessage2Line  className='widget-img'/>
          </div>
          
        </div>
  )
}

export default Admindash
