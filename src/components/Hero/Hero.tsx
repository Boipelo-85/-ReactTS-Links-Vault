

import { Text } from '../Text/Text'
import webDev from '../../assets/web.jpg'

export const Hero = () => {
    return (

        <div className='hero-section'>

            <div  className='hero-content'>

                <Text variant={'h3'}> Hi there </Text>
                <Text variant={'h1'} style={{fontSize: 30}}> This is a Links-Vault Site. </Text>
                <p>
                    It allows users to save, organize and manage
                    their favorite links/websites in one place —
                    similar to the bookmark feature in a browser,
                    but better because it can be accessed from
                    anywhere without being limited to one browser

                </p>

            </div>

            <div className='image-space'>
                <img src={webDev} alt="the hyperText Transfer Protocol picture" className='image' />
            </div>

        </div>
    )
}
