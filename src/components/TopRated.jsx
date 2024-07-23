import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import LoadingCircle from './LoadingCircle'
import Carousel from './Carousel'
import SwitchTypes from './SwitchTypes'
import { fetchTopRated } from '../features/topRated/topRatedSlice'

const TopRated = () => {
    const { isLoading, error, top_rated } = useSelector((store) => store.top_rated)
    const dispatch = useDispatch()
    const [type, setType] = useState('movie')
    const [page, setPage] = useState(1)
    
    useEffect(() => {
        dispatch(fetchTopRated({type, page}))
    }, [dispatch, type])

    const handleTypes = () => {
        if (type === 'movie') {
            setType('tv')
        } else {
            setType('movie')
        }
    }

  return (
      <div className='container main-container'>
          <SectionTitle text='top rated' />
          {isLoading ? (
              <div className='py-12 lg:py-18 grid place-items-center text-white'>
                  <LoadingCircle />
              </div>
          ): (
                  <div className='py-6 lg:py-8'>
                            <SwitchTypes type={type} handleTypes={handleTypes} />
                          <Carousel type={type} data={top_rated} />
                </div>
          )}
    </div>
  )
}

export default TopRated