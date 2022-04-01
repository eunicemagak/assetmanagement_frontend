import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Assets from './components/Assets';

const SearchPage = () => {
  const [input, setInput] = useState('');
  const [assetsListDefault, setAssetsListDefault] = useState();
  const [assetsList, setAssetsList] = useState();

  const fetchData = async () => {
    return await fetch('https://asset.rnd.emalify.com/api/v1')
      .then(response => response.json())
      .then(data => {
         setAssetsList(data) 
         setAssetsListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = assetsListDefault.filter(asset => {
      return asset.title.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setAssetsList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      
      <Nav 
       input={input} 
       onChange={updateInput}
      />
      <Assets assetsList={assetsList}/>
    </>
   );
}

export default SearchPage