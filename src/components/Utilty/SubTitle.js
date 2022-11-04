import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({ Categories, More, PathsubTitle }) => {
    return (
        <div className=''>
            <div className='sub-title'>
                <div className='title-type'>{Categories}</div>
                {More ? (
                    <Link to={`${PathsubTitle}`} style={{ textDecoration: 'none', color: '#000000' }}>
                        <div className='more'>{More}</div>
                    </Link>

                ) : null}
            </div>
        </div>
    )
}

export default SubTitle