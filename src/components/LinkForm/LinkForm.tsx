import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import type { LinkAttribute } from '../Types/Link'

type addProp = {
  onAdd: (link: LinkAttribute) => void
  onClose?: () => void
}

export const LinkForm: React.FC<addProp> = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] =useState ('')
  const [tags, setTags] = useState( '')
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
        <label className='link-title'>Title:</label>
        <input id='link-title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='form-row'>
        <label className='link-url'>URL:</label>
        <input id='link-url' type='url' value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div className='form-row'>
        <label className='link-description'>Description:</label>
        <input id='link-description' type='text'  value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className='form-row'>
        <label className='link-tags'>Tags:</label>
        <select name="" id="link-tags"  value={tags} onChange={(e) => setTags(e.target.value)}>
          <option value=""></option>
            <option value="Work">Work</option>
            <option value="School">School</option>
            <option value="Church">Church</option>
            <option value="Music">Music</option>
        </select>
      </div>

      {error ? <p>{error}</p> : null}
      <Button label=' ADD LINK '  className='add-link-button'/>
    </form>
    
  )
}
