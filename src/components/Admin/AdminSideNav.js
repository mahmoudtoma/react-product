import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideNav = () => {
  return (
    <div className='All-admin-side'>
        <Link to="/admin/allorder" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude' >Order Management</div></Link>
        <Link to="/admin/allproduct" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude'>Product Management</div></Link>
        <Link to="/admin/addbrand" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude'>Add Brand</div></Link>
        <Link to="/admin/addcategory" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude'>Add Category</div></Link>
        <Link to="/admin/addSubcategory" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude'>Add Subcategory</div></Link>
        <Link to="/admin/addproduct" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude'>Add Product</div></Link>
        
    </div>
  )
}

export default AdminSideNav