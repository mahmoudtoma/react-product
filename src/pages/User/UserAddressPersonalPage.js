import React from 'react'
import UserAddressPersonal from '../../components/User/UserAddressPersonal'
import UserSideNav from '../../components/User/UserSideNav'

const UserAddressPersonalPage = () => {
    return (
        <div className='container AdminAllProductPage '>
            <div className='row'>
                <div className='col-sm-5 col-md-4 col-lg-3'>
                    <UserSideNav />
                </div>
                <div className='col-sm-7 col-md-8 col-lg-9'>
                    <UserAddressPersonal/>
                </div>
            </div>
            
        </div>
    )
}

export default UserAddressPersonalPage