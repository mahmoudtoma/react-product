import React from 'react'

const UserProfilePersonlyItem = () => {
    return (
        <div>

            <div className='ProfileDetalise'>
                <div className='prfilename proDetalise'>
                    <div>Name:<span>Mahmoud Toma</span></div>
                    <div><a href='#'>Edit</a></div>
                </div>
                <div className='proDetalise'>Phone Number: <span> 097006589423</span></div>
                <div className='proDetalise'>Emaile:  <span>Mahmoud986@gmail.com</span></div>
            </div>


            <div className='ChangePassword'>
                <div>Change Password</div>
                <div><input type={'password'} placeholder='Old password'/></div>
                <div><input type={'password'} placeholder='New password'/></div>
                <div><button>Save</button></div>
            </div>
        </div>
    )
}

export default UserProfilePersonlyItem