import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
      <div className='container main-container h-[calc(100vh-80px)] grid place-items-center text-center'>
          <div className='main-opacity p-2 lg:p-14 rounded-lg'>
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wider mb-2 lg:mb-3'>Discover Your Next Favorite Movie</h1>
              <h3 className='text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider mb-4 text-[#FF6F61]' >Search through thousands of movies and TV shows</h3>
              <div className='mt-5 flex items-center justify-center'>
                  <input
                      type="text"
                      className='w-full max-w-[500px] h-[34px] lg:h-[38px] rounded-tl-md rounded-bl-md pl-2 py-1 text-black text-lg focus:outline-none focus:border-[2px] focus:border-[#FF6F61]'
                      placeholder='Search for a movie, tv show...'
                  />
                  <Link to={'/discover'} className="h-[34px] lg:h-[38px] flex items-center justify-center rounded-tr-md rounded-br-md px-3 bg-[#FF6F61] text-white">
                    <FaSearch />
                  </Link>
              </div>
          </div>
    </div>
  )
}

export default Hero