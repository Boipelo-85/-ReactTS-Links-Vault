import { Text } from "../Text/Text";
import type { LinkAttribute } from "../Types/Link";
import { LinkCardItem } from "./LinkCardItem";

type CloseProp = {

  links: LinkAttribute[]
  onRemove: (id: string) => void
  onClose?: () => void
  onEdit : (id: string) => void 
  searchLinks : string 
}

export const LinkCard: React.FC<CloseProp> = ({ links, onRemove, onClose,onEdit,searchLinks }) => {

    if (links.length === 0){

          if(searchLinks.trim().length > 0){

                  return <Text variant={'h3'}> {searchLinks} is not found in the links </Text>
          }else{

                return 
          }

    }
  return (

    <div className='card-section'>
      {onClose && (
        <button id='exit-Button' type='button' onClick={onClose}>
          ✕
        </button>
      )}

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
                onEdit={onEdit}  
              />

          ))
        }

        </tbody>
        </table>

    </div>

  )
}
