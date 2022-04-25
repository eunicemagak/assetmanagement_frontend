
import React, { useEffect, useState } from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';
import {useParams } from 'react-router-dom';

const Suspenduser = ({closeDamage}) => {
  
  const [profile, setProfile] = useState([]);
const [damaged, setDamaged] = useState(false)
        const {userId } = useParams();
    
    
        const getAssetProfile = (userId) => {
            axios.get(`/users/${userId}`, {
                responseType: 'json'
            }).then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    setProfile(response.data)
                }
            })
        }
        useEffect(() => {
            if (userId) {
                getAssetProfile(userId);
    
            } 
        }, [userId])
        function submit(e) {
          e.preventDefault();
          axios.patch(`/users/${userId}`, {
            is_cleared_of: damaged
          })
          .then(res => {
            console.log(res.data)
          })
        }
  return(
    <div>
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>MARK ASSET AS DAMAGED</h3>
          <button className='close'onClick={() => closeDamage(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
          {profile &&
        <form className='popup-main'  onSubmit={(e) => submit(e)}> 
          <div className='name'>
              <h4>Username</h4>
             <p>{profile.name}</p>
            </div>
            <div className='email_address'>
              <h4>Email Address</h4>
              <p>{profile.email}</p>
            </div>
            <div className='department'>
              <h4>Department</h4>
              <p>{profile.department[0].title}</p>
            </div>
            <div className='department'>
              <h4>Is Active</h4>
              <p>{profile.is_active? <p>SUSPENDED</p> : <p>ACTIVE</p>}</p>
            </div>
            <button className='suspenduser' onClick={() => setDamaged(true)}>
              Mark As Cleared
            </button>
        </form>
}
      </div>
    </div>
    </div>
  )
}
          export default Suspenduser