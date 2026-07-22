import React from 'react'
import type { LinkAttribute } from '../Types/Link';


export type ItemsProps = {

    attribute: LinkAttribute
    onRemove: (id: string) => void
    // onEdit :(id:string) => void
}

export const LinkCardItem: React.FC<ItemsProps> = ({ attribute, onRemove }) => {


    return (

            <tr className='data-content'>
                    <td>{attribute.title}</td>
                    <td>  {attribute.url}  </td>
                     <td> {attribute.description}</td>
                    <td> {attribute.tags}</td>
                    <td>
                        <button className='edit-button'>Edit</button>
                        <button
                            className='remove-button'
                            onClick={() => onRemove(attribute.id)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>

    )
}
