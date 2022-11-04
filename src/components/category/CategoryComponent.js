import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory ,getAllCategoryPage } from '../../Redux/actions/CategoryAction'
const CategoryComponent = ({data,loading}) => {




    return (
        <div>
            <div className='home-category container'>
                <div> All Category</div>
                <div className='home-category-card container'>

                    {
                        loading === false ? (
                            data ? (
                                data.slice(0,6).map((item,index) => {
                                    return <CategoryCard key={index} title={item.name} img={item.image} />
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

export default CategoryComponent