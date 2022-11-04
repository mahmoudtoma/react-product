import React from 'react'
import AdminAllProduct from '../../components/Admin/AdminAllProduct'
import AdminSideNav from '../../components/Admin/AdminSideNav'
import ReactPagination from '../../components/Utilty/ReactPagination'

const AdminAllProductPage = () => {
    return (
        <div className='container AdminAllProductPage '>
            <div className='row'>
                <div className='col-sm-5 col-md-4 col-lg-3'>
                    <AdminSideNav />
                </div>
                <div className='col-sm-7 col-md-8 col-lg-9'>
                    <AdminAllProduct />
                    <ReactPagination/>
                </div>
            </div>
            
        </div>
    )
}

export default AdminAllProductPage