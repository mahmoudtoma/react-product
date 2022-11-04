import React from 'react'
import rateimge from '../../images/rate.png';
import mobile from '../../images/mobile.png'
const CartItem = () => {
    return (
        <div className='d-flex Cart-item  mb-4'>
            <img src={mobile} style={{ width: "150px" }} />
            <div>
                <div className='maine-title'>
                    <div className='title-text' >Original Unlocked Cell phone Apple iPhone X 5.8" 3GB+64GB/256GB 4G LTE A11 CPU Wireless Charge Used Phone</div>
                    <div className='evaluation'><span> <img src={rateimge} style={{ width: '20px' }} /> 4.7</span><span> 284 Reviews</span><span> 828 orders</span></div>
                    <div className='price-title my-3'><span>$380.78</span><span>$650.56</span></div>
                    <div><span>Quantity :</span> <input type="number" id="tentacles" name="tentacles" min="1" max="" width="20px"/></div>
                </div>

                <div className='color-brand d-flex'>
                    <h6>Color :</h6>
                    <ul className='color-li'>
                        <li></li>
                    </ul>
                    <i class="fa-regular fa-trash-can remove-cart"></i>
                </div>
            </div>
        </div>
    )
}

export default CartItem