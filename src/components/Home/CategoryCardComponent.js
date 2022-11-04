import React, { useEffect } from 'react'
import SubTitle from '../Utilty/SubTitle'
import CategoryCard from '../category/CategoryCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../Redux/actions/CategoryAction'
import CategoryCardHook from '../../Hook/Category/CategoryCardHook'
const CategoryCardComponent = ({ Categories, More, PathsubTitle }) => {



const [category, loading] = CategoryCardHook();

    return (
        <div>
            <div className='home-category container'>
                <SubTitle Categories={Categories} More={More} PathsubTitle={PathsubTitle} />
                <div className='home-category-card container'>


                    {
                        loading === false ? (
                            category.data ? (
                                category.data.slice(0,6).map((item, index) => {
                                    return (<CategoryCard key={index} title={item.name} img={item.image} />)
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
        </div>
    )
}

export default CategoryCardComponent