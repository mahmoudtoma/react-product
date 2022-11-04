import React from 'react'
import UserAddressPersonalItem from './UserAddressPersonalItem'
import { Link } from 'react-router-dom';

const UserAddressPersonal = () => {
    return (
        <div>
            <UserAddressPersonalItem />
            <UserAddressPersonalItem />
            <div className='btNewAddree'>
                <Link to='/user/newaddress'>
                    <button>Add New Address</button>
                </Link>
            </div>
        </div>
    )
}

export default UserAddressPersonal