import React, {Component} from 'react'
import { FaFilter} from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import '../assets/css/users.css';
import Addasset from './Addassets';
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
      assets: [],
      assetsPerPage: 10
    };
  }
  
  componentDidMount (){
    axios.get('/assets')
      .then(res => {
        this.setState({
          assets: res.data
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
  const indexOfLastAsset = this.state.currentPage * this.state.assetsPerPage;
  const indexOfFirstAssets = indexOfLastAsset - this.state.assetsPerPage;
  const currentAssets = this.state.assets.slice(indexOfFirstAssets, indexOfLastAsset);

  //Implement page numbers
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(this.state.assets.length / this.state.assetsPerPage); i++) {
    pageNumbers.push(i);
}

//Set current page
const setPage = (pageNum) => {
  this.setState({currentPage: pageNum})
}



  const { assets } = this.state;
  const assetsList = assets.length ? (
    currentAssets.map(asset => {
      return (
        <tbody key={asset.id}>
          <Link to={'/assets/' + asset.id}>
            <tr>
              <td>{asset.id}</td>
              <td>{asset.title}</td>
              <td>{asset.serialnumber}</td>
              <td>KES {asset.price}</td>
              <td>{asset.is_assigned ? <span className='pill blue'>ASSIGNED</span> : <span className='pill purple'>UNASSIGNED</span>}</td>
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
    
    <div>
      <Addasset show={this.state.modal} handleClose={(e) => this.modalClose(e)}/>
      <div className='users-wrapper'>
        <div className='users-header'>
          <h2 className='users-title'>
              ALL ASSETS
          </h2>
          <div className='users-buttons'>
            <button className='addusers' onClick={(e) => this.modalOpen(e)}>
              <IoMdAddCircle className='button-icon'/>
              <p className='adduser'>
                ADD NEW ASSET
              </p>
            </button>
            <div className='filter'>
            <button className='filterusers' >
              <p className='filterby'>
                FILTER BY
              </p>
              <FaFilter className='button-icon'/>
            </button>
    
            </div>
            
          </div>
        </div>
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
              {assetsList}
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



