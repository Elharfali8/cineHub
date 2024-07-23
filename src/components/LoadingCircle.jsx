import React from 'react'
import Loading from 'react-loading-components';

const LoadingCircle = () => {
  return (
      <div className='w-full h-full p-6 lg:p-8 flex items-center justify-center'>
          <Loading type='ball_triangle' width={100} height={100} fill='#FFFFFF' /> 
    </div>
  )
}

export default LoadingCircle