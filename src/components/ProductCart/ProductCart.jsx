import React from 'react'

export const ProductCart = ({image,title,price,amount}) => {
  return (
    <div className='w-11/12 h-32 flex items-center mb-4 border-b border-zinc-400'>

        <img className='h-full w-1/5' src={image} alt="" />

        <h2>{title}</h2>
        
        <p>{price}</p>

        <p>{amount}</p>
    </div>
  )
}
