

import React, {useState, useEffect} from 'react'
import '../assets/css/popup.css';
import { IoIosCloseCircle } from "react-icons/io";
import axios from 'axios';
import {useParams } from 'react-router-dom';

const Adduser = ({closeComponent}) => {
  const [accessory, setAccessory] =  useState([]);
  const [assets, setAsset] =  useState([]);
  const [asset, setUserasset] = useState()
  const [res, setUseraccessory] = useState()
  const {assetId } = useParams();
  function submit(e) {
    e.preventDefault();
    axios.post(`/assets/${assetId}`, {
      asset_id:parseInt(asset),
      accesorie_id:parseInt(res),
    })
  .then(res => {
    console.log(res.data)
    // window.location.href = "../Users";
  })
}

    function getAllAsset(){
        axios.get('/assets', {
            responseType: 'json'
        }).then(response => {
            if(response.status === 200){
             setAsset(response.data)
            }
      })
    }
      
      useEffect(() => {
        getAllAsset();
    }, []);

    function getAllAccessory(){
          axios.get('/accessories', {
              responseType: 'json'
          }).then(response => {
              if(response.status === 200){
                  setAccessory(response.data)
              }
          })
        }
      
        useEffect(() => {
          getAllAccessory();
      }, []);
      const unassignedAsset = assets.filter(asset => asset.is_assigned === false)
      const unassignedAccessory = accessory.filter(accessorie => accessorie.is_assigned === false)
  return (
    <div>
    <div className='popup'>
      <div className='popup-content'>
        <div className='popupheader'>
          <h3>ASSIGN NEW ASSET</h3>
          <button className='close'onClick={() => closeComponent(false)}>
            <IoIosCloseCircle size='2rem' color='var(--gray)' className='closebtn'/>
          </button>
        </div>
        <div className='popup-main'>
          <form onSubmit={(e) => submit(e)}>
           
            <div className='assign-assets'>
            <h4>ASSIGN ASSET</h4>
              <select required onChange={(e) => setUserasset(e.target.value)} >
                <option disabled selected value="">select asset to assign</option>
            {
              unassignedAsset.map((asset) => {
                return(
                <option id="asset" value={asset.ID}>{asset.title}</option>
                                )})
                              }
              </select>
            </div>
            <div className='accessories'>
              <h4>ACCOMPANING ACCESSORIES</h4>
              <select onChange={(e) => setUseraccessory(e.target.value)} >
                <option disabled selected value="">select accompaning accessories</option>
            {
              unassignedAccessory.map((res) => {
                return(
                <option id="accessory" value={res.ID}>{res.title}</option>
               )})
            }
              </select>
            </div>
            <button className='assignasset'>
              ASSIGN ASSET
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Adduser
