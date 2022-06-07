import React from 'react'
import { setGlobalState } from '../store'
import logoTita from '../images/logo/tita-logo.svg';

export const Header = () => {



  return (
    <header className="flex flex-row items-center justify-between drop-shadow-md py-2 px-5 bg-black">
      <div className="flex flex-row justify-center items-center cursor-pointer">
        <img
          className="w-40 h-6 object-contain cursor-pointer"
          src={logoTita}
          alt="Logo"
        />
        <span className="text-white">Exchange</span>
      </div>
      <nav className="flex flex-row justify-center items-center list-none">
      
        <li className="cursor-pointer mr-3">
          <button
            onClick={() => setGlobalState('modal', 'scale-100')}
            className="text-white bg-green-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring"
          >
            Enviar
          </button>
        </li>
      </nav>
    </header>
  )
}
