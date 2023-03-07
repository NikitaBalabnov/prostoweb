import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div>Welcome to  AboutPage!
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default AboutPage