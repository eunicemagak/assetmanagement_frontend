import React from 'react'
import {BiArrowBack} from 'react-icons/bi';

  const Assetprofile = () =>{
      
    return (
    <div class="assetprof-wrapper"> 
        <div class="main-assetprof">
            <div className='assetprof'>
                <a href='assets' class="assetprof-item">
                    <BiArrowBack className='asset-img'/> 
                </a>
                <h4 class='asset-item'>ASSET PROFILE</h4>
            </div>         
            <div className="profile-body">
                <img class="rounded-circle" src={require("../assets/images/laptopprof.png")} alt="Asset" width="150"></img>
                <div class="items">
                    <h4>HP SPECTRE</h4>
                    <p class="text ">hp2345ygu6k</p>
                    <p class="text">ksh. 200,000</p>
                    <button class=" btn btn-primary">ASSIGNED</button>
                </div>
            </div>
        </div>
        
        <div className='col-md-8'>
                    <div className='card'>
                        <div class="card-body">
                            <div class='card-header'>
                                <h5>ASSET RECORD</h5>
                                <a class="btn-primary" target="__blank" href=""><img  src={require("../assets/images/edit.png")} alt="Asset" width="25"></img></a>
                            </div>
                            <div class='row'>
                                <div class='col-sm-3'>
                                    <h6>NAME</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">hp spectre
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">SERIAL NUMBER</h6>
                                    
                                </div>
                                <div class="col-sm-9 text-secondary">hp2345ygu6k</div>
                                    
                            </div>
                            <div class='row'>
                                <div class='col-sm-3'>
                                    <h6>VALUE</h6>
                                </div>
                                <div class='col-sm-9 text-secondary'>ksh. 200,000
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">DATE PURCHASED</h6>
                                </div>
                                    <div class="col-sm-9 text-secondary">12/2/2022</div>
                            </div>
                            <div class='row'>
                                <div class='col-sm-3'>
                                    <h6>CURRENT STATUS</h6>
                                </div>
                                <div class='col-sm-9  text-secondary'>ASSIGNED
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">JOURNEY</h6>
                                </div>
                                
                                    <div class="col-sm-9 text-secondary">Suzan Suzie<br/>Thomas Tom<br/>Charles Charlie</div>
                                    
                            </div>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">COMPLAINTS</h6>
                                </div>
                                <div class="complaints-rows">
                                    <div class="col-sm-9 text-secondary">
                                        Faulty charger<br/>Failed drivers<br/>Heating up
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Suzan Suzie<br/>Thomas Tom<br/>Charles Charlie
                                    </div>
                                </div>
                            </div>  
                            <div class='row'>
                                <div class='col-sm-3'>
                                <button class=" btn1 btn-primary">GENERATE REPORT</button>
                                </div>
                                <div class='col-sm-9  text-secondary'>
                                    <button class=" btn2 btn-primary">CLEAR-OFF</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </div>
)
   
}
export default Assetprofile;
