import React from 'react'
import { Link } from 'react-router-dom'
import Cardimg from '../../images/item.png'
const ProductCard = () => {
    return (
        <div className='container product-card-container'>
            <div className='product-card'>
                <Link to="/ProductDetalis/:id">
                    <img src={Cardimg} />
                </Link>
                <div className='information-card'>
                    <i className="fa-solid fa-heart heart"></i>
                    <p>Black Advanced Touch Smart Earphone</p>
                    <div className='price'>
                        <p>$ 880</p>
                        <i className="fa-sharp fa-solid fa-star">45</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard