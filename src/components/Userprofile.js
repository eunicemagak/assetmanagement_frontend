
import React, {useState} from 'react'
import {BiArrowBack,BiEdit} from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri';
import { IoMdAddCircle } from "react-icons/io";
import Suspenduser from './Suspenduser';
import Adduser from './Assign';


  const Userprofile = () =>{
    const[showComponent, setShowComponent] = useState(false);
    const[assignComponent, setAssignComponent]=useState(false);
    
   
      
    return (
        <div>
            {assignComponent && <Adduser closeComponent={setAssignComponent}/>}
             {showComponent && <Suspenduser closeSuspenduser={setShowComponent}/>}
        <div className='asset-wrapper'>
            <div className='asset-prof-main'>
                <div className='back'>
                    <BiArrowBack/>
                </div>
                <div className='profile-main'>
                    <h2 className='asset-prof-title'>USER PROFILE</h2>
                    <img src={require("../assets/images/suzie.jpeg")} alt="Asset"  width="150" className="asset-profile-img"/>
                    <div className='profile-info'>
                        <h3>Susan Suzie</h3>
                        <p>suzie@roamtech.com</p>
                        <p>Finance Department</p>
                    </div>
                    <button className='assign-btn' onClick={() => setAssignComponent(true)}> 
              <IoMdAddCircle className='assign-icon'/>
              <p className='assign-txt' >
                ASSIGN
              </p>
                    </button>
                    <btn className='btn-status'>
                    GENERATE REPORT
                    </btn>
                    <btn className='btn1-status' onClick={() => setShowComponent(true)}>
                        < p className='suspend' >
                            SUSPEND USER</p>
                    </btn>
                </div>
            </div>
            <div className='asset-prof-card-wrapper'>
                <div className='asset-prof-card'>
                    <div className='asset-prof-card-header'>
                        <h2>ASSIGNED ASSETS</h2>
                
                    </div>
                    <div className='asset-prof-card-main'>
                        <div class='card-item'>
                            <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>200000</p>
                            <a href=''><RiDeleteBin5Line className='user-img'/></a>
                            <a href=""><BiEdit className='user-img'/></a>
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>200000</p>
                            <a href=''><RiDeleteBin5Line className='user-img'/></a>
                            <a href=""><BiEdit className='user-img'/></a>
                                        
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>200000</p>
                            <a href=''><RiDeleteBin5Line className='user-img'/></a>
                            <a href=""><BiEdit className='user-img'/></a>
                                        
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>200000</p>
                            <a href=''><RiDeleteBin5Line className='user-img'/></a>
                            <a href=""><BiEdit className='user-img'/></a>
                                        
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>200000</p>
                            <a href=''><RiDeleteBin5Line className='user-img'/></a>
                            <a href=""><BiEdit className='user-img'/></a>
                                        
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>200000</p>
                            <a href=''><RiDeleteBin5Line className='user-img'/></a>
                            <a href=""><BiEdit className='user-img'/></a>
                                        
                        </div>
                    
                    </div>
                </div>
                <div className='asset-prof-card'>
                    <div className='asset-prof-card-header'>
                        <h2>USER COMPLAINTS</h2>       
                    </div>
                    <div className='asset-prof-card-main'>
                        <div className='card-item'>
                            <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>Faulty Charger</p>
                            
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>heating up</p>
                                    
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>fan not working</p>
                                    
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>low ram</p>
                                    
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>broken screen</p>
                                    
                        </div>
                        <div className='card-item'>
                        <p>HP SPECTRE</p>
                            <p>hp2345ygu6k</p>
                            <p>frozen touchpad</p>
                                    
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
        </div>
)
   
}


export default Userprofile;
