import React from 'react'

import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <div className='perfil'>Meu Perfil</div>
    </header>
  )
}
