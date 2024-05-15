import React from 'react'


export const Header = ({children}) => {
  return (
    <header className='bg-black bg-opacity-80 h-24 w-full flex items-center justify-between fixed z-50'>
        {children}
    </header>
  )
}
