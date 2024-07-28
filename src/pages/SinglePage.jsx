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

  const { title, name, backdrop_path, overview, poster_path, release_date, tagline, vote_average, genres, first_air_date, production_companies, seasons, spoken_languages } = data
  
  const backgroundImage = backdrop_path ? `${image}${backdrop_path}` : null;

  return (
    <main className='min-h-[calc(100vh-80px)]  pt-20  '>
          <div className="container main-container py-8 lg:py-10">
        <PageLinks title={type} link={true} singlePage={true} linkPath={'tv'} singleTitle='hola' />
        {isLoading ? (
          <div className='py-12 lg:py-16 grid place-items-center'>
              <LoadingCircle />
          </div>
        ) : (
            <div className='my-8 lg:my-10'>
              <div style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                }}
                  className='  rounded-lg overflow-hidden'>
                  <div className='grid gap-6 md:grid-cols-2 main-opacity py-2 lg:py-4 px-4 lg:px-2 xl:px-1'>
                    <div className='grid place-items-center'>
                      <img src={`${image}${poster_path}`} alt={title || name} className='max-h-[500px] lg:max-h-[700px] rounded-lg' />
                    </div>
                    <div className='flex justify-center flex-col'>
                      <h1 className='text-xl tracking-wider sm:text-2xl lg:text-3xl  font-bold gradient-text '>{title || name}</h1>
                      <h3 className='my-1 lg:my-2 text-lg sm:text-xl lg:text-2xl text-[#B0B0B0] font-semibold'>{tagline}</h3>
                      <ul className='grid gap-2 py-2'>
                        <li className='text-lg lg:text-xl'>
                          Release Date : <span className='text-[#FF6F61] font-semibold'>{release_date || first_air_date}</span>
                        </li>
                        <li className='text-lg lg:text-xl flex items-center gap-x-2'>
                          Vote Average : <span className='text-[#FF6F61] font-semibold'>{vote_average?.toFixed(1)}</span> <span><FaStar color='orange' /></span>
                        </li>
                    </ul>
                    <h4 className='my-1 lg:my-2 text-lg sm:text-xl lg:text-2xl  font-semibold'>Languages :</h4>
                    <div className='flex flex-wrap items-center gap-2'>
                      {spoken_languages?.map((item) => {
                        return (
                          <div key={item.iso_639_1} className='flex gap-x-2 rounded-md border px-2 py-[2px]'>
                            <span>{item.english_name}</span>
                            <span>{item.name}</span>
                            <span>{item.iso_639_1}</span>
                          </div>
                        )
                      })}
                    </div>
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
              {/* ---------------- */}
              <div className='h-[2px] bg-white my-5 lg:my-8' />
              <div className='flex items-center justify-center'>
                <div className='flex flex-col md:flex-row md:flex-wrap items-center px-4 py-2 gap-6 bg-[#FF6F61] rounded-lg '>
                  {production_companies?.map((item) => {
                    const { id, logo_path, name } = item
                    return (
                      <div key={id} className='flex flex-col items-center justify-center'>
                        {logo_path && <img src={`${image}${logo_path}`} alt={name} className='w-full max-w-[150px]' />}
                        <h3 className='text-[#FFFFFF] text-lg lg:text-xl  font-serif mt-2 tracking-wide px-3 py-1 border border-white rounded-md'>{name}</h3>
                          </div>
                        )
                        })}
                        </div>
              </div>
              <div className='h-[2px] bg-white my-5 lg:my-8' />
              {seasons && (
                <div>
                  <div className='grid place-items-center'>
                  <h1 className='text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-6 font-semibold tracking-wider'>Seasons :</h1>
                  </div>
                  <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
                  {seasons?.map((item) => {
                    const { air_date, id, name, poster_path: episode_img, vote_average: vote } = item
                    return (
                      <div key={id} className='bg-[#1F1B24] rounded-md flex flex-col gap-x-3 py-1 relative'>
                        <div className='absolute flex items-center justify-center gap-x-2 main-opacity px-2 py-[2px] rounded-lg right-1 top-1 text-[#FF6F61]'>
                          <p>{vote}</p>
                          <span><FaStar /></span>
                        </div>
                        <img src={`${image}${episode_img}`} alt={name} className=' w-full object-cover max-h-[400px] rounded-lg' />
                        <div className='py-2 px-2 lg:px-1 grid place-items-center'>
                          <h3 className='text-lg md:text-xl lg:text-xl font-semibold tracking-wider'>
                            {name}
                          </h3>
                          <p className='mt-1 mb-[3px] lg:text-lg'>
                            Release Date : 
                          </p>
                          <p className='lg:text-lg text-[#B0B0B0]'>
                            {air_date}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                    
                </div>
              )}
          </div>
          )}
          </div>
    </main>
  )
}

export default SinglePage