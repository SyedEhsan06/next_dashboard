import ViewProduct from '@/components/Products/ViewProduct'
import React from 'react'

const page = ({params}) => {
    const { id } = params
  return (
    <ViewProduct id={id}/>
  )
}

export default page