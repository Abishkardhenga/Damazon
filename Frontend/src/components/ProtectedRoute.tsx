import { useContext } from "react"
import { Store } from "../Store"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const  { state:{userInfo} } = useContext(Store)
    if(!userInfo){
       return <Navigate to="/signin"/>

    }
    else{
        return <Outlet/>

    }

}

export default ProtectedRoute