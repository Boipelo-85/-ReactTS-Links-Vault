
import React from 'react'

type ButtonProps = {

  label: string                                        
  variant?: 'primary' | 'secondary' | 'outline'  
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'

}  

export const Button : React.FC<ButtonProps> = ({label,variant,size,type}) => {
  return (
    <button 

            type={type}
            className={`btn-${variant} btn-${size} : ''}`}
            
    
    >
            {label}
    </button>
  )
}
