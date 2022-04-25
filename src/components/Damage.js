
import React, { useEffect, useState } from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';
import {useParams } from 'react-router-dom';

const Damage = ({closeDamage}) => {
  
  const [profile, setProfile] = useState([]);
const [damaged, setDamaged] = useState(false)
        const {assetId } = useParams();
    
    
        const getAssetProfile = (assetId) => {
            axios.get(`/assets/${assetId}`, {
                responseType: 'json'
            }).then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    setProfile(response.data)
                }
            })
        }
        useEffect(() => {
            if (assetId) {
                getAssetProfile(assetId);
    
            } 
        }, [assetId])
        function submit(e) {
          e.preventDefault();
          axios.patch(`/assets/${assetId}`, {
            is_damaged: damaged
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
              <h4>Title</h4>
             <p>{profile.title}</p>
            </div>
            <div className='email_address'>
              <h4>Serial Number</h4>
              <p>{profile.serialnumber}</p>
            </div>
            <div className='department'>
              <h4>Category</h4>
              {/* <p>{profile.categorie[0].title}</p> */}
            </div>
            <div className='department'>
              <h4>Is Damaged</h4>
              <p>{profile.is_damaged ? <p>DAMAGED</p> : <p>NOT DAMAGED</p>}</p>
            </div>
            <button className='suspenduser' onClick={() => setDamaged(true)}>
              Mark As Damaged
            </button>
        </form>
}
      </div>
    </div>
    </div>
  )
}
          export default Damage