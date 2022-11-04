import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../Cart/CartItem';
const AdminOrderItem = () => {
    return (
        <div style={{ cursor: "pointer"}}>
            <Link to="/admin/order/:id" style={{textDecoration:'none'}}>
                <CartItem />
                
            </Link>
        </div>
    )
}

export default AdminOrderItem