import React from 'react'

const Important = ({response}) => {
  return (
    <div>
      Important
      title: {response.title}
      status: {response.status}
    </div>
  )
}

export default Important