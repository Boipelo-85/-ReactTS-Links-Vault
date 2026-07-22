type MidLinksProps = {
  onAddClick: () => void
  allDisplayLinks : () => void

}

export const MidLinks = ({ onAddClick,allDisplayLinks }: MidLinksProps) => {
  return (
    <div className='links-container'>

           <div className='mid-button'>

                <button type='button' className='add-button' onClick={onAddClick}>Add Link  </button>
                <button type='button' className='middle-links' onClick={allDisplayLinks} >Display Links</button>

            </div>
      </div>

  )
}
