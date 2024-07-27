import { useContext, useEffect } from "react"
import { Store } from "../Store"
import { Navigate, Outlet } from "react-router-dom"
import { useCookies } from "react-cookie";

const ProtectedRoute = () => {
    const [cookies] = useCookies();
  console.log("cookeis token", cookies.token)
  console.log("cookeis", cookies)


    const  { state:{userInfo} } = useContext(Store)
  
    useEffect(() => {
        console.log("Cookies token:", cookies.token);
        console.log("Cookies:", cookies);
        console.log("User info:", userInfo);
      }, [cookies, userInfo]);

    if(userInfo && cookies.token){
        return <Outlet/>


    }
    else{
        return <Navigate to="/signin"/>

    }


}

export default ProtectedRoute