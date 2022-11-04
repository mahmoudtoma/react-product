import React, { useEffect } from 'react'
import ReactPagination from '../../components/Utilty/ReactPagination'
import CategoryComponent from '../../components/category/CategoryComponent'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory,getAllCategoryPage } from '../../Redux/actions/CategoryAction'
const AllCategoryPage = () => {

  const dispatch = useDispatch();

  //when first load
  useEffect(() => {
    dispatch(getAllCategory(6))
  }, [])


  // to get state from redux
  const category = useSelector(state => state.allCategory.category)
  const loading = useSelector(state => state.allCategory.loading)
  
  // to get Page Count
  let PageCount = 0
  if (category.paginationResult) {
    PageCount = category.paginationResult.numberOfPages
  }

  //when press pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page))
  }
  return [category,loading,PageCount,getPage]
}

export default AllCategoryPage