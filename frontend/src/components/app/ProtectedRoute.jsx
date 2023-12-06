import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { doLogout, setUser, setUserResident } from "../../features/auth";
import { getStudentInfo, getResidentInfo } from "../../api";

const ProtectedRoute = () => {
    const auth = useSelector(state => state.auth.value);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudent = async () => {
            try{
                const user = await getStudentInfo(auth.token);
                dispatch(setUser(user));
                localStorage.setItem("user", JSON.stringify(user))
                setIsLoading(false)



            }catch(err){
                setIsLoading(false);
                localStorage.clear();
                dispatch(doLogout());
            }
        }

        const fetchResident = async () => {
            try{
                const resident = await getResidentInfo(auth.token);
                dispatch(setUserResident(resident));
                localStorage.setItem("user_resident", JSON.stringify(resident))
            }catch(err){
                navigate("/app/not-allowed");
            }
        }

        if(location.pathname.includes("resident")){
            fetchResident();
        }

        fetchStudent();

    }, [location.pathname]);

    
    if(isLoading){
        return <div>Loading</div>
    }

    return auth.user ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoute;