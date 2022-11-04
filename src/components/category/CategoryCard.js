import React from 'react'

const CategoryCard = ({ img, title }) => {
    return (
        <div>
            <div className='col-xs-6 col-sm-6 col-md-4 col-lg-2'>
                <div className='all-card'>
                    <img className='imge-category' src={img} />
                    <p className='text-card'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard