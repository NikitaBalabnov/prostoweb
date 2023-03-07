import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const {signout} = useAuth()
  const handleClick = () =>{
    signout(() => navigate('/login', {replace: true}))
  }
  return (
    <>
      <div>Welocme to HomePage!</div>
      <button onClick={handleClick}>Log out</button>
    </>
  )
}

export default HomePage