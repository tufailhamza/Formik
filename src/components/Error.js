import React from 'react'

const ErrorComp = ({touched , error}) => {
  return (
    <div className='error'>{error}</div>
  )
}

export default ErrorComp