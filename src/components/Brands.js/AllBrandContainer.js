import React from 'react'
import BrandCard from './BrandCard'
const AllBrandContainer = ({ data, loading }) => {
    return (
        <div className='container brand-compotent' >
            <div className='Brand-box' >
                {
                    loading === false ? (
                        data ? (
                            data.slice(0, 6).map((item, index) => {
                                return <BrandCard key={index} title={item.name} img={item.image} />
                            })
                        ) : <h4 className="text-center">There are no ratings</h4>
                    ) : <div className="text-center" style={{ width: "100%" }}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>

                }


            </div>

        </div>
    )
}

export default AllBrandContainer