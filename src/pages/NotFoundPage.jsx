import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>Your page is not found. Let's go home <Link to="/">Home</Link></div>
  )
}

export default NotFoundPage