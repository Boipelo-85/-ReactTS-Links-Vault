import { useState } from 'react'

import './App.css'
import { Text } from './components/Text/Text'
import { Footer } from './components/Footer/Footer'
import { FaLink } from 'react-icons/fa'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { MidLinks } from './components/Mid-links/midLinks'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div id='app-container'>

      <div className='Project-Name'>
        <span className='icon-styles'>
          <FaLink />
        </span>
        <span className='icon-name'> Link-Vault</span>
      </div>

      <div id='main-content'>
        <Header />

        <div id='mid-content'>
          <Text variant={'h1'}> Boipelo Motileng </Text>
        </div>
        <div>
              <Hero />
        </div>
        <div id='mid-linkss'>

              <MidLinks />
        </div>

      </div>
    </div>
  )
}

export default App
