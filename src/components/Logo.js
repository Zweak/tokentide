import React from 'react'
import { Link } from 'react-router-dom'
import logoSvg from '../assets/logo.png'
const Logo = () => {
  return (
    <Link to="/"
        className='absolute top-[1.5rem] left-[1.5rem] [text-decoration: none] text-lg text-cyan-400 flex items-center '
    >
        <img className="size-14" src={logoSvg} />
        <span>TokenTide</span>
    </Link>
  )
}

export default Logo