import React from 'react'
import { Banner, Footer } from '../components'
import Product from '../components/Product';
import { client } from '../lib/client';


export default  function index ({products, bannerData}) {
  return (
    <>
      <Banner heroBanner={bannerData.length && bannerData[0]} />
      <div className='products-heading'>
        <h2>Best Selling Ever</h2>
        <p>There are may variations passages</p>
      </div>
      <div className='products-container'>{products?.map(product => <Product key={product._id} product={product} />)}</div>
      <Footer />
    </>
  )
}


export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const productsData = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { 
      products: productsData,
      bannerData
     }
  }

}