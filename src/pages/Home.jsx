import React from 'react'
import { About, Featured, Hero, TopRated } from '../components'

const Home = () => {
  return (
    <main className='pt-20'>
      <div className="hero-img">
        <Hero />
      </div>
      <div className='py-9 lg:py-12'>
        <Featured />
        <TopRated />
        <About />
      </div>
    </main>
  )
}

export default Home