import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LogInPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname
    const {signin} = useAuth()
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signin(user,() => navigate(fromPage, {replace: true}))
    }
   return (
        <div className="">
            <h1 style={{marginBottom: '20px'}}>Log in page</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Username: <input name='username' type="text" />
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
   )
}

export default LogInPage