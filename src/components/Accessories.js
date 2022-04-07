import React, {Component} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import '../assets/css/users.css';
import Addaccessory from './Addaccessory';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Assets extends Component{
  
  constructor(props) {
    super(props);
  
    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      currentPage: 1,
      accessories: [],
      accessoriesPerPage: 12
    };
  }
  
  componentDidMount (){
    axios.get('/accessories')
      .then(res => {
        this.setState({
          accessories: res.data.data
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

  //Get currentAssets
  const indexOfLastAccessory = this.state.currentPage * this.state.accessoriesPerPage;
  const indexOfFirstAccessories = indexOfLastAccessory- this.state.accessoriesPerPage;
  const currentAccessories = this.state.accessories.slice(indexOfFirstAccessories, indexOfLastAccessory);

  //Implement page numbers
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(this.state.accessories.length / this.state.accessoriesPerPage); i++) {
    pageNumbers.push(i);
}

//Set current page
const setPage = (pageNum) => {
  this.setState({currentPage: pageNum})
}


  const { accessories } = this.state;
  const accessoriesList = accessories.length ? (
    currentAccessories.map(accessory => {
      return (
        <tbody key={accessory.id}>
          <Link to={'/accessories/' + accessory.ID}>
            <tr>
              <td>{accessory.ID}</td>
              <td>{accessory.title}</td>
              <td>{accessory.serialnumber}</td>
              <td>KES {accessory.price}</td>
              <td>{accessory.is_assigned ? <span className='pill blue'>ASSIGNED</span> : <span className='pill purple'>UNASSIGNED</span>}</td>
            </tr>
          </Link> 
        </tbody>
      )
    })
  ) : (
    <div className="center">
      <p>loading</p>
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
      <Addaccessory show={this.state.modal} handleClose={(e) => this.modalClose(e)}/>
      <div className='users-wrapper'>
        <div className='users-header'>
          <h2 className='users-title'>
              ALL ACCESSORIES
          </h2>
          <div className='users-buttons'>
            <button className='addusers' onClick={(e) => this.modalOpen(e)}>
              <IoMdAddCircle className='button-icon'/>
              <p className='adduser'>
                ADD NEW ACCESSORY
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
                <th>Serial Number</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
              </Link>
            </thead>
              {accessoriesList}
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
  
export default Assets;



