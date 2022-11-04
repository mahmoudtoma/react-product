import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../Redux/actions/CategoryAction'


const CategoryCardHook = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory())
    }, [])

    const category = useSelector(state => state.allCategory.category)
    const loading = useSelector(state => state.allCategory.loading)


    return [category, loading]
}

export default CategoryCardHook
