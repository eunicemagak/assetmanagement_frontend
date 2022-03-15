import { FaBell, FaUser, FaSearch } from "react-icons/fa";
import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Nav = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://asset.rnd.emalify.com/api/v1")
    .then(response =>{
      if(response.status === 200){
         setItems(response.data.data)
            }
  }) 
    }, [])

  return (
    
    <div className='nav-wrapper'>
    <div className='nav-wrapper' id='fixed'>
      <img className='nav-logo' 
        src={require("../assets/images/logoblue.png")}alt=''> 
      </img>
      <ul className='nav'>
        <li>
          <FaSearch  className='nav-icon' />
         
        </li>
        <input value={search} onChange={(event) => setSearch(event.target.value)} />
        { items.filter(item=>{
          if (items==="") {
            return item;
          }else if(item.title.toLowerCase().includes(items.toLowerCase())){
            return item;
          }
        }).map((item, ID)=>(
          <div key={ID}>
            {item.title}
            {item.department}
          </div>
        )
        )}
        
        
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
