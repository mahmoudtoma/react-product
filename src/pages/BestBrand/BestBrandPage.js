import React from 'react'
import AllBrandContainer from '../../components/Brands.js/AllBrandContainer'
import ReactPagination from '../../components/Utilty/ReactPagination'
import AllBrandPageHook from '../../Hook/Brand/AllBrandPageHook';

const BestBrandPage = () => {
  const [brand, loading, PageCount, getPage] = AllBrandPageHook();

  return (
    <div>
      <AllBrandContainer data={brand.data} loading={loading} />
      {
        PageCount > 1 ? (<ReactPagination PageCount={PageCount} onPress={getPage} />
        ) : null
      }
    </div>
  )
}

export default BestBrandPage