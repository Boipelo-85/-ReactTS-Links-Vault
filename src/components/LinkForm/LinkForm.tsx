import React from 'react'
import { Button } from '../Button'


export const LinkForm = () => {
  return (

    <form >
      <label >Title :</label>
      <input type='text'/>
      <br />
      <label >URL :</label>
      <input type='text'/>
      <br/>
      <label >Description :</label>
      <input type='text'/>
      <br/>
      <label >Tags :</label>
      <input type='text'/>
      <br />

      <Button  label='ADD LINK'/>
    </form>
    
  )
}
