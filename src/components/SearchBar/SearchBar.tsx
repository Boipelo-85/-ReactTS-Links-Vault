import React from 'react'
import searchBar from '../../assets/searchbar.png'
import { FaLink } from 'react-icons/fa';

type SearchProp = {

    value : string,
    onChange : (value : string)  => void;

}
export const SearchBar :React.FC<SearchProp> = ({value,onChange}) => {
  return (
    <div>

            <nav className='nav'>
            <div className='Heading-items'>
                <div>
                    <span> <FaLink /> </span>
                    <span> Link-Vault Solutions  </span>
                </div>
            </div>

            <div className='searchBar-content'>
                <img src={searchBar} className='search' alt="Search icon" />
                <input type="text" className='input-search' placeholder='Search for a link' value={value} onChange={(e) => onChange(e.target.value)} />
            </div>

        </nav>
    </div>
  )
}
