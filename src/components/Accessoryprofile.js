import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import { BiArrowBack, BiEdit } from 'react-icons/bi';
import '../assets/css/assetprofile.css'
import axios from 'axios';
import Edit from './Edit'
import Clearoff from './Clearoff'
import Damage from './Damage'
import {useParams } from 'react-router-dom';


const Accessoryprofile = () => {
    const[showComponent, setShowComponent] = useState(false);
    const[showClearoff, setShowClearoff] = useState(false);
    const[showDamage, setShowDamage] = useState(false);
    const [profile, setProfile] = useState([]);
    const {accessoryId } = useParams();

    const getAccessoryProfile = (accessoryId) => {
        axios.get(`/accessories/${accessoryId}`, {
            responseType: 'json'
        }).then(response => {
            if (response.status === 200) {
                console.log(response.data)
                setProfile(response.data)
            }
        })
    }
    useEffect(() => {
        if (accessoryId) {
            getAccessoryProfile(accessoryId);

        }
    }, [accessoryId])

    return (
        <div>
        {showClearoff && <Clearoff closeClearoff={setShowClearoff}/>}
        {showDamage && <Damage closeDamage={setShowDamage}/>}
        {showComponent && <Edit closeSuspenduser={setShowComponent}/>}
        <div className='asset-wrapper'>
            <div className='asset-prof-main'>
                <NavLink to='/accessories' className='back'>
                    <BiArrowBack />
                </NavLink>
                <div className='profile-main'>
                    <h2 className='asset-prof-title'>ACCESSORY PROFILE</h2>
                    <img src="{profile.image}" className="asset-profile-img" />
                    {
                     profile &&
                        <div className='profile-info'>
                            <h3>{profile.title}</h3>
                            <p>{profile.serialnumber}</p>
                            <p></p>
                        </div>

                    }
                    <div className='profile-status'>
                    {profile.is_assigned ? <span>ASSIGNED</span> : <span>UNASSIGNED</span>}
                    </div>
                </div>
            </div>
            <div className='asset-prof-card'>
                <div className='asset-prof-card-header'>
                    <h2>ACCESSORY RECORD</h2>
                    <div className='edit'>
                        <BiEdit className='edit-icon' />
                        <p>edit</p>
                    </div>
                </div>
                <div className='asset-prof-card-main'>
                    <div id='card-item'>
                        <h3>NAME</h3>
                        <p>{profile.title}</p>
                    </div>
                    <div id='card-item'>
                        <h3>SERIAL NUMBER</h3>
                        <p>{profile.serialnumber}</p>
                    </div>
                    <div id='card-item'>
                        <h3>VALUE</h3>
                        <p>{profile.price}</p>
                    </div>
                    <div id='card-item'>
                        <h3>DATE PURCHASED</h3>
                        <p>{profile.purchase_date}</p>
                    </div>
                    <div id='card-item'>
                        <h3>CURRENT STATUS</h3>
                        <p>{profile.is_assigned ? <span >ASSIGNED</span> : <span>UNASSIGNED</span>}</p>
                    </div>
                    <div id='card-item'>
                        <h3>JOURNEY</h3>
                        <div id='list'>
                            <p>{profile.assigned_to}</p>
                        </div>
                    </div>
                    <div id='card-item'>
                        <h3>COMPLAINTS</h3>
                        <div id='list'>
                            {/* <div className='complain-details'>
                                <p></p>
                                <p></p>
                            </div>
                            <div className='complain-details'>
                                <p></p>
                                <p> </p>
                            </div>
                            <div className='complain-details'>
                                <p>Faulty Charger</p>
                                <p>Suasn </p>
                            </div>
                            <div className='complain-details'>
                                <p>Faulty Charger</p>
                                <p>Suasn </p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='asset-prof-card-buttons'>
                    <button className='report'  onClick={() => setShowDamage(true)}>
                        MARK AS DAMAGED
                    </button>
                    <button className='clear'  onClick={() => setShowClearoff(true)}>
                        CLEAR OFF
                    </button>
                </div>
            </div>
            </div>
            </div>
    )

}
export default Accessoryprofile;

