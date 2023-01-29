import { React, useState, useEffect } from 'react'
import './SearchItem.css'
import Papa from 'papaparse'

const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQYXSApn2EoWnjAYAIakDpEJbc6lkIZRm7J5BFoJHDdRW5IIOHFVoizhlylTE7R8eiBYxRZ8mC2lp1D/pub?gid=1775091775&single=true&output=csv";

function SearchItem() {
    const [csvData, setCsvData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        Papa.parse(csvUrl, {
            download: true,
            header: true,
            complete: (results) => {
                setCsvData(results.data);
            }
        });
    }, []);

    const handleSearch = event => {
        const searchValue = event.target.value;
        setSearchValue(searchValue);
    
        // filter the csvData based on searchValue
        const filteredData = csvData.filter(row => {
          // check if searchValue is present in any of the values of the row
          return Object.values(row).some(val => val.toLowerCase().includes(searchValue.toLowerCase()));
        });
    
        setSearchResults(filteredData);
      }
    
    if (csvData) {
        console.log(csvData);
        console.log(searchResults);
    }
    return (
        <div className='box'>
        <input type="text" value={searchValue} onChange={handleSearch} />
        <ul className='ulist'>
          {searchResults.map(row=> (
            <li className='list'>
             {row.symbol_details}
            </li>
          ))}
        </ul>
      </div>

       
    )
}

export default SearchItem