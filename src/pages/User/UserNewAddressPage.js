import React from 'react'
import UserNewAddress from '../../components/User/UserNewAddress'
import UserSideNav from '../../components/User/UserSideNav'

const UserNewAddressPage = () => {
    return (
        <div className='container AdminAllProductPage '>
            <div className='row'>
                <div className='col-sm-5 col-md-4 col-lg-3'>
                    <UserSideNav />
                </div>
                <div className='col-sm-7 col-md-8 col-lg-9'>
                 <UserNewAddress/>
                </div>
            </div>
            
        </div>
    )
}

export default UserNewAddressPage