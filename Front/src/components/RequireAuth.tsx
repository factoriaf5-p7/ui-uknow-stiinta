import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { User } from "@/context/AuthProvider";

const RequireAuth = ({ allowedRoles }) => {
    const { auth, setAuth } = useAuth();
    const location = useLocation();
    console.log(auth, 'rrr')

    useEffect(() => {
        // setAuth({token: JSON.stringify(localStorage.getItem('token'))})
        console.log(auth)
    },[auth])
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.token
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;