
import React, {useEffect,useState} from 'react'
import {NavLink} from 'react-router-dom'
import {BiArrowBack,BiEdit} from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri';
import { IoMdAddCircle } from "react-icons/io";
import Suspenduser from './Suspenduser';
import Generatereport from './GenerateReport';
import Adduser from './Assign';
import axios from 'axios';
import {useParams } from 'react-router-dom';



  const Userprofile = () =>{
    const[showComponent, setShowComponent] = useState(false);
    const[assignComponent, setAssignComponent]=useState(false);
    const[generateComponent, setGenerateComponent]=useState(false);
    const [profile, setProfile] = useState(null);
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
   
    //   const handleDeleteItem=(e)=> {
    //       const del=e.target.getAttribute('asset')

    //   }
    return (
        <div>
            {generateComponent && <Generatereport closeComponent={setGenerateComponent}/>}
            {assignComponent && <Adduser closeComponent={setAssignComponent}/>}
             {showComponent && <Suspenduser closeSuspenduser={setShowComponent}/>}
        <div className='asset-wrapper'>
            <div className='asset-prof-main'>
                <NavLink to='/users' className='back'>
                    <BiArrowBack/>
                </NavLink>
                <div className='profile-main'>
                    <h2 className='asset-prof-title'>USER PROFILE</h2>
                    <img src={require("../assets/images/suzie.jpeg")} alt="Asset"  width="150" className="asset-profile-img"/>
                    {profile &&
                    <div className='profile-info'>
                        <h3>{profile.name}</h3>
                        <p>{profile.email}</p>
                        <p>{profile.departments[0].title}</p>
                    </div>
  }
                    <button className='assign-btn' onClick={() => setAssignComponent(true)}> 
              <IoMdAddCircle className='assign-icon'/>
              <p className='assign-txt' >
                ASSIGN
              </p>
                    </button>
                    <btn className='btn-status' onClick={() => setGenerateComponent(true)}>
                    GENERATE REPORT
                    </btn>
                    <btn className='btn1-status' onClick={() => setShowComponent(true)}>
                    
              SUSPEND USER
                            
                    </btn>
                </div>
            </div>
            <div className='asset-prof-card-wrapper'>
                <div className='asset-prof-card'>
                    <div className='asset-prof-card-header'>
                        <h2>ASSIGNED ASSETS</h2>
                
                    </div>
                    <div className='asset-prof-card-main'>
                        {profile && 
                        <div class='card-item'>
                            <p>{profile.assets[0].title}</p>
                            <p>{profile.assets[0].serialnumber}</p>
                            <p>{profile.assets[0].price}</p>
                            <a href=''><RiDeleteBin5Line className='user-img'/></a>
                        </div>
                        }  
                    
                    </div>
                </div>
               
            </div>
        </div>
        </div>
)
   
}


export default Userprofile;
