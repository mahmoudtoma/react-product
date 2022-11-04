import React from 'react'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetalisComponent = () => {
    return (
        <div className='row Product-gallery-text'>
            <div className='col-lg-4' ><ProductGallery /></div>
            <div className='col-lg-8' ><ProductText /></div>
        </div>
    )
}

export default ProductDetalisComponent