import { useEffect, useState } from 'react'

import './App.css'

import { Header } from './components/Header/Header'

 
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
  const [editLinks , setEditLinks] = useState<LinkAttribute | null>(null)
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

    const updatedLinks = links.filter((link) => link.id !== id)
    setLinks(updatedLinks)
    setNotification('Link removed successfully')

    window.setTimeout(() => {
      setNotification('')
    }, 3000)
  }

  const handleOpenEdit = (id: string) => {
    const linkToEdit = links.find((link) => link.id === id)
    if (linkToEdit) {
      setEditLinks(linkToEdit)   
      setShowForm(true)          
    }
  }

  const handleEdit = (id: string, title: string, url: string, description: string, tags?: string) => {
    const updatedLinks = links.map((link) => {
      if (link.id === id) {
        return {
          id: link.id,
          title: title,
          url: url,
          description: description,
          tags: tags
        }
      }
      return link
    })
    setLinks(updatedLinks)
    setShowForm(false)
    setEditLinks(null)
    setNotification('✅ Link updated successfully!')
    setTimeout(() => setNotification(''), 3000)
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

const searItems = SearchLinkInfo()

  return (
    <div id='app-container'>
      <div className='Project-Name'>
       
      </div>

      <div id='main-content'>

        <div>
            <Header value={search} onWordChange={setSearch} onAddClick={() => setShowForm(true)} />
        </div>
        
        <div id='mid-content'>
          <div id='card-table'>
               <LinkCard   links={searItems} onRemove={handleRemove}  searchLinks={search}  onEdit={handleOpenEdit} />
          </div>

        </div>

        {notification && (
          <p className='link-notification' role='status'>
            {notification}
          </p>

        )}


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
              
              <h2 id='link-form-title'>{editLinks ? 'Edit link' : 'Add a link'}</h2>
             
              <LinkForm onAdd={handleAddLink} onEdit={handleEdit} onClose={handleCloseForm} editLink={editLinks}  />

            </div>
            
          </div>
        )}
        
        <div>
        </div>
      </div>
    </div>
  )
}

export default App
