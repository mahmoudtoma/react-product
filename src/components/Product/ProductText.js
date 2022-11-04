import React from 'react'
import rateimge from '../../images/rate.png'
const ProductText = () => {
    return (
        <div>
            <div className='maine-title'>
                <div className='title-text' >Original Unlocked Cell phone Apple iPhone X 5.8" 3GB+64GB/256GB 4G LTE A11 CPU Wireless Charge Used Phone</div>
                <div className='evaluation'><span> <img src={rateimge} style={{width:'20px'}} /> 4.7</span><span> 284 Reviews</span><span> 828 orders</span></div>
                <br></br>
                <hr></hr>
                <div className='price-title'><span>$380.78</span><span>$650.56</span></div>
                <hr></hr>
            </div>

            <div className='color-brand'>
                <h6>Color :</h6>
                <ul className='color-li'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <hr></hr>
            <div className='Specifications'>
                <h6>Specifications :</h6>
                <p>"64GB simple set" the bundle means you will get iPhone X  64GB with charger +Data cable(No original box, No earphone) ;
                    "64GB Standard"  the bundle  means you will get iPhone X 64GB with Standard
                    package ;

                    "256GB simple set" the bundle means you will get iPhone X 256GB with charger

                    +Data cable(No original box, No earphone) ;

                    "256GB Standard"  the bundle  means you will get iPhone X 256GB with Standard

                    package ;

                    Standard Package including:

                    1* iPhone X original unlocked Cellphone
                    1* charger
                    1* earphone
                    1* data cable</p>
            </div>
            <hr></hr>
            <div className='add-card'>
                <button>Buy Now</button>
                <button>Add Cart</button>
            </div>
        </div>
    )
}

export default ProductText