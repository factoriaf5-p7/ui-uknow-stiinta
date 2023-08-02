import { useContext, useDebugValue } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    const { auth } = useContext(AuthContext)
    console.log(auth, 'useAuth')
    return useContext(AuthContext);
}

export default useAuth;