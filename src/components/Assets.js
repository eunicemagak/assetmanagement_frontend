import React, {useState, useEffect} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {Link } from 'react-router-dom';
import '../assets/css/users.css';
import Addasset from './Addassets';
import axios from 'axios';


const Assets = () => {;
  const[showComponent, setShowComponent] = useState(false);
  const [assets, setAssets] =  useState([]);

  // const [refreshData, setRefreshData] = useState(false)
  function getAllAssets(){
   
    var url = 'http://localhost:8000/api/v1/assets'
    axios.get(url, {
        responseType: 'json'
    }).then(response => {
        if(response.status === 200){
            setAssets(response.data.data)
        }
    })
  }

  useEffect(() => {
    getAllAssets();
}, [])
  return (
    /**
     * *All users pages, listing all current users in the system
     * *System admin can add new users to the database via the ADD USER button
     * TODO: implement filter users by department functionality
     * TODO: connet to DB to get all adta straight from the database
     * TODO: work on linking each user to their user profile
     * TODO: work on the popup module display {done}
     */
    <div>
      {showComponent && <Addasset closeComponent={setShowComponent}/>}
      <div className='users-wrapper'>
        <div className='users-header'>
          <h2 className='users-title'>
              ALL ASSETS
          </h2>
          <div className='users-buttons'>
            <button className='addusers' onClick={() => setShowComponent(true)}> 
              <IoMdAddCircle className='button-icon'/>
              <p className='adduser'>
                ADD NEW ASSET
              </p>
            </button>
            <button className='filterusers'>
              <p className='filterby'>
                FILTER BY
              </p>
              <FaFilter className='button-icon'/>
            </button>
          </div>
        </div>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Serial Number</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {
              assets.map((val) => {
                return(
                  <tr key={val}>
                     <td>{val.ID}</td>
                  <td>{val.title}</td>
                  <td>{val.serialnumber}</td>
                  <td>{val.price}</td>
                  <td className='pill green'>{val.price}</td> 
                  </tr>
                )})
              }

            </tbody>
          </table>
        </div>
        <div className='paganation'>
          <Link activeclassname='onpage' className='page' to='/users'>
            1
          </Link>
          <Link activeClassName='onpage' className='page' to='/users/2'>
            2
          </Link>
          <Link activeClassName='onpage' className='page' to='/users/3'>
            3
          </Link>
          <Link activeClassName='onpage' className='page' to='/users/4'>
            4
          </Link>
        </div>
      </div>
      </div>
  )
}

export default Assets;



