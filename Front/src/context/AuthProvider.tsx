import { AxiosResponse } from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode"
import { ProfileUser } from "@/types/user.type";
import { getOneUser } from "@/services/lib/user";

interface AuthProps {
    children: ReactNode
}
export interface User {
    email: string
    password: string
    token: string
    roles: string[]
}

interface AuthContextProps {
    auth: User | null
    setAuth: (user: User | null) => void
    persist?: any
    setPersist?: any
    token: string
}

const AuthContext = createContext<AuthContextProps>({
    auth: null,
    setAuth: () => {},
    
});

export const AuthProvider = ({ children }: AuthProps) => {
    const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false)
    const [user, setUser] = useState<ProfileUser | null>(null); // Change to single user, not an array

    useEffect(() => {
      const fetchUser = async () => {
        try {
      
          const token = localStorage.getItem("token"); 
            const decodedToken: any = jwt_decode(token);
            const userId = decodedToken.sub;
            const response: AxiosResponse = await getOneUser(userId);
            setUser(response.data);
            console.log(response)
          
          
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchUser();
      
    }, []);
    console.log(auth)
   useEffect(()=>{
    setAuth({token:localStorage.getItem('token'),user})
   },[user])
    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist,user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;