import React from 'react'
import AdminSideNav from '../../components/Admin/AdminSideNav'
import AdminOrderDetalis from './../../components/Admin/AdminOrderDetalis';

const AdminOrderDetalisPage = () => {
    return (
        <div className='container AdminAllProductPage '>
            <div className='row'>
                <div className='col-sm-5 col-md-4 col-lg-3'>
                    <AdminSideNav />
                </div>
                <div className='col-sm-7 col-md-8 col-lg-9'>
                    <AdminOrderDetalis/>
                </div>
            </div>

        </div>
    )
}


export default AdminOrderDetalisPage