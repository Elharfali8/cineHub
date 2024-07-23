import React from 'react'

const SectionTitle = ({ text }) => {
    
  return (
      <div className='w-full py-6 lg:py-10 flex items-center justify-center'>
          <h1 className='capitalize text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-widest'>
              {text}
          </h1>
    </div>
  )
}

export default SectionTitle