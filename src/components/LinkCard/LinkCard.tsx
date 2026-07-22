import { useEffect, useState } from "react";
import type { LinkAttribute } from "../Types/Link";
import { LinkCardItem } from "./LinkCardItem";

type CloseProp = {

  onClose?: () => void
}

export const LinkCard: React.FC<CloseProp> = ({ onClose }) => {

  const [links, setLinks] = useState<LinkAttribute[]>(() => {
    const savedLinks = localStorage.getItem('links')
    return savedLinks ? JSON.parse(savedLinks) : []

  })

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
            <th>Title :</th>
            <th>URL:</th>
            <th>Description :</th>
            <th>Tags </th>
             <th>Actions</th>
            </tr>
            
          </thead>

          <tbody>
        {
          links.map(link => (
            <div className='card-component'>
              <LinkCardItem

                key={link.id}
                attribute={link}

              />
            </div> 
          ))
        }
    
        </tbody>
        </table>

    </div>


  )
}
