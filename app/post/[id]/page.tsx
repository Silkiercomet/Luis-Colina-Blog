import React from 'react'

const page = ({params} : {
    params: {id: string}
}) => {
  return (
    <div>ID : {params.id}</div>
  )
}

export default page