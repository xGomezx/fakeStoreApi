import React from 'react'
import { Logo } from '../Logo/Logo'
import { Nav } from '../Nav/Nav'

export const Header = () => {
  return (
    <header className='bg-black bg-opacity-80 h-24 flex items-center justify-between static'>
        <Logo />
        <Nav />
    </header>
  )
}
