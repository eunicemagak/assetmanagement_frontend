import React, { useEffect, useState } from 'react'
import { BiArrowBack, BiEdit } from 'react-icons/bi';
import {NavLink} from 'react-router-dom'
import '../assets/css/assetprofile.css'
import axios from 'axios';
import {useParams } from 'react-router-dom';
import Edit from './Edit'


const Assetprofile = () => {
    const[showComponent, setShowComponent] = useState(false);
    const [profile, setProfile] = useState([]);
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
    // const modalOpen =() =>{
    //     this.setState({ modal: true });
    //   }
    
    // const   modalClose =() =>{
    //     this.setState({
    //       modalInputName: "",
    //       modal: false
    //     });
    //   }

    return (
        <div>

        {showComponent && <Edit closeSuspenduser={setShowComponent}/>}
        <div className='asset-wrapper'>
            <div className='asset-prof-main'>
                <NavLink to='/assets' className='back'>
                    <BiArrowBack />
                </NavLink>
                <div className='profile-main'>
                    <h2 className='asset-prof-title'>ASSET PROFILE</h2>
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
                    <h2>ASSET RECORD</h2>
                    <div className='edit'  onClick={() => setShowComponent(true)}>
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
                        <p></p>
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
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className='asset-prof-card-buttons'>
                    <button className='report'>
                        GENERATE REPORT
                    </button>
                    <button className='clear'>
                        CLEAR OFF
                    </button>
                </div>
            </div>
        </div>

        </div>
    )

}
export default Assetprofile;

