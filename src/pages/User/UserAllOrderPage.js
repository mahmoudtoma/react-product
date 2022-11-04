import React from 'react'
import UserAllOrder from '../../components/User/UserAllOrder'
import UserSideNav from '../../components/User/UserSideNav'
import ReactPagination from '../../components/Utilty/ReactPagination'

const UserAllOrderPage = () => {
    return (
        <div className='container AdminAllProductPage '>
            <div className='row'>
                <div className='col-sm-5 col-md-4 col-lg-3'>
                    <UserSideNav />
                </div>
                <div className='col-sm-7 col-md-8 col-lg-9'>
                    <UserAllOrder/>
                    <UserAllOrder/>

                </div>
            </div>
            
        </div>
    )
}
export default UserAllOrderPage