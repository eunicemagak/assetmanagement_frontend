import React from 'react'
import Sidebar from './Sidebar';
import Nav from './Nav';

  const Userprofile = () =>{
      
    return (
        <div>   
            <Nav />
            <Sidebar /> 
            <div class="container">
                <div class="mainbody">
                    <div class="main-assetprof">
                        <div className='assetprof'>
                            <div class='assetprof-item'><a href='assets'>
                                <img className='widget-img' src={require("../assets/images/back.png")} alt=''></img></a>
                            </div>
                            <div class='asset-item'>
                                <h4>USER PROFILE</h4>
                            </div>
                        </div>
                    
                    </div>
                    <div className="profile-body">
                        <img class="rounded-circle" src={require("../assets/images/laptopprof.png")} alt="Asset" width="150"></img>
                        <div class="items">
                            <h4>hp spectre</h4>
                            <p class="text ">hp2345ygu6k</p>
                            <p class="text">ksh. 200,000</p>
                            <button class=" btn btn-primary">ASSIGNED</button>
                        </div>
                    </div>
                    <div className='col-md-8'>
                    <div className='card mb-3'>
                        <div class="card-body">
                            <div class='card-header'>
                                <h5>USER RECORD</h5>
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
                                <div>
                                <div class="col-sm-9 text-secondary">Faulty charger<br/>Failed drivers<br/>Heating up</div>
                                </div>
                                    <div class="col-sm-9 text-secondary">Suzan Suzie<br/>Thomas Tom<br/>Charles Charlie</div>
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
            </div>
        </div>
       
    )
   
}
export default Userprofile;