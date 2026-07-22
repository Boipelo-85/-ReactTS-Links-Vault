import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import type { LinkAttribute } from '../Types/Link'

type addProp = {
  onAdd: (link: LinkAttribute) => void
  onClose?: () => void
}

export const LinkForm: React.FC<addProp> = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState(() => localStorage.getItem('link-form.title') || '')
  const [url, setUrl] = useState(() => localStorage.getItem('link-form.url') || '')
  const [description, setDescription] = useState(() => localStorage.getItem('link-form.description') || '')
  const [tags, setTags] = useState(() => localStorage.getItem('link-form.tags') || 'work')
  const [error, setError] = useState('')

  useEffect(() => {
    localStorage.setItem('link-form.title', title)
    localStorage.setItem('link-form.url', url)
    localStorage.setItem('link-form.description', description)
    localStorage.setItem('link-form.tags', tags)
  }, [title, url, description, tags])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!title.trim() || !url.trim() || !description.trim() || !tags.trim()) {
      setError('All values must be entered!')
      return
    }

    setError('')

    const newLink: LinkAttribute = {
      id :  Date.now().toString(),
      title: title.trim(),
      url: url.trim(),
      description: description.trim(),
      tags: tags.trim(),
    }

    onAdd(newLink)

    setTitle('')
    setUrl('')
    setDescription('')
    setTags('')

  }

  return (

    <form className='link-form' onSubmit={handleSubmit}>
      {onClose && (
        <button id='exit-Button' type='button' onClick={onClose}>
          ✕ 
        </button>

      )}
      <div className='form-row'>
        <label htmlFor='link-title'>Title:</label>
        <input id='link-title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='form-row'>
        <label htmlFor='link-url'>URL:</label>
        <input id='link-url' type='url' value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div className='form-row'>
        <label htmlFor='link-description'>Description:</label>
        <input id='link-description' type='text'  value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className='form-row'>
        <label htmlFor='link-tags'>Tags:</label>
        <input id='link-tags' type='text'  value={tags} onChange={(e) => setTags(e.target.value)} />
      </div>

      {error ? <p>{error}</p> : null}
      <Button label=' ADD LINK '  className='add-link-button'/>
    </form>
    
  )
}
