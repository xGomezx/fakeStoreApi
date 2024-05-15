// ProductModal.jsx
import React, { useContext } from 'react';
import { IoIosClose } from "react-icons/io";
import { shopContext } from '../Context/Context';


export const ProductModal = ({ product, onClose }) => {

  const context = useContext(shopContext)

  const addCart = ()=>{

    const cart = {
      image:product.image,
      title:product.title,
      price:product.price
    }
    const listCart = [...context.cart,cart]
    context.setCart(listCart)


  }

  return (
    <div className='w-1/2 h-2/3 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-60'>

      <div className='w-full h-1/6 flex justify-end '>
        <IoIosClose className="w-10 h-10 cursor-pointer p-0" onClick={onClose} />
      </div>
      <div className='  h-4/5 flex '>

        <div className='w-1/2 flex justify-center'>
          <img className='h-4/5 w-3/4'  src={product.image} alt="" />
        </div>

        <div className='w-1/2 flex flex-col'>
          <h2 className='text-justify w-11/12 text-3xl mb-4 max-h-20 overflow-hidden'>{product.title}</h2>
          <p className='text-sm font-serif max-h-36 overflow-y-auto'>{product.description}</p>
          <p className='text-2xl font-semibold'>{product.category}</p>
          <p className='text-2xl'>${product.price}</p>
          <button className='w-2/3 border-2 border-zinc-600 pr-16 pl-16 pt-2 pb-2 mt-5 hover:bg-zinc-300 duration-200 self-center' onClick={addCart}>Confirmar</button>
        </div>
      </div>
    
      <p></p>
    </div>
  );
};
