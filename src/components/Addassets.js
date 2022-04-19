import React, {useState, useEffect} from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

const Addasset = ({handleClose, show}) => {  
const [categories, setCategories] =  useState([]);
  const [data, setData] = useState ({
    title: "",
    serialnumber: "",
    price: "",
    category: "",
    description: "" 
  })
  function submit(e) {
    e.preventDefault();
    axios.post("/assets", {
      title: data.title,
      serialnumber: data.serialnumber,
      price: data.price,
      category: data.categorie_id,
      description: data.description
    })
    .then(res => {
      console.log(res.data)
      window.location.href = "../Assets";
    })
  }
  function getAllCategories(){
        axios.get('/categories', {
            responseType: 'json'
        }).then(response => {
            if(response.status === 200){
                setCategories(response.data)
            }
        })
      }
    
      useEffect(() => {
        getAllCategories();
    }, [])
    const popup = show ? "popup display-block" : "popup display-none";
  function handle(e) {
    const newdata ={ ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }
  
  return (
    /**
     * *Add new user interface with a form to capture user details
     * *This will play off as a popup module on the ALL USERS page and once all fields are inserted, redirect back to ALL USERS page
     * TODO: implement add user functionality
     * TODO: connet to DB to push new user details to DB
     */
    <div>
      <div className={popup}>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>ADD NEW ASSET</h3>
          <button className='close'onClick={handleClose}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <form onSubmit={(e) => submit(e)}>
            <div className='email'>
              <h4>ASSET NAME</h4>
              <input type='text' required placeholder='asset name' onChange={(e) => handle(e)} id="title" value={data.title}/>
            </div>
            <div className='username'>
              <h4>SERIAL NUMBER</h4>
              <input type='text' required placeholder='serial number' onChange={(e) => handle(e)} id="serialnumber" value={data.serialnumber}/>
            </div>
            <div className='password'>
              <h4>PRICE</h4>
              <input type='number' required placeholder='price' onChange={(e) => handle(e)} id="price" value={data.price}/>
            </div>
            <div className='password'>
              <h4>DATE PURCHASED</h4>
              <input type='date' required placeholder='price' onChange={(e) => handle(e)} id="purchase_date" value={data.purchase_date}/>
            </div>
            <div className='assign-assets'>
              <h4>CATEGORY</h4>
              <select required>
                <option disabled selected value="">select category</option>
                {
              categories.map((val) => {
                return(
                <option onChange={(e) => handle(e)} id="category" value={data.category}>{val.title}</option>
                                )})
                              }
              </select>
            </div>
            <div className='accessories'>
              <h4>DESCRIPTION</h4>
              <input type='text' required placeholder='give more info' onChange={(e) => handle(e)} id="description" value={data.description}/>
            </div>
            <button className='createuser'>
              ADD ASSET
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Addasset


// function getDepartment(){
//       axios.get('/department', {
//           responseType: 'json'
//       }).then(response => {
//           if(response.status === 200){
//               setDepartment(response.data.data)
//           } 
//       })
//     }
  
//     useEffect(() => {
//       getDepartment();
//   }, [])