import React, {useState} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {Link } from 'react-router-dom';
import '../assets/css/users.css';
import Addasset from './Addassets';


const Assets = () => {;
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
      {showComponent && <Addasset closeComponent={setShowComponent}/>}
      <div className='users-wrapper'>
        <div className='users-header'>
          <h2 className='users-title'>
              ALL ASSETS
          </h2>
          <div className='users-buttons'>
            <button className='addusers'onClick={() => setShowComponent(true)}> 
              <IoMdAddCircle size='calc(1vw + .5vw)'/>
              <p className='adduser'>
                ADD NEW ASSET
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
                <th>Serial Number</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Hp Spectre</td>
                <td>Hp2345hd76</td>
                <td>120,000</td>
                <td>
                  <div className='pill green'>
                    assigned
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dell</td>
                <td>De457ib78v3</td>
                <td>50,000</td>
                <td>
                  <div className='pill purple'>
                    unassigned
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hp Notebook</td>
                <td>Hp4546nb78</td>
                <td>65,000</td>
                <td>
                  <div className='pill red'>
                    damaged
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lenovo Thinkpad</td>
                <td>Le5670tp57</td>
                <td>80,000</td>
                <td>
                  <div className='pill blue'>
                    cleared
                  </div>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Hp Spectre</td>
                <td>Hp2345hd76</td>
                <td>120,000</td>
                <td>
                  <div className='pill green'>
                    assigned
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dell</td>
                <td>De457ib78v3</td>
                <td>50,000</td>
                <td>
                  <div className='pill purple'>
                    unassigned
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hp Notebook</td>
                <td>Hp4546nb78</td>
                <td>65,000</td>
                <td>
                  <div className='pill red'>
                    damaged
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lenovo Thinkpad</td>
                <td>Le5670tp57</td>
                <td>80,000</td>
                <td>
                  <div className='pill blue'>
                    cleared
                  </div>
                </td>
              </tr><tr>
                <td>1</td>
                <td>Hp Spectre</td>
                <td>Hp2345hd76</td>
                <td>120,000</td>
                <td>
                  <div className='pill green'>
                    assigned
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dell</td>
                <td>De457ib78v3</td>
                <td>50,000</td>
                <td>
                  <div className='pill purple'>
                    unassigned
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hp Notebook</td>
                <td>Hp4546nb78</td>
                <td>65,000</td>
                <td>
                  <div className='pill red'>
                    damaged
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lenovo Thinkpad</td>
                <td>Le5670tp57</td>
                <td>80,000</td>
                <td>
                  <div className='pill blue'>
                    cleared
                  </div>
                </td>
              </tr><tr>
                <td>1</td>
                <td>Hp Spectre</td>
                <td>Hp2345hd76</td>
                <td>120,000</td>
                <td>
                  <div className='pill green'>
                    assigned
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dell</td>
                <td>De457ib78v3</td>
                <td>50,000</td>
                <td>
                  <div className='pill purple'>
                    unassigned
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hp Notebook</td>
                <td>Hp4546nb78</td>
                <td>65,000</td>
                <td>
                  <div className='pill red'>
                    damaged
                  </div>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lenovo Thinkpad</td>
                <td>Le5670tp57</td>
                <td>80,000</td>
                <td>
                  <div className='pill blue'>
                    cleared
                  </div>
                </td>
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

export default Assets;



