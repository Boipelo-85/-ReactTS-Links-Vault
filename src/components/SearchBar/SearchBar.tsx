import React from 'react'

import { FaLink } from 'react-icons/fa';
import { Text } from '../Text/Text';

type SearchProp = {

    value : string,
    onChange : (value : string)  => void;
    onAddClick: () => void
}
export const SearchBar :React.FC<SearchProp> = ({value,onChange,onAddClick}) => {
  return (
    <div>

            <nav className='nav'>
            <div className='Heading-items'>
                <div>
                    <span> <FaLink /> </span>
                    <span style={{fontFamily:'Great Vibes',fontWeight: 'bold',color : '#fdfdfd'}}> Link-Vault  </span>
                </div>

                 {/* <div className='homeName'>
                    <a href="#hero" style={{color: '#fdfdfd',fontSize: 25}}>Home</a>
                </div> */}

            </div>

            <div className='searchBar-content'>
                {/* <Text variant={'span'} style={{color:'white',padding: 10}}>Search</Text> */}
                <input type="text" className='input-search' placeholder='Search for a link' value={value} onChange={(e) => onChange(e.target.value)} />
                 <button type='button' className='add-button' onClick={onAddClick}>Add Link </button>
            </div>
 
        </nav>
    </div>
  )
}
