import React from 'react'
import UserAllOrderItem from './UserAllOrderItem'

const UserAllOrder = () => {
  return (
    <div style={{backgroundColor:'#f9ffe6 ',padding:'20px', marginBottom:'20px'}}>
        <UserAllOrderItem/>
        <UserAllOrderItem/>
        <div className='UserAllOrderTotal'>Total : 1200 $</div>
    </div>
  )
}

export default UserAllOrder