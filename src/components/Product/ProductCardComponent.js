import React from 'react'
import SubTitle from '../Utilty/SubTitle'
import ProductCard from './ProductCard'

const ProductCardComponent = ({ Categories, More, PathsubTitle }) => {
    return (
        <div className='best-seller container'>
            <SubTitle Categories={Categories} More={More} PathsubTitle={PathsubTitle} />
            <div className='best-seller-card'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductCardComponent