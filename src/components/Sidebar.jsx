import React from 'react'
import { navLinks } from '../utils/data'
import { NavLink } from 'react-router-dom'

const Sidebar = ({navIsOpen, handleNav}) => {

  return (
    <aside className={`
        bg-[#1F1B24] p-6
        ${navIsOpen ? 'fixed inset-0 top-20 z-[99] translate-x-0 h-full transition-all ease-in-out duration-150' : 'fixed inset-0 top-20 translate-x-[-100%] transition-all ease-in-out duration-150 z-0'}
      `}>
      <ul className='grid gap-y-2 '>
        {navLinks.map((link) => {
          const { id, title, path } = link
          return (
            <li key={id}>
              <NavLink to={path} className='block text-white pl-2 py-2 text-lg md:text-xl font-medium tracking-wider rounded-lg transition-all ease-in-out duration-150 hover:pl-3' onClick={handleNav} >
                {title}
              </NavLink>
            </li>
          )
        })}
      </ul>
      </aside>
  )
}

export default Sidebar