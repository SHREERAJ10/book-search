import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function SearchBar({searchTerm, setSearchTerm, setFetchData}) {

  function handleSearch(){
    if(searchTerm.trim() != ""){
      setFetchData(true);
    }
  }

  return (
    <div className="border border-white px-4 py-3 rounded-2xl lg:w-[400px] w-[90vw] flex justify-between bg-neutral-800 group focus-within:bg-gray-800">
        <input type="text" placeholder="Search for books..." className="outline-none placeholder:font-extralight placeholder:text-gray-400 w-[95%]" value={searchTerm} onChange={e=> setSearchTerm(e.target.value)}  onKeyDown={(e)=>
          {if(e.key==='Enter'){
            handleSearch();
          }}} />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[#a18cb6] px-2 text-lg cursor-pointer" onClick={handleSearch}/>

    </div>
  )
}

export default SearchBar