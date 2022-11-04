import React from 'react'
import UnopDropdown from 'unop-react-dropdown'
import sort from '../../images/sort.png'
const SearchCountResult = ({ Title }) => {

    const handler = () => {

    }
    return (
        <div className=' count-result'>
            <div className='title-count-result'>{Title}</div>
            <div className='dropdown'>
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={<p className="AnimatedDropdownButton">
                        <img
                            width="20px"
                            height="20px"
                            src={sort}
                            alt=""
                        />
                        Featured
                    </p>
                    }
                    delay={300}
                    align="CENTER"
                    hover
                >
                    <div className='All-result'>
                        <div className='results'>Best Seller</div>
                        <div className='results'>Best Rated</div>
                        <div className='results'>Price: Low to High</div>
                        <div className='results'>Price: High to Low</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult