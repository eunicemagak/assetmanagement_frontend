import React, { Component} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import {NavLink } from 'react-router-dom';
import '../assets/css/users.css';
import Adduser from './Adduser';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';


class Users extends Component{
  
  constructor(props) {
    super(props);
  
    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      users: [],
      currentPage: 1,
      assetsPerPage: 12
    };
  }
  
  componentDidMount (){
    axios.get('/users')
  
      .then(res => {
        console.log(res.data.data)
        this.setState({
          users: res.data.data
        })
      })
    }
    
    modalOpen() {
      this.setState({ modal: true });
    }
  
    modalClose() {
      this.setState({
        modalInputName: "",
        modal: false
      });
    }
// function getStatus(){
//       axios.get('/status', {
//           responseType: 'json'
//       }).then(response => {
//           if(response.status === 200){
//               setStatus(response.data.data)
//               console.log((response.data).length)
//           } 
//       })
//     }
  
//     useEffect(() => {
//       getStatus();
//   }, [])

render () {
  // const[showComponent, setShowComponent] = useState(false);
  // const [status, setStatus] =  useState([]);
  // const [toggleFilter, setToggleFilter] = useState(false);
  // const toggleOptions = () => {
  //   setToggleFilter(!toggleFilter)
  // }
  const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
  const indexOfFirstUsers = indexOfLastUser - this.state.usersPerPage;
  const currentUsers = this.state.users.slice(indexOfFirstUsers, indexOfLastUser);

  //Implement page numbers
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(this.state.users.length / this.state.usersPerPage); i++) {
    pageNumbers.push(i);
}

//Set current page
const setPage = (pageNum) => {
  this.setState({currentPage: pageNum})
}

  const { users } = this.state;
  const usersList = users.length ? (
    currentUsers.map(user => {
      return (
        <tbody key={user.id}>
          <Link to={'/users/' + user.ID}>
            <tr>
              <td>{user.ID}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>{user.asset}</td>
            </tr>
          </Link> 
        </tbody>
      )
    })
  ) : (
    <div className="center">
      <p>No Users</p>
    </div>
  )

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
      <Adduser show={this.state.modal} handleClose={(e) => this.modalClose(e)}/>
      <div className='users-wrapper'>
        <div className='users-header'>
          <h2 className='users-title'>
              ALL USERS
          </h2>
          <div className='users-buttons'>
            <button className='addusers' onClick={(e) => this.modalOpen(e)}>
              <IoMdAddCircle className='button-icon'/>
              <p className='adduser'>
                ADD NEW USER
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
        {/* {(toggleFilter) && 
            <div className='options'>
                {
                    status.map((val) => {
                      return(
              <option className='filter-options' onClick={toggleOptions}>{val.status}</option>
                  )})
                }
            </div>
        } */}
        <div className='table'>
          <table>
            <thead>
            <Link to=''>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Department</th>
                <th>Assigned Asset</th>
              </tr>
              </Link>
            </thead>
              {usersList}
          </table>
        </div>
        <div className='pagination'>
        {
            pageNumbers.map((pageNum, index) => (
              <span key={index} 
                className={pageNum === this.state.currentPage 
                ? "currentPg" 
                : "otherPgs"} 
              
                onClick={() => {setPage(pageNum)}}>

                {pageNum}

              </span>
            ))
          }
        </div>
      </div>
      </div>
  )
}
}
  
export default Users;



