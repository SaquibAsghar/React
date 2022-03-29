import React from 'react'

const Detail = ({name, age}) => {
  return (
    <div className='detail-container'>
    <h4>{name}</h4>
    <p>{age}</p>
    </div>
  )
}

export default Detail