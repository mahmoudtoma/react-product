import React from 'react'
import Rateimge from '../../images/rate.png'
const RateItem = () => {
    return (
        <div className='Rate-item'>
            <div className='title-post'>
                <span> Mahmoud Toma</span>
                <span className='rate-product-rate' style={{color:'#ffc107'}}><img src={Rateimge}/> 4.3</span>
            </div>
            <p>All as in the description. The phone is branded, new. In the original packaging!</p>
            <hr></hr>
        </div>
    )
}

export default RateItem