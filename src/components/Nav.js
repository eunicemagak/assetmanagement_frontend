import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import React, { useState,useEffect } from 'react';
import SearchInput from './SearchInput';
import axios from 'axios'


const Nav = () => {
//   const [alldata, setAllData]= useState([]);
//   const[q, setQ]=useState('');
//   const [param, setParam]= useState(["title"]);
//   const getAllData = () => {
//     axios.get(`https://asset.rnd.emalify.com/api/v1`, {
//         responseType: 'json'
//     }).then(response => {
//         if (response.status === 200) {
//             console.log(response.data)
//             setAllData(response.data)
//         }
//     })
// }
// useEffect(() => {
//         getAllData();
// }, []);
// function search(rows){
// return rows.filter((row)=>
//    param.some((column)=>
//    row[column]
//       .toString()
//       .toLowerCase()
//       .indexOf(q.toLowerCase()) > -1,
//     ),
//   );

// }
  return (
  
    <div className='nav-wrapper'>
    <div className='nav-wrapper' id='fixed'>
      <img className='nav-logo' 
        src={require("../assets/images/logoblue.png")}alt=''> 
      </img>
      <ul className='nav'>
        <li>
            {/* <SearchInput  search={q} setSearch={setQ}/> */}
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
