import React, { useEffect, useState } from 'react'
import { LoadingCircle, MediaCard, PageLinks } from '../components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRated } from '../features/topRated/topRatedSlice'

const TopRatedPage = () => {
  const { isLoading, error, top_rated } = useSelector((store) => store.top_rated)
    const dispatch = useDispatch()
    const [type, setType] = useState('movie')
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        dispatch(fetchTopRated({type, page}))
    }, [dispatch, type, page])
  
    const handlePageChange = (newPage) => {
      setPage(newPage);
  };

  return (
    <main className='min-h-[calc(100vh-80px)] py-8 lg:py-10'>
          <div className="container main-container">
            <PageLinks title='movies' link={true} linkPath='/movie' child='top rated' />
            <div className='py-5 lg:py-7 flex items-center gap-x-4'>
                      <Link to='/movie/top_rated' className='px-6 py-2 rounded-lg border border-[#FF6F61] text-white text-lg lg:text-xl font-semibold tracking-wider transition-all ease-in-out duration-150 bg-[#FF6F61] hover:text-white'>
                        Top Rated
                      </Link>
                      <Link to='/movie/popular' className='px-6 py-2 rounded-lg border border-[#FF6F61] text-white text-lg lg:text-xl font-semibold tracking-wider transition-all ease-in-out duration-150 hover:bg-[#FF6F61] hover:text-white'>
                        Popular
                      </Link>
                      <Link to='/movie/trending' className='px-6 py-2 rounded-lg border border-[#FF6F61] text-white text-lg lg:text-xl font-semibold tracking-wider transition-all ease-in-out duration-150 hover:bg-[#FF6F61] hover:text-white'>
                        Trending
                      </Link>
            </div>
        <div className='h-[2px] mb-4 lg:mb-6 w-full bg-white' />
        {isLoading ? (
          <div className="grid place-items-center py-4 lg:py-6">
              <LoadingCircle />
          </div>
        ) : (
            <div>
                <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-6 lg:mt-8'>
                {top_rated?.map((item) => {
                        const { id } = item
                        return <MediaCard key={id} type={type} {...item} />
                      })}
              </div>
              <div className='w-full mt-5 lg:mt-7 flex items-center justify-end'>
                    <div className="join">
                            <button className="join-item btn" onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}>«</button>
                            <button className="join-item btn">{`Page ${page}`}</button>
                            <button className="join-item btn" onClick={() => handlePageChange(page + 1)}>»</button>
                        </div>
                    </div>
            </div>
          )}
          </div>
    </main>
  )
}

export default TopRatedPage