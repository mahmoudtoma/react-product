import React from 'react'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/CategoryCardComponent'
import ProductCardComponent from '../../components/Product/ProductCardComponent'
import AdvertisementHome from '../../components/Home/AdvertisementHome'
import BrandCardComponent from '../../components/Brands.js/BrandCardComponent'
const Home = () => {
    return (
        <div>
            <Slider />
            <HomeCategory  Categories="Categories" More="View more" PathsubTitle="/allCategory" />
            <ProductCardComponent Categories="Best Seller" More="View More" PathsubTitle="/AllProduct"/>
            <AdvertisementHome/>
            <ProductCardComponent Categories="Most Rated" More="View More" PathsubTitle="/AllProduct" />
            <BrandCardComponent Categories="Best Brand" More="View More" PathsubTitle="/BestBrand"/> 
        </div>
    )
}

export default Home
