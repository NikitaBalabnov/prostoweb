import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditPost = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const goBack = (param) => navigate(param)
  return (
    <>
    <button onClick={() => goBack(-1)}>Go back</button>
    <button onClick={() => goBack('/blog')}>Go to blog</button>
    <h3>Edit Post number {id}</h3>
    </>
  )
}

export default EditPost