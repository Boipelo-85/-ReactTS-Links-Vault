import React, { type ReactNode } from 'react'
import type { LinkAttribute } from '../Types/Link';
import { Text } from '../Text/Text';


export type ItemsProps = {

    attribute: LinkAttribute
}

export const LinkCardItem: React.FC<ItemsProps> = ({ attribute }) => {


    return (

        <div className='data-content'>
           
                <tr >
                    <td>{attribute.title}</td>
                    <td>  {attribute.url}  </td>
                     <td> {attribute.description}</td>
                    <td> {attribute.tags}</td>
                    <td>
                            <Text variant={'span'}>
                                <button>Edit</button>
                                <button>Remove</button>
                            </Text>
                    </td>
                </tr>


        </div>

    )
}
