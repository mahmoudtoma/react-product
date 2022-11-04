import React from 'react'
import AdminAddBrand from '../../components/Admin/AdminAddBrand'
import AdminSideNav from '../../components/Admin/AdminSideNav'

const AdminAddBrandPage = () => {
    return (
        <div className='container AdminAllProductPage '>
            <div className='row'>
                <div className='col-sm-5 col-md-4 col-lg-3'>
                    <AdminSideNav />
                </div>
                <div className='col-sm-7 col-md-8 col-lg-9'>
                    <AdminAddBrand />
                </div>
            </div>

        </div>
    )
}


export default AdminAddBrandPage