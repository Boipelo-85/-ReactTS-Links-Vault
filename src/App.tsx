import { useEffect, useState } from 'react'

import './App.css'

import { FaLink } from 'react-icons/fa'
import { Header } from './components/Header/Header'

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
  const [notification, setNotification] = useState('')
  const [editLinks, setEditLinks] = useState<LinkAttribute | null>(null)
  // const [showAllLinks,setShowAllLinks] = useState(false)

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

  const handleRemove = (id: string) => {
    if (!window.confirm('Are you sure you want to remove this link row?')) {
      return
    }

    const savedLinks = localStorage.getItem('links')
    const currentLinks: LinkAttribute[] = savedLinks ? JSON.parse(savedLinks) : []
    const updatedLinks = currentLinks.filter((link) => link.id !== id)

    localStorage.setItem('links', JSON.stringify(updatedLinks))
    setLinks(updatedLinks)
    setNotification('Link removed successfully')

    window.setTimeout(() => {
      setNotification('')
    }, 3000)
    
  }

  const handleEdit = (id : string, tittle : string, url : string ,description : string , tags?:string ) => {

      const handleAddLink = links.map((updated) => {

              if(updated.id === id){

                    const updatedLinks: LinkAttribute = {

                          id : updated.id,
                          title:updated.title,
                          url : updated.url,
                          description : updated.description,
                          tags : updated.tags

                    }

                    return updatedLinks
              }else {

                  return updated
              }

      })

      setLinks(handleAddLink)
      localStorage.setItem("links",JSON.stringify(handleAddLink))
      setShowForm(false)
      setEditLinks(null)
      setNotification('Link updated!')

  }
  const SearchLinkInfo =() => {

      if(search.length==0){

          return links
      }

      const keyWord = search.toLocaleLowerCase().trim()

      return links.filter((attribute) => 
    
          attribute.title.toLowerCase().includes(keyWord) || 
          attribute.url.toLowerCase().includes(keyWord) ||
          attribute.description.toLowerCase().includes(keyWord)||
          (attribute.tags ? attribute.tags?.toLowerCase().includes(keyWord) : false)

          
          
    )
  }

  if (showForm)
      if(editLinks) {

          // <LinkForm 
          //   onAdd={}
          // />


      }
const searItems = SearchLinkInfo()

  return (
    <div id='app-container'>
      <div className='Project-Name'>
        <span className='icon-styles'>
          <FaLink />
        </span>
        <span className='icon-name'> Link-Vault</span>
      </div>

      <div id='main-content'>
        <Header value={search} onWordChange={setSearch} onAddClick={() => setShowForm(true)} />

        <div id='mid-content'>
          <div id='card-table'>
               {/* <LinkCard links={searItems} onRemove={handleRemove} onEdit={handleEdit}  /> */}

          </div>

        </div>
        
        {/* <div>
          <Hero />
        </div> */}

        <div id='mid-linkss'>
          <MidLinks onAddClick={() => setShowForm(true)}   />
        </div>

        {showForm && (
          <div
            className='link-form-overlay'
            role='presentation'
            onMouseDown={handleCloseForm}
          >
            <div
              className='link-form-dialog'
              role='dialog'
              aria-modal='true'
              aria-labelledby='link-form-title'
              onMouseDown={(event) => event.stopPropagation()}
            >
              

              <h2 id='link-form-title'>Add a link</h2>
             
              <LinkForm onAdd={handleAddLink} onClose={handleCloseForm} />

            </div>
            
          </div>
        )}
        {notification && (
          <p className='link-notification' role='status'>
            {notification}
          </p>
        )}
        <div>
        </div>
      </div>
    </div>
  )
}

export default App
