import React from 'react'
import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner: {smallText, buttonText, desc, midText, largeText1, largeText2, discount, saleTime, image}}) => {
  return (
    <div className='footer-banner-container'>
        <div className='banner-desc'>
            <div className='left'>
            <p>{discount}</p>
                <h1>{largeText1}</h1>
                <h1>{largeText2}</h1>
                <p>{saleTime}</p>
            </div>
            <div className='right'>
                <h4>{smallText}</h4>
                <h3>{midText}</h3>
                <p>{desc}</p>
            </div>
            <img src={urlFor(image)} alt={desc} className="footer-banner-image" />
        </div>
    </div>
  )
}

export default FooterBanner