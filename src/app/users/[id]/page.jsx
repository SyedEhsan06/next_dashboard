import ViewUser from '@/components/Users/ViewUser'

import React from 'react'

const page = ({params}) => {
    const { id } = params
  return (
    <>
        <ViewUser id={id} />
    </>
  )
}

export default page