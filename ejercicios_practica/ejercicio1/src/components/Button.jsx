import React from 'react'

export const Button = ({onClick, children}) => {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  )
}
