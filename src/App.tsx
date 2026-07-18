import { useState } from 'react'

import './App.css'
import {Text} from './components/Text/Text'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div id='app-cointainer'>

        <div id='scrollable'>

              <Header />

        </div>
         
         <Text variant={'h1'}> Boipelo Motileng </Text>

         <div>
              <Footer />
         </div>
    </div>
  )
}

export default App
