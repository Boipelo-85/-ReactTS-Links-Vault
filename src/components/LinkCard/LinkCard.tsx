import type { LinkAttribute } from "../Types/Link";
import { LinkCardItem } from "./LinkCardItem";

type CloseProp = {
  links: LinkAttribute[]
  onRemove: (id: string) => void
  onClose?: () => void
}

export const LinkCard: React.FC<CloseProp> = ({ links, onRemove, onClose }) => {

  return (

    <div className='card-section'>
      {onClose && (
        <button id='exit-Button' type='button' onClick={onClose}>
          ✕
        </button>
      )}

      <h1 style={{ color : 'black',fontSize: 25,fontWeight: 'bold'}}> The available links in the LocalStorage</h1>
      <table border={1.5}  className='tableContent'>

          <thead >

            <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Description</th>
            <th>Tags</th>
             <th>Actions</th>
            </tr>

          </thead>

          <tbody>
        {
          links.map(link => (
      
              <LinkCardItem

                key={link.id}
                attribute={link}
                onRemove={onRemove}

              />
            
          ))
        }

        </tbody>
        </table>

    </div>

  )
}
