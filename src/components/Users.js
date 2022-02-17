import React from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {Link } from 'react-router-dom';
import '../assets/css/users.css';
import Adduser from './Adduser';
import Popup from 'reactjs-popup';


const Users = () => {;
  return (
    <div>
      <div className='users-wrapper'>
        <div className='users-header'>
          <h1 className='users-title'>
              ALL USERS
          </h1>
          <div className='users-buttons'>
          <Popup trigger={
            <button className='addusers'> 
              <IoMdAddCircle size='1.5vw'/>
              <p className='adduser'>
                ADD NEW USER
              </p>
            </button>}
            modal
            nested
          >
            <Adduser/>
          </Popup>
            <button className='filterusers'>
              <p className='filterby'>
                FILTER BY
              </p>
              <FaFilter size='1.5vw'/>
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
              <tr>
                <td>1</td>
                <td>Tom Thomas</td>
                <td>user@roamtech.com</td>
                <td>TECH</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Susan Suzie</td>
                <td>user@roamtech.com</td>
                <td>FINANCE</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Charlie Charles</td>
                <td>user@roamtech.com</td>
                <td>MARKETING</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tom Thomas</td>
                <td>user@roamtech.com</td>
                <td>TECH</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Susan Suzie</td>
                <td>user@roamtech.com</td>
                <td>FINANCE</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Charlie Charles</td>
                <td>user@roamtech.com</td>
                <td>MARKETING</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tom Thomas</td>
                <td>user@roamtech.com</td>
                <td>TECH</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Susan Suzie</td>
                <td>user@roamtech.com</td>
                <td>FINANCE</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Charlie Charles</td>
                <td>user@roamtech.com</td>
                <td>MARKETING</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Tom Thomas</td>
                <td>user@roamtech.com</td>
                <td>TECH</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Susan Suzie</td>
                <td>user@roamtech.com</td>
                <td>FINANCE</td>
                <td>HP SPECTRE</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Charlie Charles</td>
                <td>user@roamtech.com</td>
                <td>MARKETING</td>
                <td>HP SPECTRE</td>
              </tr>
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



