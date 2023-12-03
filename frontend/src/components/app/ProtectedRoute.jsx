import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setUser } from "../../features/auth";
import { useGetUserInfoQuery } from "../../services/authService";

const ProtectedRoute = () => {
    const user = useSelector(state => state.auth.value.user);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    //Authenticate user
    const data = useGetUserInfoQuery("userInfo", {
        pollingInterval: 600000
    })

    useEffect(() => {
        if (data.data) {
            dispatch(setUser(data.data));
            setIsLoading(false)
        }else if(data.status === "rejected"){
            //dispatch logout? 
        }
    }, [data]);

    
    if(isLoading){
        return <div>Loading</div>
    }

    return user ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoute;