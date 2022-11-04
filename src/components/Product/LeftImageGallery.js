import React from 'react'
import Left from '../../images/next.png'
const LeftImageGallery = (onClick,onDisable) => {
  return (
    <div className='LeftImageGallery'>
        <img 
        src={Left}
        onClick={onClick}
        onDisable={onDisable}
         />
        
    </div>
  )
}

export default LeftImageGallery