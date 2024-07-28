import React, { useEffect, useState } from 'react'
import { LoadingCircle, MediaCard, PageLinks } from '../components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeatured } from '../features/featured/featuredSlice'

const TrendingPageMovies = () => {
  const [type, setType] = useState('movie')
  const { isLoading, error, featured } = useSelector((store) => store.featured)
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [currentMedia, setCurrentMedia] = useState('now_playing')
  
  useEffect(() => {
    dispatch(fetchFeatured({ type, currentMedia, page }))
  }, [dispatch, type, currentMedia, page])

  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  return (
    <main className='min-h-[calc(100vh-80px)] pt-20'>
      <div className="container main-container py-8 lg:py-10">
        <PageLinks title={type} link={true} linkPath={`/${type}`} child='trending' />
        <div className='py-5 lg:py-7 flex items-center gap-x-4'>
          <Link to={`/${type}/top_rated`} className='px-6 py-2 rounded-lg border border-[#FF6F61] text-white text-lg lg:text-xl font-semibold tracking-wider transition-all ease-in-out duration-150 hover:bg-[#FF6F61] hover:text-white'>
            Top Rated
          </Link>
          <Link to={`/${type}/trending`} className='px-6 py-2 rounded-lg border border-[#FF6F61] text-white text-lg lg:text-xl font-semibold tracking-wider transition-all ease-in-out duration-150 bg-[#FF6F61] hover:text-white'>
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
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 lg:mt-8'>
              {featured?.map((item) => {
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

export default TrendingPageMovies
