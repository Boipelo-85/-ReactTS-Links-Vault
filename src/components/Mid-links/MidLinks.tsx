type MidLinksProps = {
  onAddClick: () => void
  onDisplayClick: () => void
}

export const MidLinks = ({ onAddClick, onDisplayClick }: MidLinksProps) => {
  return (
    <div className='links-container'>

           <div className='mid-button'>

                <button type='button' className='add-button' onClick={onAddClick}>Add Link  </button>
                <button type='button' className='middle-links' onClick={onDisplayClick}>Display Links</button>

            </div>
      </div>

  )
}
