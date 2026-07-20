import React from 'react'

interface MidLinksProps {
  onAddLinkClick: () => void
}

export const MidLinks = ({ onAddLinkClick }: MidLinksProps) => {
  return (
    <div className='links-container'>
      <div className='mid-links'>
        <button type='button' className='middle-links' onClick={onAddLinkClick}>
          Add Link
        </button>
        <a href='#' className='middle-links'>Display Links</a>
        <a href='#' className='middle-links'>Update Link</a>
        <a href='#' className='middle-links'>Remove Link</a>
      </div>
    </div>
  )
}
