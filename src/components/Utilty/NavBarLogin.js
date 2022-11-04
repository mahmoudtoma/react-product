import React, { useState, useEffect } from 'react'
import Logo from '../../images/Logo.png'
import UnopDropdown from 'unop-react-dropdown'
const NavBar = () => {

    const handler = () => {

    }

    const [user, setUser] = useState('')


    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            setUser(JSON.parse(localStorage.getItem("user")))
        }
    }, [])

    const logOut = () => {
        localStorage.removeItem("user");
        setUser('')
    }

    return (
        <div>
            {/* Start Nav Bar One */}
            <div className='nav-bar-one'>
                <div className='logo-nav'>
                    <a href='/' ><img src={Logo} alt="sq" /></a>
                    <div className='all-Categories'>
                        <div className='all'>ALL &</div>
                        <div className='Categories'><a href='/allCategory' >Categories</a></div>
                    </div>
                </div>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search" />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <div className='accounte'>
                    <div className='return-order' >
                        <div className='return'>Return</div>
                        <div className='order'><a href='/return'>& Order</a></div>
                    </div>


                    {/* start Log In  */}
                    <div className='Loge-In' style={{}} >
                        {
                            user != '' ? (
                                <div className='dropdown' style={{ width: "100px",textAlign:"center",marginRight:"10px"}}>
                                    <UnopDropdown

                                        onAppear={handler}
                                        onDisappearStart={handler}
                                        trigger={<p className="AnimatedDropdownButton">
                                        <div style={{marginTop:"10px", display:"flex",flexDirection:"column"}}>
                                            <div style={{fontSize:"13px",float:"left"}} >Hello ...</div>
                                            <div > {user.name}</div>
                                        </div>
                                           
                                        </p>
                                        }
                                        delay={300}
                                        align="CENTER"
                                        hover
                                    >
                                        <div className='All-result' style={{ color: "black" }}>
                                            <div className='results'>Profile</div>
                                            <div className='results'>Setting</div>
                                            <div className='results'>My Product</div>
                                            <div className='results' onClick={logOut} >Log Out</div>
                                        </div>
                                    </UnopDropdown>
                                </div>
                            ) : (
                                <div className='login'>
                                    <div className='hello'>Hello, sign in</div>
                                    <div className='list'><a href='/login'>Account & Lists</a></div>
                                </div>
                            )}
                    </div>
                    {/* End Log In  */}

                    <div className='cart-shopping'>
                        <a href='/cart'><i className="fa-sharp fa-solid fa-bag-shopping"><div><span>0</span></div></i></a>

                    </div>

                </div>
            </div>

            {/* Start Nav Bar Tow */}
            <div className='nav-bar-tow'>
                <div className='list'>
                    <i className="fa-solid fa-bars"><span>ALL</span></i>
                </div>
                <div className='menu'>
                    <a>Today's Deals</a>
                    <a>Customer Service</a>
                    <a>Registry</a>
                    <a>Gift Cards</a>
                    <a>Sell</a>
                </div>
            </div>
        </div>

    )
}

export default NavBar