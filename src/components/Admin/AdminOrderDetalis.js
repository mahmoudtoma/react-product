import React from 'react'
import AdminOrderItem from './AdminOrderItem'

const AdminOrderDetalis = () => {
    return (
        <div>
            <div><AdminOrderItem /><AdminOrderItem /></div>
            <div className='Customer-details'>
                <div className='title'><h5>Customer details</h5></div>
                <div className='detalis'>
                    <div>Name: Mahmoud Toma</div>
                    <div>Number: 009725698742</div>
                    <div>Emaile: Mahmoud-9rewd@gmail.com</div>
                </div>
                <div className='total'>Total: $761.56</div>
                <div className='order-d'>
                    <button>Save</button>
                    <select id="order">
                        <option value="val">Order status</option>
                        <option value="val2">Underway</option>
                        <option value="val2">Been completed</option>
                        <option value="val2">Cancellation</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default AdminOrderDetalis