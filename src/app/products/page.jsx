import Products from '@/components/Products/Prodcuts'
import React from 'react'

const page = (params) => {
  return (
    <>
        <Products 
        searchParams={params}
        />
    </>
  )
}

export default page