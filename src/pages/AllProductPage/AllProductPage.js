import React, { useEffect } from 'react'
import CategoryHeader from '../../components/category/CategoryHeader'
import ProductCard from '../../components/Product/ProductCard'
import ProductCardComponent from '../../components/Product/ProductCardComponent'
import ReactPagination from '../../components/Utilty/ReactPagination'
import SearchCountResult from '../../components/Utilty/SearchCountResult'
import SideFilter from '../../components/Utilty/SideFilter'

const AllProductPage = () => {

   
    return (
        <div style={{ backgroundColor: '#ffffffff', height: '3000px' }}>
            <CategoryHeader />
            <SearchCountResult Title="Search Result 400" />
            <div className='box-product-component'>
                <SideFilter />
                <div className='best-seller-card'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />

                </div>

            </div>
            <ReactPagination />
        </div>
    )
}

export default AllProductPage