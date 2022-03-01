
import React, {useEffect, useState} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {Link } from 'react-router-dom';
import '../assets/css/users.css';
import Adduser from './Adduser';


const Users = ({val}) => {
  const[showComponent, setShowComponent] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch('https://localhost:8000/api/v1/users');
    const finalResult = await res.json();
    setUsers(finalResult);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
    {showComponent && <Adduser closeComponent={setShowComponent}/>}
    <div className='users-wrapper'>
      <div className='users-header'>
        <h2 className='users-title'>
            ALL USERS
        </h2>
        <div className='users-buttons'>
          <button className='addusers' onClick={() => setShowComponent(true)}> 
            <IoMdAddCircle size='calc(1vw + .5vw)'/>
            <p className='adduser'>
              ADD NEW USER
            </p>
          </button>
          <button className='filterusers'>
            <p className='filterby'>
              FILTER BY
            </p>
            <FaFilter size='calc(1vw + .5vw)'/>
          </button>
        </div>
      </div>
     
<div className='table'>
          <table>
            <thead>
              <tr>
              <th>#</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Department</th>
                <th>Assigned Asset</th>
              </tr>
            </thead>
            <tbody>
            {
                users.map((val)=>{
            return(
              <tr key={val}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.phone}</td>
                <td>Department</td>
                <td>Assigned Asset</td>
                
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

export default Users;