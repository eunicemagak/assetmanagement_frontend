
import React from 'react'
import {BiArrowBack} from 'react-icons/bi';


  const Userprofile = () =>{
      
    return (
    <div class="userprof-wrapper"> 
        <div class="main-userprof">
            <div className='userprof'>
                <a href='assets' class="userprof-item"><BiArrowBack className='user-img'/></a><h4 class='user-item'>USER PROFILE</h4>
            </div>
            <div className="profile-body">
                <img class="rounded-circle" src={require("../assets/images/suzie.jpeg")} alt="Asset" width="150"></img>
                <div class="items">
                    <h4>Suzan Suzie</h4>
                    <p class="text ">suzie@roamtech.com</p>
                    <p class="text">Finance Department</p>
                    <button class=" btn btn-primary">ASSIGN</button>
                    <button class=" btn1 btn-primary">GENERATE REPORT</button>
                </div>
            </div>
        </div>
        
        <div className='col-md-8'>
                    <div className='card'>
                        <div class="card-body">
                            <div class='card-header'>
                                <h5>ASSIGNED ASSETS</h5>
                                <a class="btn-primary" target="__blank" href=""><img  src={require("../assets/images/edit.png")} alt="Asset" width="25"></img></a>
                            </div>
                            <div class="row">
                                <ol>
                                    <li>
                                        <div class="col-sm-3">
                                            <div class="col-sm-9 text-secondary">
                                                HP spectre</div> 
                                                <div class="col-sm-9 text-secondary">
                                                    hp2345ygu6k</div>
                                                    <div class="col-sm-9 text-secondary">200,000</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="col-sm-3">
                                            <div class="col-sm-9 text-secondary">
                                                HP spectre</div> 
                                                <div class="col-sm-9 text-secondary">
                                                    hp2345ygu6k</div>
                                                    <div class="col-sm-9 text-secondary">200,000</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="col-sm-3">
                                            <div class="col-sm-9 text-secondary">
                                                HP spectre</div> 
                                                <div class="col-sm-9 text-secondary">
                                                    hp2345ygu6k</div>
                                                    <div class="col-sm-9 text-secondary">200,000</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="col-sm-3">
                                            <div class="col-sm-9 text-secondary">
                                                HP spectre</div> 
                                                <div class="col-sm-9 text-secondary">
                                                    hp2345ygu6k</div>
                                                    <div class="col-sm-9 text-secondary">200,000</div>
                                        </div>
                                    </li>
                                </ol>
                                   
                            </div>  
                           
                        </div>
                    </div>
                    <div className='card2'>
                        <div class="card-body">
                            <div class='card-header'>
                                <h5>USER COMPLAINTS</h5>
                                <a class="btn-primary" target="__blank" href=""><img  src={require("../assets/images/edit.png")} alt="Asset" width="25"></img></a>
                            </div>
                            <div class="row">
                                <ol>
                                    <li>
                                        <div class="col-sm-3">
                                            <div class="col-sm-9 text-secondary">
                                                Faulty charger</div> 
                                                <div class="col-sm-9 text-secondary">
                                                HP spectre </div>
                                                    <div class="col-sm-9 text-secondary">hp2345ygu6k</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="col-sm-3">
                                            <div class="col-sm-9 text-secondary">
                                                HP spectre</div> 
                                                <div class="col-sm-9 text-secondary">
                                                    hp2345ygu6k</div>
                                                    <div class="col-sm-9 text-secondary">200,000</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="col-sm-3">
                                            <div class="col-sm-9 text-secondary">
                                                HP spectre</div> 
                                                <div class="col-sm-9 text-secondary">
                                                    hp2345ygu6k</div>
                                                    <div class="col-sm-9 text-secondary">200,000</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="col-sm-3">
                                            <div class="col-sm-9 text-secondary">
                                                HP spectre</div> 
                                                <div class="col-sm-9 text-secondary">
                                                    hp2345ygu6k</div>
                                                    <div class="col-sm-9 text-secondary">200,000</div>
                                        </div>
                                    </li>
                                </ol>
                                   
                            </div>  
                           
                        </div>
                    </div>
            </div>
    </div>
)
   
}
export default Userprofile;
