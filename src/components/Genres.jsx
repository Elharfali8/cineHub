import React from 'react'

const Genres = ({data, activeBtn, handleActiveBtn}) => {
    const newData = [{ name: 'All', id: 'all' }, ...data];

    console.log(activeBtn);

  return (
      <div className='flex gap-2 items-center flex-wrap'>
          {newData?.map((item) => {
              const { id, name } = item
              
              return (
                  <button
                      type='button'
                      key={id}
                      data-id={id}
                      className={`
                            text-lg lg:text-xl px-4 py-1   rounded-md transition-all ease-in-out duration-150 hover:bg-[#FF6F61]
                            ${activeBtn == id ? 'border border-[#FF6F61] bg-[#FF6F61]' : 'border border-[#FFFFFF]'}
                        `}
                      onClick={handleActiveBtn}
                  >
                      {name}
                  </button>
              )
          })}
    </div>
  )
}

export default Genres