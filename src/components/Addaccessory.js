import React, {useState, useEffect} from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';

const Addcategory = ({handleClose, show}) => {  
  const [categories, setCategories] =  useState([]);
  const [title, setTitle]= useState()
  const [serialnumber, setSerialnumber] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [val, setCategory] = useState()
  const [purchase_date, setPurchase_date] =useState()
    function submit(e) {
      e.preventDefault();
      axios.post("/assets", {
        title: title,
        serialnumber: serialnumber,
        price: price,
        categorie_id:parseInt(val),
        description: description,
        purchase_date: purchase_date
      })
    .then(res => {
      console.log(res.data)
      window.location.href = "../Accessories";
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
          <h3>ADD NEW ACCESSORY</h3>
          <button className='close'onClick={handleClose}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <form onSubmit={(e) => submit(e)}>
          <div className='email'>
              <h4>ACCESSORY NAME</h4>
              <input type='text' required placeholder='asset name' onChange={(e) => setTitle(e.target.value)} id="title" value={title}/>
            </div>
            <div className='username'>
              <h4>SERIAL NUMBER</h4>
              <input type='text' required placeholder='serial number' onChange={(e) => setSerialnumber(e.target.value)} id="serialnumber" value={serialnumber}/>
            </div>
            <div className='password'>
              <h4>PRICE</h4>
              <input type='number' required placeholder='price' onChange={(e) => setPrice(e.target.value)} id="price" value={price}/>
            </div>
            <div className='password'>
              <h4>DATE PURCHASED</h4>
              <input type='date' required placeholder='price' onChange={(e) => setPurchase_date(e.target.value)} id="purchase_date" value={purchase_date}/>
            </div>
            <div className='assign-assets'>
              <h4>CATEGORY</h4>
              <select required onChange={(e) => setCategory(e.target.value)} > 
                <option disabled selected value="">select category</option>
                {
              categories.map((val) => {
                return(
                <option id="category" value={val.ID}>{val.title}</option>
                                )})
                              }
              </select>
            </div>
            <div className='accessories'>
              <h4>DESCRIPTION</h4>
              <input type='text' required placeholder='give more info' onChange={(e) => setDescription(e.target.value)} id="description" value={description}/>
            </div>
            <button className='createuser'>
              ADD ACCESSORY
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Addcategory