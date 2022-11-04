import React, { useState, useEffect } from 'react'
import avatar from '../../images/avatar.png'
import AddBrandHook from '../../Hook/Brand/AddBrandHook'
const AdminAddBrand = () => {

    const [img, name, Loading, IsPress, foundError, onChangeName, onImageChange, handelSubmit] = AddBrandHook();

    return (
        <div className='AdminAddBrand'>
            <div className='img-add-brand'>
                <div>
                    <label htmlFor="upload-photo">
                        <img
                            src={img}
                            alt="fzx"
                            height="120px"
                            width="120px"
                            style={{ cursor: "pointer" }}
                        />
                    </label>
                    <input
                        type="file"
                        name="photo"
                        onChange={onImageChange}
                        id="upload-photo"
                    />
                </div>
            </div>
            <div className='input-add-brand'>
                <input
                    onChange={onChangeName}
                    value={name}
                    placeholder='Name Category' />
            </div>
            <div style={{ color: "red", marginBottom: "10px" }}>{foundError}</div>

            <div className='button-add-brand'>
                <button onClick={handelSubmit} >Save Edit</button>
            </div>

            {
                IsPress ? Loading ? <div className="text-center" style={{ width: "100%" }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> : <h4>Done</h4> : null
            }
        </div>
    )
}

export default AdminAddBrand