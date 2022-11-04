import React from 'react'
import UserSideNav from '../../components/User/UserSideNav'
import UserEditAddress from './../../components/User/UserEditAddress';

const UserEditAddressPage = () => {
    return (
        <div className='container AdminAllProductPage '>
            <div className='row'>
                <div className='col-sm-5 col-md-4 col-lg-3'>
                    <UserSideNav />
                </div>
                <div className='col-sm-7 col-md-8 col-lg-9'>
                    <UserEditAddress/>
                </div>
            </div>
            
        </div>
    )
}

export default UserEditAddressPage