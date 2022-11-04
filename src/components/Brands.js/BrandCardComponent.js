import React from 'react'
import BrandCard from './BrandCard'
import SubTitle from '../Utilty/SubTitle'
import BrandCardHook from './../../Hook/Brand/BrandCardHook';
const BrandCardComponent = ({ Categories, More,PathsubTitle }) => {

    const [brand, loading] = BrandCardHook();

    return (
        <div className='container brand-compotent' >
            <SubTitle Categories={Categories} More={More} PathsubTitle={PathsubTitle} />
            <div className='Brand-box' >
            {
                        loading === false ? (
                            brand.data ? (
                                brand.data.slice(0,6).map((item, index) => {
                                    return (<BrandCard key={index} title={item.name} img={item.image} />)
                                })
                            ) : <h4 className="text-center">There are no Brand</h4>
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

export default BrandCardComponent