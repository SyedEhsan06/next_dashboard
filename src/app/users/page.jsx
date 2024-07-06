import Users from '@/components/Users/Users'
import React from 'react'

const page = (params) => {
  return (
    <>
    <Users searchParams={params}/>
    </>
  )
}

export default page