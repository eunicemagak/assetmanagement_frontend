import React, {useState, useEffect} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {NavLink } from 'react-router-dom';
import '../assets/css/users.css';
import Addasset from './Addassets';
import axios from 'axios';


const Assets = ({val}) => {
  const[showComponent, setShowComponent] = useState(false);
  const [assets, setAssets] =  useState([]);
  const [departments, setDepartments] =  useState([]);
  const [toggleFilter, setToggleFilter] = useState(false);
  const toggleOptions = () => {
    setToggleFilter(!toggleFilter)
  }
  function getAllAssets(){
    axios.get('/assets', {
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
function getDepartments(){
      axios.get('/department', {
          responseType: 'json'
      }).then(response => {
          if(response.status === 200){
              setDepartments(response.data.data)
          } 
      })
    }
  
    useEffect(() => {
      getDepartments();
  }, [])
  return (
    
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
            <button className='filterusers' onClick={toggleOptions}>
              <p className='filterby'>
                FILTER BY
              </p>
              <FaFilter className='button-icon'/>
            </button>
          </div>
        </div>
        {(toggleFilter) && 
            <div className='options'>
                {
                    departments.map((val) => {
                      return(
              <option className='filter-options' onClick={toggleOptions}>{val.title}</option>
                  )})
                }
            </div>
        }
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
                    <td>{val.status}</td>
                  </tr>
                )})
              }
            </tbody>
          </table>
        </div>
        <div className='paganation'>
          <NavLink activeclassname='active' className='page' to='/assets'>
            1
          </NavLink>
          <NavLink activeClassName='active' className='page' to='/assets/2'>
            2
          </NavLink>
          <NavLink activeClassName='active' className='page' to='/assets/3'>
            3
          </NavLink>
          <NavLink activeClassName='active' className='page' to='/assets/4'>
            4
          </NavLink>
        </div>
      </div>
      </div>
  )
}

export default Assets;