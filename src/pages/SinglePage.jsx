import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingCircle, PageLinks } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingle } from '../features/singlePage/singleSlice'
import { image } from '../utils/data'
import { FaStar } from 'react-icons/fa6'

const SinglePage = () => {
  const { type, id } = useParams()
  const {isLoading, error, data} = useSelector((store) => store.singlePage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSingle({type, id}))
  }, [dispatch, type, id])

  const { title, name, backdrop_path, overview, poster_path, release_date, tagline, vote_average, genres, first_air_date } = data
  
  const backgroundImage = backdrop_path ? `${image}${backdrop_path}` : null;

  return (
    <main className='min-h-[calc(100vh-80px)]  pt-20  '>
          <div className="container main-container py-8 lg:py-10">
        <PageLinks title={type} link={true} singlePage={true} singleTitle='hola' />
        {isLoading ? (
          <div className='py-12 lg:py-16 grid place-items-center'>
              <LoadingCircle />
          </div>
        ) : (
          <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }}
              className='my-8 lg:my-10  rounded-lg overflow-hidden'>
              <div className='grid gap-6 md:grid-cols-2 main-opacity py-2 lg:py-4 px-4 lg:px-2 xl:px-1'>
                <div className='grid place-items-center'>
                  <img src={`${image}${poster_path}`} alt={title || name} className='max-h-[500px] lg:max-h-[700px] rounded-lg' />
                </div>
                <div className='flex justify-center flex-col'>
                  <h1 className='text-xl sm:text-2xl lg:text-3xl  font-bold gradient-text '>{title || name}</h1>
                  <h3 className='my-1 lg:my-2 text-lg sm:text-xl lg:text-2xl text-[#B0B0B0] font-semibold'>{tagline}</h3>
                  <ul className='grid gap-2 py-2'>
                    <li className='text-lg lg:text-xl'>
                      Release Date : <span className='text-[#FF6F61] font-semibold'>{release_date || first_air_date}</span>
                    </li>
                    <li className='text-lg lg:text-xl flex items-center gap-x-2'>
                      Vote Average : <span className='text-[#FF6F61] font-semibold'>{vote_average.toFixed(1)}</span> <span><FaStar color='orange' /></span>
                    </li>
                  </ul>
                  <div>
                    <h4 className='my-1 lg:my-2 text-lg sm:text-xl lg:text-2xl  font-semibold'>Overview :</h4>
                    <p className='my-1 lg:my-2 text-lg lg:text-xl  text-[#B0B0B0]'>
                      {overview}
                    </p>
                  </div>
                  <div>
                    <h4 className='my-1 lg:my-2 text-lg sm:text-xl lg:text-2xl  font-semibold'>Genres :</h4>
                    <ul className='flex flex-wrap gap-3'>
                    {genres?.map((item) => {
                      const { id, name } = item
                      return (
                        <li key={id} className='px-3 py-1 rounded-lg border border-[#FF6F61] text-lg lg:text-xl'>{name}</li>
                      )
                    })}
                    </ul>
                  </div>
                </div>
              </div>
          </div>
          )}
          </div>
    </main>
  )
}

export default SinglePage