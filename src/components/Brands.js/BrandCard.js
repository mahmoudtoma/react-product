import React from 'react'


const BrandCard = ({img}) => {
  return (
    <div className='brand'>
        <div className='container all-brand'>
            <img src={img} width="150px" height="150px" />
        </div>
    </div>
  )
}

export default BrandCard