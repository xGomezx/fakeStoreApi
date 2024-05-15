import React from 'react'

export const Products = ({children}) => {
  return (
    <div className='bg-white h-auto flex flex-wrap justify-around'>
        {children}
    </div>
  )
}
