import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
export default function SearchInput() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`https://asset.rnd.emalify.com/api/v1`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <>
            <Nav input={searchInput}
                onChange={(e) => searchItems(e.target.value)}
            />
            
        </>
    )
}