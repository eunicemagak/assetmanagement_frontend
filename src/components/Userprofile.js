
import React from 'react'
import {BiArrowBack,BiEdit} from 'react-icons/bi';
import {RiDeleteBin5Line} from 'react-icons/ri';


  const Userprofile = () =>{
      
    return (
    <div class="userprof-wrapper"> 
        <div class="main-userprof">
            <div className='userprof'>
                <a href='assets' class="userprof-item"><BiArrowBack className='user-img'/></a>
                <h4 class='user-item'>USER PROFILE</h4>
            </div>
            <div className="profile-body">
                <img class="rounded-circle" src={require("../assets/images/suzie.jpeg")} alt="Asset" width="150"></img>
                <div class="items">
                    <h4>Suzan Suzie</h4>
                    <p class="ptext ">suzie@roamtech.com</p>
                    <p class="ptext">Finance Department</p>
                    <button class=" btn btn-primary">ASSIGN</button>
                    <button class=" btn1">GENERATE REPORT</button>
                    <button class=" btn1">SUSPEND USER</button>
                </div>
            </div>
        </div>
        <div className='card'>
                        <div class="card-body">
                            <div class='card-header'>
                                <h5>ASSIGNED ASSETS</h5>
                                
                            </div>
                            <div class="row">
                                <ol>
                                    <li>
                                        <div class="text">HP spectre</div> 
                                        <div class=" text">hp2345ygu6k</div>
                                        <div class=" text">200,000</div>
                                        <a href='assets' class="userprof-item"><RiDeleteBin5Line className='user-img'/></a>
                                        <a class="btn-primary" target="__blank" href=""><BiEdit className='user-img'/></a>
                                    
                                    </li>
                                    <li>
                                        <div class="text">HP spectre</div> 
                                        <div class=" text">hp2345ygu6k</div>
                                        <div class="text">200,000</div>
                                        <a href='assets' class="userprof-item"><RiDeleteBin5Line className='user-img'/></a>
                                        <a class="btn-primary" target="__blank" href=""><BiEdit className='user-img'/></a>
                                    </li>
                                    
                                    <li>
                                        <div class="text">HP spectre</div> 
                                        <div class="text">hp2345ygu6k</div>
                                        <div class="text">200,000</div>
                                        <a href='assets' class="userprof-item"><RiDeleteBin5Line className='user-img'/></a>
                                        <a class="btn-primary" target="__blank" href=""><BiEdit className='user-img'/></a>
                                    </li>
                                    <li>
                                        <div class="text">HP spectre</div> 
                                        <div class="text">hp2345ygu6k</div>
                                        <div class="text">200,000</div>
                                        <a href='assets'><RiDeleteBin5Line className='user-img'/></a>
                                        <a target="__blank" href=""><BiEdit className='user-img'/></a>
                                    </li>
                                </ol>
                                   
                            </div>  
                           
                        </div>
                    </div>
                    <div className='card2'>
                        <div class="card-body">
                            <div class='card-header'>
                                <h5>USER COMPLAINTS</h5>
                                </div>
                            <div class="row">
                                <ol>
                                    <li>
                                        
                                            <div class="text">Faulty charger</div>
                                            <div class="text">HP spectre </div>
                                            <div class="text">hp2345ygu6k</div>
                                        
                                    </li>
                                    <li>
                                        <div class="text">Faulty charger</div>
                                            <div class="text">HP spectre </div>
                                            <div class="text">hp2345ygu6k</div>
                                    
                                    </li>
                                    <li>
                                        <div class="text">Faulty charger</div>
                                            <div class="text">HP spectre </div>
                                            <div class="text">hp2345ygu6k</div>
                                        
                                    </li>
                                    <li>
                                        <div class="text">Faulty charger</div>
                                        <div class="text">HP spectre </div>
                                        <div class="text">hp2345ygu6k</div>
                                    </li>
                                </ol>
                                   
                            </div>  
                           
                        </div>
                    
            </div>
    </div>
)
   
}
export default Userprofile;
