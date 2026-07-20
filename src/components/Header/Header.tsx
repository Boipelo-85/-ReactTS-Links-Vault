import React from 'react'
import { FaLink } from 'react-icons/fa'
import { Button } from '../Button'


export const Header = () => {
    return (

        <nav className='nav'>
            <div className='Heading-items'>
                <div>
                    <span> <FaLink /> </span>
                    <span> Link-Vault Solutions  </span>
                </div>
            </div>

            <div className='links-content'>

                <a href="#hero" className='link'>Home</a>
                <a href="" className='link'>Service</a>
                <a href="#" className='link'>About Us</a>
                <a href="#" className='link'>Contact Us</a>
            </div>

            <div className='button-component'>

                <Button label='Sign in '
                      type='button'
                      variant='primary'
                      size='small'
                    ></Button>

            </div>
        </nav>
    )
}
