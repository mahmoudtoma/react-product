import React, { useEffect } from 'react'
import ReactPagination from '../../components/Utilty/ReactPagination'
import CategoryComponent from '../../components/category/CategoryComponent'
import AllCategoryPageHook from '../../Hook/Category/AllCategoryPageHook'
const AllCategoryPage = () => {

  const [category,loading,PageCount,getPage] = AllCategoryPageHook();

  return (
    <div>
      <CategoryComponent data={category.data} loading={loading} />

      {
        PageCount > 1 ? (<ReactPagination PageCount={PageCount} onPress={getPage} />
        ) : null
      }
    </div>
  )
}

export default AllCategoryPage