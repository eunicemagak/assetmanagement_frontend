import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import React, { useState,useEffect } from 'react';
import SearchInput from './SearchInput';
import axios from 'axios'


const Nav = () => {
  const [alldata, setAllData]= useState([]);
  const[search, setSearch]=useState('');
  const [searchParam]= useState(["title"])
  const getAllData = (search) => {
    axios.get(`https://asset.rnd.emalify.com/api/v1/${search}`, {
        responseType: 'json'
    }).then(response => {
        if (response.status === 200) {
            console.log(response.data)
            setAllData(response.data)
        }
    })
}
useEffect(() => {
    if (search) {
        getAllData(search);

    }
}, [search])
function Search(alldata){


return alldata.filter((data)=>{
  return searchParam.some((newData)=>{
    return(
      data[newData]
      .toString()
      .toLowerCase()
      .indexOf(search.toLowerCase()) > -1
    )
  })
})
}
  return (
  
    <div className='nav-wrapper'>
    <div className='nav-wrapper' id='fixed'>
      <img className='nav-logo' 
        src={require("../assets/images/logoblue.png")}alt=''> 
      </img>
      <ul className='nav'>
        <li>
            <SearchInput  search={search} setSearch={setSearch}/>
            <FaSearch  className='nav-icon' />   
        </li>
    
        <li>
          <FaBell  className='nav-icon'/>
        </li>
        <li>
          <FaUser  className='nav-icon'/>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Nav
