import React from 'react'
import { Link } from 'react-router-dom'

const CartCheckOut = () => {
  return (
    <div className='CartCheckOut'>
      <div className='discount-code'>
        <input placeholder='discount code' />
        <button>Click</button>
      </div>
      <div className='discount-nummber'>$1000</div>
      <div className='Checkout'>
        <Link to="/ChoosePay">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default CartCheckOut