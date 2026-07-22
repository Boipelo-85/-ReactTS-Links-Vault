import { useEffect, useState } from 'react'

import './App.css'
import { Text } from './components/Text/Text'
import { FaLink } from 'react-icons/fa'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { MidLinks } from './components/Mid-links/MidLinks'
import { LinkForm } from './components/LinkForm/LinkForm'
import type { LinkAttribute } from './components/Types/Link'
import { LinkCard } from './components/LinkCard/LinkCard';

function App() {

  const [search, setSearch] = useState('')

  const [links, setLinks] = useState<LinkAttribute[]>(() => {
    const savedLinks = localStorage.getItem('links')
    return savedLinks ? JSON.parse(savedLinks) : []
  })

  const [showForm, setShowForm] = useState(false)
  const [showAllLinks,setShowAllLinks] = useState(false)

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links))
  }, [links])

  const handleAddLink = (newLink: LinkAttribute) => {
    setLinks((prevLinks) => [...prevLinks, newLink])
    setShowForm(false)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }
  const handleCloseLinks = () => {
    setShowAllLinks(false)
  }
  return (
    <div id='app-container'>
      <div className='Project-Name'>
        <span className='icon-styles'>
          <FaLink />
        </span>
        <span className='icon-name'> Link-Vault</span>
      </div>

      <div id='main-content'>
        <Header value={search} onWordChange={setSearch} />

        <div id='mid-content'>
          <Text variant={'h1'}>Boipelo Motileng</Text>
        </div>
        <div>
          <Hero />
        </div>
        <div id='mid-linkss'>
          <MidLinks onAddClick={() => setShowForm(true)}   allDisplayLinks={() => setShowAllLinks(true)} />
        </div>

        <div>

          {showForm && <LinkForm onAdd={handleAddLink} onClose={handleCloseForm} />}

        </div>
        <div>
            { showAllLinks && <LinkCard  />}

        </div>

      </div>
    </div>
  )
}

export default App
