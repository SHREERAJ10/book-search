import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div className="border border-white p-4 rounded-3xl w-96 flex justify-between bg-neutral-800 group focus-within:bg-gray-800">
        <input type="text" placeholder="Search for books..." className="outline-none placeholder:font-extralight placeholder:text-gray-300"/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-violet-300 text-lg cursor-pointer" />

    </div>
  )
}

export default SearchBar