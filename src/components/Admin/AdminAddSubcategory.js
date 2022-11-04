import React from 'react';
import AddSubCategoryHook from '../../Hook/SubCategory/AddSubCategoryHook';


const AdminAddSubcategory = () => {


const [category,handelChange,ErrorMass,handelSubmit,onChangeName,name,isPres,Loading] = AddSubCategoryHook();


    return (
        <div className='AdminAddSubcategory'>
            <div className='Subcategory-input'>
                <input value={name} onChange={onChangeName} placeholder='Subcategory name' />
            </div>
            <select id="order" onChange={handelChange}>
                <option value="0">Add classification</option>


                {
                    category.data ? (category.data.map((item) => {
                     return   <option key={item._id} value={item._id}>{item.name}</option>
                    })) : null
                }

            </select>
            <div style={{color:"red", marginTop:"10px"}}>{ErrorMass}</div>
            <div>
                <button onClick={handelSubmit} className='Subcategory-button'> Save Edit</button>
            </div>
            {
                isPres ? Loading ? <div className="text-center" style={{ width: "100%", marginTop:"10px" }}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> : <h4>Done</h4> : null
            }
        </div>
    )
}

export default AdminAddSubcategory