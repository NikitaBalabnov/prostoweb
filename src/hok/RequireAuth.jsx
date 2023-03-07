import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'


const RequireAuth = ({children}) => {
    const location = useLocation()
    const {user} = useAuth()
    if(!user){
        return <Navigate to={'/login'} state = {{from: location}}/>
    }
  return children
}

export default RequireAuth