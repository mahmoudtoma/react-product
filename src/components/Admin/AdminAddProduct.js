import React from 'react'
import avatar from '../../images/avatar.png'
import Multiselect from 'multiselect-react-dropdown';
import ProductDetalisComponent from './../Product/ProductDetalisComponent';

const AdminAddProduct = () => {
    const onSelect = () => {

    }
    const onRemove = () => {

    }
    const options = [
        { name: 'first classification', id: 1 },
        { name: 'second classification', id: 2 },
    ]
    return (
        <div>
            <div className='AdminAddproduct'>
                <div className='img-add-brand'>
                    <img src={avatar} />
                </div>
                <div>
                    <input placeholder='Name Brand' />
                </div>
                <div>
                    <textarea placeholder='Description' id="w3review" name="w3review" rows="4" cols="55" style={{ padding: '10px' }}></textarea>
                </div>
                <div>
                    <input placeholder='Price before discount' />
                </div>
                <div>
                    <input placeholder='product price' />
                </div>
                <div>
                    <input placeholder='main classification' />
                </div>

                <div className='Multiselect'>
                    <Multiselect
                        options={options} // Options to display in the dropdown
                        onSelect={onSelect} // Function will trigger on select event
                        onRemove={onRemove} // Function will trigger on remove event
                        displayValue="name" // Property name to display in the dropdown options
                    />
                </div>
                <div className='input-brand'>
                    <input placeholder='Brand'/>
                </div>
                <div className='bt-admin-product'>
                    <button>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AdminAddProduct