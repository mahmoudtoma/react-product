import React from 'react'
import UserAllProduct from '../../components/User/UserAllProduct'
import UserSideNav from '../../components/User/UserSideNav'
import ReactPagination from '../../components/Utilty/ReactPagination'

const UserProductLikePage = () => {
    return (
        <div className='container AdminAllProductPage '>
            <div className='row'>
                <div className='col-sm-5 col-md-4 col-lg-3'>
                    <UserSideNav />
                </div>
                <div className='col-sm-7 col-md-8 col-lg-9'>
                    <UserAllProduct />
                    <ReactPagination />
                </div>
            </div>

        </div>
    )
}

export default UserProductLikePage