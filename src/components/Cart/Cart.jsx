import React, { useContext } from 'react'
import { shopContext } from '../Context/Context'
import { ProductCart } from '../ProductCart/ProductCart'

export const Cart = ({onClose}) => {

    const cartContext = useContext(shopContext)
    
  return (
    <div className='fixed top-24 right-0  w-2/5 h-auto max-h-screen bg-white overflow-y-auto flex flex-col items-center'>
        <h3 className='text-white text-xl z-20 self-end' onClick={onClose}>&times;</h3>
        {
            cartContext.cart.map(x=>
                <ProductCart
                  image={x.image}
                  title={x.title}
                  price={x.price}
                 />
            )
          
        }
    </div>
  )
}
