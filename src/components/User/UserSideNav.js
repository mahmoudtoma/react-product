import React from 'react'
import { Link } from 'react-router-dom'

const UserSideNav = () => {
  return (
    <div className='All-admin-side'>
        <Link to="/user/allorder" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude' >Order Management</div></Link>
        <Link to="/user/productlike" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude'>Favorite List</div></Link>
        <Link to="/user/addresspersonal" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude'>personal address</div></Link>
        <Link to="/user/profilepersonly" style={{textDecoration:'none'}}><div className='admin-side-nav-methoude'>Profile personly</div></Link>
       
    </div>
  )
}

export default UserSideNav