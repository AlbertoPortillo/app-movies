import React, {useState} from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute(): JSX.Element {
    const [authenticated, setauthenticated] = useState(false);
    const getToken = () =>{
      return sessionStorage.getItem('token')
    }
    const token = getToken()
    if (authenticated || token) return <Outlet />
    return <Navigate to={'/'} />
}
