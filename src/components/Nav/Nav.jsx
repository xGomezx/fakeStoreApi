import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";

export const Nav = () => {
  return (
    <nav className='w-2/5'>
      <ul className='flex h-full text-zinc-400 font-medium justify-around items-center static'>
        <li className='transition duration-300 hover:text-white cursor-pointer'>INICIO</li>
        <li className='transition duration-300 hover:text-white cursor-pointer'>AGREGAR</li>
        <li className='transition duration-300 hover:text-white cursor-pointer'>CONTACTO</li>
        <li className='transition duration-300 hover:text-white cursor-pointer flex items-center'><CiShoppingBasket className=' static text-5xl' /> <span className='text-2xl'>0</span></li>
      </ul>
    </nav>
  )
}
