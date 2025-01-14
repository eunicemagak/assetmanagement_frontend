import React, {useState, useEffect} from 'react'
import { IoIosLaptop } from 'react-icons/io'
import { BsCheckCircle} from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { RiMessage2Line } from 'react-icons/ri'
import axios from 'axios';

const Admindash = ()   => {
  const [admin, setAdmin] = useState([]);
  const [assets, setAssets] =  useState([]);
  function getAllAssetTotal(){
    axios.get('/assets', {
        responseType: 'json'
    }).then(response => {
        if(response.status === 200){
              console.log(response.data)
            setAssets(response.data)
        } 
    })
  }

  useEffect(() => {
    getAllAssetTotal();
}, [])

  function getAdmin(){
    axios.get('/admin', {
      responseType: 'json'
    }).then(response => {
      if(response.status === 200){
        console.log(response.data)
        setAdmin(response.data)
      }
    })
  }
  useEffect(() => {
    getAdmin();
  }, [])
  const assignedAsset = assets.filter(asset => asset.is_assigned === true)
  const unassignedAsset = assets.filter(asset => asset.is_assigned === false)
  // const unassignedAssets = assets.filter( asset =>  asset.is_assigned = false)
  // const assignedAssets = assets.filter( asset =>  asset.is_assigned = true)
  return (
    /**
     * * Admin dashboard on login with basic informative widgets on current system state
     * ? Do we need to add functionality to the widgets?
     * TODO: implement counter for all widgets to get information from DB
     */
        <div className='main'>
        {
          admin.map((val) => {
            return(
          <div className='welcome'>
                  <h2>WELCOME {val.first_name}</h2>
            <p>Use this asset management portal to manage, assign and record all company assets for better convinience</p>
          </div>
          )
        })
      }
          <div className='widget'>
            <div className='data'>
              <h1>{assets.length}</h1>
              <p>total assets</p>
            </div>
            <IoIosLaptop  className='widget-img'/>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>{assignedAsset.length}</h1>
              <p>assigned assets</p>
            </div>
            <BsCheckCircle  className='widget-img'/>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>{unassignedAsset.length}</h1>
              <p>unassigned assets</p>
            </div>
            <ImCross  className='widget-img'/>
          </div>
          <div className='widget'>
            <div className='data'>
              <h1>0</h1>
              <p>new complaints</p>
            </div>
            <RiMessage2Line  className='widget-img'/>
          </div>
          
        </div>
  )
}

export default Admindash
