import React from 'react'
import { Featured, Hero } from '../components'

const Home = () => {
  return (
    <main>
      <div className="hero-img">
        <Hero />
      </div>
      <div className='py-9 lg:py-12'>
        <Featured />
      </div>
    </main>
  )
}

export default Home