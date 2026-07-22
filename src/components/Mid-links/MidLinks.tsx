type MidLinksProps = {
  onAddClick: () => void

}

export const MidLinks = ({ onAddClick }: MidLinksProps) => {
  return (
    <div className='links-container'>

           <div className='mid-button'>

                <button type='button' className='add-button' onClick={onAddClick}>Add Link  </button>
               

            </div>
      </div>

  )
}
