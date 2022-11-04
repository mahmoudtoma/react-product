import React from 'react'

const SideFilter = () => {
  return (
    <div className='box-filter'>
        <div >
            <div className='title-filter'>Category</div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>ALL</div>
            </div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>Appliances</div>
            </div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>Appliances</div>
            </div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>Appliances</div>
            </div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>Appliances</div>
            </div>
        </div>
        <div>
            <div className='title-filter'>Brand</div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>ALL</div>
            </div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>Apple</div>
            </div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>Samsung</div>
            </div>
            <div className='text-filter'>
                <input type="checkbox"/>
                <div>Hawaii</div>
            </div>
        </div>
        <div className='all-filter-price'>
            <div className='title-filter'>Price</div>
            <div className='all-text-filter-price'>
            <div className='text-filter-price'>
                <p>From :</p>
                <input type="number"/>
            </div>
            <div className='text-filter-price'>
                <p>To :</p>
                <input type="number"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SideFilter