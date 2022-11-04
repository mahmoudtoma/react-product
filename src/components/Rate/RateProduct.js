import React from 'react'
import Rateimge from '../../images/rate.png'
import RateItem from './RateItem'
import RatePost from './RatePost'
import ReactPagination from './../Utilty/ReactPagination';
const RateProduct = () => {
    return (
        <div className='box-rate-product'>
            <div className='rate-Product'>
                <h5>Reviews</h5>
                <span className='rate-product-rate'><img src={Rateimge} /> 4.3</span>
                <span className='rate-product-reviewa'>(Reviews 160)</span>
            </div>
                <hr></hr>

            <RatePost />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />
            <ReactPagination />
        </div>
    )
}

export default RateProduct