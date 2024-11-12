import React from 'react'
import Cards from '../components/Cards/Cards'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
      <>
        <HeroSection/>
      <div className="container">
          <h1 className="my-4 text-center">Our Cards</h1>
          <Cards />
      </div>
    </>
  )
}

export default Home