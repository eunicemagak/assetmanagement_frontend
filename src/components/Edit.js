
import React, { useEffect, useState } from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';
import {useParams } from 'react-router-dom';

const Edit= ({closeSuspenduser}) => {
    const [categories, setCategories] =  useState([]);
  const [data, setData] = useState ({
    title: "",
    serialnumber: "",
    price: "",
    category: "",
    description: "" 
  })

  const [profile, setProfile] = useState([]);
        const {assetId } = useParams();
    
    
        const getAssetProfile = (assetId) => {
            axios.get(`/assets/${assetId}`, {
                responseType: 'json'
            }).then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    setProfile(response.data)
                }
            })
        }
        useEffect(() => {
            if (assetId) {
                getAssetProfile(assetId);
    
            } 
        }, [assetId])

        function submit(e) {
            e.preventDefault();
            axios.patch(`/assets/${assetId}`, {
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
                        setCategories(response.data.data)
                    }
                })
              }
            
              useEffect(() => {
                getAllCategories();
            }, [])
        function handle(e) {
            const newdata ={ ...data }
            newdata[e.target.id] = e.target.value
            setData(newdata)
            console.log(newdata)
          }
  return(
    <div>
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>EDIT ASSET</h3>
          <button className='close'onClick={() => closeSuspenduser(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <form onSubmit={(e) => submit(e)}>
            <div className='email'>
              <h4>ASSET NAME</h4>
              <input type='text' placeholder={profile.title} onChange={(e) => handle(e)} id="title" value={data.title}/>
            </div>
            <div className='username'>
              <h4>SERIAL NUMBER</h4>
              <input type='text' placeholder={profile.serialnumber} onChange={(e) => handle(e)} id="serialnumber" value={data.serialnumber}/>
            </div>
            <div className='password'>
              <h4>PRICE</h4>
              <input type='number' placeholder={profile.price} onChange={(e) => handle(e)} id="price" value={data.price}/>
            </div>
            <div className='password'>
              <h4>DATE PURCHASED</h4>
              <input type='date' onfocus="(this.type='date')" onblur="(this.type='text')" placeholder={profile.purchase_date} onChange={(e) => handle(e)} id="purchase_date" value={data.purchase_date}/>
            </div>
            <div className='assign-assets'>
              <h4>CATEGORY</h4>
              <select>
                <option disabled selected value="">{profile.categorie[0].title}</option>
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
              <input type='text' placeholder={profile.description} onChange={(e) => handle(e)} id="description" value={data.description}/>
            </div>
            <button className='createuser'>
              SAVE EDITS
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
          export default Edit