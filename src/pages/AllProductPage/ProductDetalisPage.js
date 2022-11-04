import React from 'react'
import CategoryHeader from '../../components/category/CategoryHeader'
import ProductDetalisComponent from '../../components/Product/ProductDetalisComponent'
import RateProduct from '../../components/Rate/RateProduct'
import ProductCardComponent from './../../components/Product/ProductCardComponent';

const ProductDetalisPage = () => {
  return (
    <div className='Product-detalis-Page'>
        <CategoryHeader/>
        <div className='container'>
            <ProductDetalisComponent/>
            <RateProduct/>
            <ProductCardComponent Categories="Products you may like"/>
        </div>
    </div>
  )
}

export default ProductDetalisPage