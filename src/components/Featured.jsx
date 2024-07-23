import { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFeatured } from '../features/featured/featuredSlice'
import LoadingCircle from './LoadingCircle'
import Carousel from './Carousel'
import SwitchTypes from './SwitchTypes'

const Featured = () => {
    const { isLoading, error, featured } = useSelector((store) => store.featured)
    const dispatch = useDispatch()
    const [type, setType] = useState('movie')
    const [page, setPage] = useState(1)
    const [currentMedia, setCurrentMedia] = useState('now_playing')
    
    useEffect(() => {
        dispatch(fetchFeatured({type, currentMedia, page}))
    }, [dispatch, type, currentMedia])

    const handleTypes = () => {
        if (type === 'movie') {
            setType('tv')
            setCurrentMedia('on_the_air')
        } else {
            setType('movie')
            setCurrentMedia('now_playing')
        }
    }

  return (
      <div className='container main-container'>
          <SectionTitle text='featured' />
          {isLoading ? (
              <div className='py-12 lg:py-18 grid place-items-center text-white'>
                  <LoadingCircle />
              </div>
          ): (
                  <div className='py-6 lg:py-8'>
                            <SwitchTypes type={type} handleTypes={handleTypes} />
                          <Carousel type={type} data={featured} />
                </div>
          )}
    </div>
  )
}

export default Featured