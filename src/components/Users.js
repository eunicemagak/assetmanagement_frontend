import React, {useState} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {Link } from 'react-router-dom';
import '../assets/css/users.css';
import Adduser from './Adduser';


const Users = () => {;
  const[showComponent, setShowComponent] = useState(false);
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



