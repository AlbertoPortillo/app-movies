import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute(): JSX.Element {
    const getToken = () =>{
      return sessionStorage.getItem('token')
    }
    const token = getToken()
    if ( token) return <Outlet />
    return <Navigate to={'/'} />
}
