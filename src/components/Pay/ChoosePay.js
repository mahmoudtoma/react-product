import React from 'react'

const ChoosePay = () => {
  return (
    <div className='container ChoosePay'>
      <div>
        <div className='row Payment-method'><h5>Payment method</h5></div>

        <div className='visa-choose'>
          <div className='row visa-input'>
            <input type="radio" name='group' id='groups' />
            <i class="fa-brands fa-cc-visa" for="groups"></i>
            <label for="groups" >Pay by Visa</label>
          </div>

          <div className='row visa-input'>
            <input type="radio" name='group' id='groups1' />
            <label for="groups1">Paiement when recieving</label>
          </div>
        </div>

        <div className='row Checkout-pay'>
          <button>Checkout</button>
          <div className='Price-discount'>$1000</div>
        </div>
      </div>
    </div>
  )
}

export default ChoosePay