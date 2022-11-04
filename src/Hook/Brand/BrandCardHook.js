import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllBrand } from './../../Redux/actions/BrandActions';


const BrandCardHook = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBrand())
    }, [])

    const brand = useSelector(state => state.allBrand.brand)
    const loading = useSelector(state => state.allBrand.loading)


    return [brand, loading]
}

export default BrandCardHook;
