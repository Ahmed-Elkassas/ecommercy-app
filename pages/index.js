import React from 'react'
import { Banner, Footer } from '../components'


const index = () => {
  return (
    <>
      <Banner />
      <div className='products-heading'>
        <h2>Best Selling Ever</h2>
        <p>There are may variations passages</p>
      </div>
      <div className='prodcuts-container'>products</div>
      <Footer />
    </>
  )
}

export default index