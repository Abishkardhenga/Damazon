import { useContext } from "react";
import { Store } from "../Store";
import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = () => {
    const [cookies] = useCookies(['token']);
    const { state: { userInfo } } = useContext(Store);

   

    // if (userInfo && cookies.token) {
    //     return <Outlet />;
    // } else {
    //     return <Navigate to="/signin" />;
    // }


    if(!userInfo && !cookies.token){
      return <Navigate to="/signin" />
    }
    else{
      return <Outlet/>
    }
};

export default ProtectedRoute;
