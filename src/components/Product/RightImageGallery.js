import React from 'react'
import Right from '../../images/prev.png'
const RightImageGallery = ( onClick, onDisable ) => {
  return (
    <div className='RightImageGallery'>
      <img src={Right}
        onClick={onClick}
        onDisable={onDisable}
      />
    </div>
  )
}

export default RightImageGallery