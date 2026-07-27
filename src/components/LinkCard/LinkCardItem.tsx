import React, { useState } from 'react'
import type { LinkAttribute } from '../Types/Link';


export type ItemsProps = {

    attribute: LinkAttribute
    onRemove: (id: string) => void
    onEdit :(id : string) => void
}

export const LinkCardItem: React.FC<ItemsProps> = ({ attribute, onRemove,onEdit }) => {
    const [isExpanded, setIsExpanded] = useState(false)


    return (

            <tr className='data-content'>
                    <td >{attribute.title}</td>
                    <td > <a href={attribute.url} target="_blank"  >{attribute.url} </a></td>
                     <td 
                        className={`tableData ${isExpanded ? 'expanded' : ''}`}
                        onClick={() => setIsExpanded(!isExpanded)}
                        style={{ cursor: 'pointer' }}
                    > 
                        {attribute.description}
                    </td>
                    <td> {attribute.tags}</td>
                    <td>
                        <button className='edit-button'

                            onClick={() => onEdit(attribute.id)}
                        >   
                            Edit
                        </button>
                        <button className='remove-button'
                            onClick={() => onRemove(attribute.id)}
                        >
                            Remove
                        </button>
                    </td>
                </tr>

    )
}
