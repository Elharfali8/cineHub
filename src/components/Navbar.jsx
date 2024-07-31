import logo from '../assets/logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../utils/data'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'

const Navbar = ({ navIsOpen, handleNav }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  
  return (
      <nav className='navbar h-20 flex fixed items-center justify-center z-[99]'>
        <div className="container main-container flex items-center justify-between">
        <Link to='/'>
          <img src={logo} alt="main logo cineHub logo" className='w-full max-w-[140px]' />
        </Link>
        <ul className='hidden lg:flex items-center gap-x-3'>
          {navLinks.map((link) => {
            const { id, title, path } = link
            return (
              <li key={id}>
                  <NavLink to={path} className='text-xl font-medium px-3 py-1 rounded-lg'>
                  {title}
                  </NavLink>
              </li>
            )
          })}
        </ul>
        <div className='lg:hidden flex items-center justify-center'>
          {navIsOpen ? (
            <button type="button" onClick={handleNav}>
              <FaTimes size={27} />
            </button>
          ) : (
            <button type="button" onClick={handleNav}>
              <FaBars size={27} />
            </button>
          )}
          
        </div>
        </div>
    </nav>
  )
}

export default Navbar