import React from 'react'
import { FaLink } from 'react-icons/fa'


export const Header = () => {
  return (
    
        <nav className='nav'>
            <div className='Heading-items'>
                <span className='icon-styles'>

                    <FaLink />
                </span>
                <span className='icon-name'> Link-Vault</span>
            </div>
        </nav>
  )
}
