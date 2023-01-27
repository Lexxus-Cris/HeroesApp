import { useContext } from "react"
import { AuthContext } from "../../auth/context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {

    const { authState } = useContext(AuthContext)

    const { logged } = authState

    console.log(logged);

    return(logged)
        ? <Outlet />
        : <Navigate to='/login' />
}
