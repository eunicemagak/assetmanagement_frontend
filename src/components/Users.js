import React, { Component} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import '../assets/css/users.css';
import Adduser from './Adduser';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Users extends Component{
  
  constructor(props) {
    super(props);
  
    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      currentPage: 1,
      users: [],
      usersPerPage: 10
    };
  }
  
  componentDidMount (){
    axios.get('/users')
      .then(res => {
        console.log(res.data)
        this.setState({
          users: res.data
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


render () {

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
        <tbody key={user.ID}>
          <Link to={'/users/' + user.ID}>
            <tr>
              <td>{user.ID}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.departments[0].title}</td>
              <td>{user.assets[0].title}</td>
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



