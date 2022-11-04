import React from 'react'
import Advertisemen from '../../images/laptops_s.PNG'
const AdvertisementHome = () => {
    return (
        <div className=' box-advertisemen'>
            <div className='container'>
                <div className='row '>
                    <div className='col-12 advertisemen-web'>
                        <img src={Advertisemen} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvertisementHome