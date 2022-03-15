<<<<<<< HEAD
import React, {useState, useEffect} from 'react'
import axios from 'axios';
=======
import React, { Component} from 'react'
>>>>>>> b72456331f5d41b4dfd0554e622af25fdc57fc4a
import {BiArrowBack, BiEdit} from 'react-icons/bi';
import '../assets/css/assetprofile.css'
import axios from 'axios';

<<<<<<< HEAD
  const Assetprofile = () =>{
    const [profile, setProfile] = useState ([]);

    function getAssetProfile(){
        axios.get('/assets/1', {
            responseType: 'json'
        }).then(response => {
            if(response.status === 200){
                setProfile(response.data.data)
            } 
        })
    }
      useEffect(() => {
        getAssetProfile();
    }, [])
      
    return (
        <div className='asset-wrapper'>
            <div className='asset-prof-main'>
                <div className='back'>
                    <BiArrowBack/>
                </div>
                <div className='profile-main'>
                    <h2 className='asset-prof-title'>ASSET PROFILE</h2>
                    <img src={require("../assets/images/spectre.jpeg")} className="asset-profile-img"/>
                     {
                        profile.map(val => (
                            
                        <div key={val} className='profile-info'>
                            <h3>{val.title}</h3>
                            <p>{val.serialnumber}</p>
                            <p>{val.price}</p>
                        </div>
                        ))
                     }
                     

                    <div className='profile-status'>
                    ASSIGNED
=======
  class Assetprofile extends Component{
      state ={
          asset: null
      }
      componentDidMount(){
          let id = this.props.match.params.asset_id;
          axios.get('/assets/' + id)
                .then(res => {
                    this.setState({
                        asset: res.data.data
                    })
                })
      }
    render () {
        const asset = this.state.asset ? (
            <div className='asset-wrapper'>
                <div className='asset-prof-main'>
                    <div className='back'>
                        <BiArrowBack/>
>>>>>>> b72456331f5d41b4dfd0554e622af25fdc57fc4a
                    </div>
                    <div className='profile-main'>
                        <h2 className='asset-prof-title'>ASSET PROFILE</h2>
                        <img src={require("../assets/images/spectre.jpeg")} className="asset-profile-img"/>
                        <div className='profile-info'>
                            <h3>{this.state.asset.title}</h3>
                            <p>{this.state.asset.serialnumber}</p>
                            <p>{this.state.asset.price}</p>
                        </div>
                        <div className='profile-status'>
                            ASSIGNED
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div className='asset-prof-card-main'>
                    <div id='card-item'>
                        <h3>NAME</h3>
                        <p>val.title</p>
                    </div>
                    <div id='card-item'>
                        <h3>SERIAL NUMBER</h3>
                        <p>val.serialnumber</p>
                    </div>
                    <div id='card-item'>
                        <h3>VALUE</h3>
                        <p>val.price</p>
                    </div>
                    <div id='card-item'>
                        <h3>DATE PURCHASED</h3>
                        <p>12/2/2022</p>
                    </div>
                    <div id='card-item'>
                        <h3>CURRENT STATUS</h3>
                        <p> val.status</p>
                    </div>
                    <div id='card-item'>
                        <h3>JOURNEY</h3>
                        <div id='list'>
                            <p>Susan Suzie</p>
                            <p>Susan Suzie</p>
                            <p>Susan Suzie</p>
                            <p>Susan Suzie</p>
                        </div>
                    </div>
                    <div id='card-item'>
                        <h3>COMPLAINTS</h3>
                        <div id='list'>
                            <div className='complain-details'>
                                <p>Faulty Charger</p>
                                <p>Suasn Suzie</p>
                            </div>
                            <div className='complain-details'>
                                <p>Faulty Charger</p>
                                <p>Suasn Suzie</p>
                            </div>
                            <div className='complain-details'>
                                <p>Faulty Charger</p>
                                <p>Suasn Suzie</p>
=======
                <div className='asset-prof-card'>
                    <div className='asset-prof-card-header'>
                        <h2>ASSET RECORD</h2>
                        <div className='edit'>
                            <BiEdit className='edit-icon'/>
                            <p>edit</p>
                        </div>
                    </div>
                    <div className='asset-prof-card-main'>
                        <div id='card-item'>
                            <h3>NAME</h3>
                            <p>HP SPECTRE</p>
                        </div>
                        <div id='card-item'>
                            <h3>SERIAL NUMBER</h3>
                            <p>Hp567bji768</p>
                        </div>
                        <div id='card-item'>
                            <h3>VALUE</h3>
                            <p>120,000</p>
                        </div>
                        <div id='card-item'>
                            <h3>DATE PURCHASED</h3>
                            <p>12/2/2022</p>
                        </div>
                        <div id='card-item'>
                            <h3>CURRENT STATUS</h3>
                            <p>ASSIGNED</p>
                        </div>
                        <div id='card-item'>
                            <h3>JOURNEY</h3>
                            <div id='list'>
                                <p>Susan Suzie</p>
                                <p>Susan Suzie</p>
                                <p>Susan Suzie</p>
                                <p>Susan Suzie</p>
>>>>>>> b72456331f5d41b4dfd0554e622af25fdc57fc4a
                            </div>
                        </div>
                        <div id='card-item' className='complaint'>
                            <h3>COMPLAINTS</h3>
                            <div id='list'>
                                <div className='complain-details'>
                                    <p>Faulty Charger</p>
                                    <p>Suasn Suzie</p>
                                </div>
                                <div className='complain-details'>
                                    <p>Faulty Charger</p>
                                    <p>Suasn Suzie</p>
                                </div>
                                <div className='complain-details'>
                                    <p>Faulty Charger</p>
                                    <p>Suasn Suzie</p>
                                </div>
                                <div className='complain-details'>
                                    <p>Faulty Charger</p>
                                    <p>Suasn Suzie</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='asset-prof-card-buttons'>
                        <button className='report'>
                            GENERATE REPORT
                        </button>
                        <button className='clear'>
                            CLEARED OFF
                        </button>
                    </div>
                </div>
            </div>
            
        ) : (
            <div>
                <h1>LOADING</h1>
            </div>
        )
        return (
            {asset}
    )    
    } 
    }
export default Assetprofile;
