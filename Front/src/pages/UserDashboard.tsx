import useAuth from "@/hooks/useAuth"
import { getOneUser } from "@/services/lib/user"
import { ProfileUser } from "@/types/user.type"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"


function UserDashboard() {
//   const [user,setUser] = useState<ProfileUser[]>([])
//   const [auth,setAuth] = useAuth()

// useEffect(() => {
// const fetchUser = async () => {
 
//   const response : AxiosResponse = await getOneUser(id)
//   try {
//         setUser(response.data)
//         console.log(setUser)
//   }catch(error){
//   console.log(error)
//   }
// }
// fetchUser()

// },[])


  return (
   
    <div>
      <h1>Dashboard</h1>


    </div>
  )
}

export default UserDashboard