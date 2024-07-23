import React from 'react'
import { Featured, Hero, TopRated } from '../components'

const Home = () => {
  return (
    <main>
      <div className="hero-img">
        <Hero />
      </div>
      <div className='py-9 lg:py-12'>
        <Featured />
        <TopRated />
      </div>
    </main>
  )
}

export default Home