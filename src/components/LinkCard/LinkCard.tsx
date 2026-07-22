import { useEffect, useState } from "react";
import type { LinkAttribute } from "../Types/Link";
import { LinkCardItem } from "./LinkCardItem";


export const LinkCard = () => {

  const [links, setLinks] = useState<LinkAttribute[]>(() => {
    const savedLinks = localStorage.getItem('links')
    return savedLinks ? JSON.parse(savedLinks) : []

  })

  return (

    <div className='card-section'>
             {onclose && (
        <button id='exit-Button' type='button' >
          ✕ 
        </button>

      )}
      <h1> My current Links </h1>

      <>
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
      </>

    </div>


  )
}
