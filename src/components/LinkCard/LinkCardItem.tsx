import React, { type ReactNode } from 'react'
import type { LinkAttribute } from '../Types/Link';


export type ItemsProps = {

        attribute : LinkAttribute
}

export const LinkCardItem:React.FC<ItemsProps> = ({attribute}) => {


  return (

            <div>
                <h1>{attribute.title}</h1>
                <h3>{attribute.url}</h3>
                <p>
                    {attribute.description}
                </p>
                <span>{attribute.tags}</span>
            </div>
  )
}
