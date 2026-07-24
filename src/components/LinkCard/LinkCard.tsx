
import { Text } from "../Text/Text";
import type { LinkAttribute } from "../Types/Link";
import { LinkCardItem } from "./LinkCardItem";
import webLink from '../../assets/web.png'

type CloseProp = {

  links: LinkAttribute[]
  onRemove: (id: string) => void
  onClose?: () => void
  onEdit : (id: string) => void 
  searchLinks : string 
}
export const LinkCard: React.FC<CloseProp> = ({ links, onRemove, onClose,searchLinks,onEdit }) => {

    if (links.length === 0) {

          if(searchLinks.trim().length > 0){

                  return <Text variant={'h3'} style={{color:'red'}}> {searchLinks}  not found in the links </Text>               
                  
          }else{

                return (

                    <>

                      <img src={webLink} alt=" the website logo typa. " className= 'logoImage' />
                      <Text variant={'h2'} style={{color:'grey'}}>Your vault is empty!</Text>
                      <Text variant={'h3'} style={{color:'grey'}}> Start saving links you love at the right top and access them anytime, anywhere. </Text>
                       
                    </>
                )
          }
    }

  return (

    <div className='card-section'>
      {onClose && (
        <button id='exit-Button' type='button' onClick={onClose}>
          ✕
        </button>
      )}

      <table border={2}  className='tableContent'>

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
