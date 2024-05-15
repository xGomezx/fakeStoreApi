import React,{useState} from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import { Cart } from '../Cart/Cart';

export const Nav = () => {

  const [cartVisible, setCartVisible] = useState(false);

  const openCart = ()=>{
    setCartVisible(true)
    document.body.classList.add('overflow-hidden');
  }

  const closeCart = ()=>{
    setCartVisible(false)
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <nav className='w-2/5'>
      <ul className='flex h-full text-zinc-400 font-medium justify-around items-center static'>
        <li className='transition duration-300 hover:text-white cursor-pointer'>INICIO</li>
        <li className='transition duration-300 hover:text-white cursor-pointer'>AGREGAR</li>
        <li className='transition duration-300 hover:text-white cursor-pointer'>CONTACTO</li>
        <li className='transition duration-300 hover:text-white cursor-pointer flex items-center'><CiShoppingBasket onClick={openCart} className=' static text-5xl' /> <span className='text-2xl'>0</span></li>
        {cartVisible &&
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" onClick={closeCart}></div> 
            <Cart onClose={closeCart} />
          </div>
        }
      </ul>
    </nav>
  )
}
