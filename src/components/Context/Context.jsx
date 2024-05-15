import { createContext,useState,useEffect } from "react";

export const shopContext = createContext()

import React from 'react'

export const ShopProvider = ({children}) => {

    const [cart,setCart] = useState([])
    console.log(cart);

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

  return (
    <shopContext.Provider value={{cart,setCart,products,setProducts}}>
        {children}
    </shopContext.Provider>
  )
}
