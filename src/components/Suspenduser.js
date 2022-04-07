
import React, { useEffect, useState } from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';
import {useParams } from 'react-router-dom';

const Suspenduser = ({closeSuspenduser}) => {
  const [suspend, setSuspend] = useState(false);
  const handleClick = () => {
    console.log('susped')
  };
  const [profile, setProfile] = useState([]);
        const {userId } = useParams();
    
    
        const getUserProfile = (userId) => {
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
                getUserProfile(userId);
    
            } 
        }, [userId])
  return(
    <div>
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>SUSPEND USER</h3>
          <button className='close'onClick={() => closeSuspenduser(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
          {profile &&
        <div className='popup-main'> 
          <div className='name'>
              <h4>Name</h4>
             <p>{profile.name}</p>
            </div>
            <div className='email_address'>
              <h4>Email</h4>
              <p>{profile.email}</p>
            </div>
            <div className='department'>
              <h4>Department</h4>
              <p>{profile.departments[0].title}</p>
            </div>
            <button className='suspenduser' suspended={suspend} onClick={() => setSuspend (true)}>
              SUSPEND
            </button>
        </div>
}
      </div>
    </div>
    </div>
  )
}
          export default Suspenduser