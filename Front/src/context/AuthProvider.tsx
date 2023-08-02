import { ReactNode, createContext, useState } from "react";

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

    return (
        <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;