import React from 'react'

const Footer = () => {
  return (
      <footer className='bg-[#1F1B24] py-5 lg:py-7'>
          <div className="container main-container grid place-items-center">
          <p className='text-lg md:text-xl lg:text-2xl font-semibold'>&copy; {new Date().getFullYear()} <span className='text-[#FF6F61]'>CineHub</span>. All rights reserved.</p>
          </div>
    </footer>
  )
}

export default Footer