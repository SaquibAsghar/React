import React from 'react'
import "./singleAnswerStyles.css"

const SingleAnswer = ({ans}) => {
  return (
    <div className="answers">{ans}</div>
  )
}

export default SingleAnswer