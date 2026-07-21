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
      title: title.trim(),
      url: url.trim(),
      description: description.trim(),
      tags: tags.trim(),
    }

    onAdd(newLink)

    setTitle('')
    setUrl('')
    setDescription('')
    setTags('work')
  }

  return (
    <form onSubmit={handleSubmit}>
      {onClose && (
        <button type='button' onClick={onClose} style={{ float: 'right', cursor: 'pointer' }}>
          ✕
        </button>
      )}
      <label>Title:</label>
      <input type='text' className='titleInput' value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>URL:</label>
      <input type='url' className='urlInput' value={url} onChange={(e) => setUrl(e.target.value)} />
      <br />
      <label>Description:</label>
      <input type='text' className='descInput' value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label>Tags:</label>
      <input type='text' className='tagInput' value={tags} onChange={(e) => setTags(e.target.value)} />
      <br />

      {error ? <p>{error}</p> : null}
      <Button label='ADD LINK' type='submit' />
    </form>
  )
}
