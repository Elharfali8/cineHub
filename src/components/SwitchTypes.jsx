import React from 'react'

const SwitchTypes = ({type, handleTypes}) => {
  return (
      <div className='w-full pb-6 lg:pb-8 flex items-center justify-start'>
          <div className='flex items-center'>
              <button 
                type="button" 
                data-type='movie'
                className={`py-2 border-[2px] border-[#B0B0B0] px-4 rounded-tl-md rounded-bl-md text-lg lg:text-xl font-bold ${type === 'movie' ? 'bg-[#B0B0B0]  text-[#121212]' : ''}`}
                onClick={handleTypes}
              >Movies</button>
              <button 
                type="button" 
                data-type='tv'
                className={`py-2 border-[2px] border-[#B0B0B0] px-4 rounded-tr-md rounded-br-md text-lg lg:text-xl font-bold ${type === 'tv' ? 'bg-[#B0B0B0]  text-[#121212]' : ''}`}
                onClick={handleTypes}
              >Tv shows</button>
          </div>
    </div>
  )
}

export default SwitchTypes