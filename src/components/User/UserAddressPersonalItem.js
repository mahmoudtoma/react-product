import React from 'react'
import { Link } from 'react-router-dom';

const UserAddressPersonalItem = () => {
    return (
        <div className='UserAddressPersonalItem'>
            <div className='removeEdit'>
                <div>Home</div>
                <div>
                    <div><a href='#'>Remove</a></div>
                </div>
            </div>
            <hr></hr>
            <div>Paleastine, Tulkerm, Qaffen</div>
            <hr></hr>

            <div className='phonenumber'>
                <div>Phone: 009725698423</div>
                <div><Link to='/user/editaddress'>Edit</Link></div>
            </div>
            
        </div>
    )
}

export default UserAddressPersonalItem