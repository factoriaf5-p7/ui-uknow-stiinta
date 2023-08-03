// import useAuth from "@/hooks/useAuth"
// import { getOneUser } from "@/services/lib/user"
// import { ProfileUser } from "@/types/user.type"
// import { AxiosResponse } from "axios"
// import { useEffect, useState } from "react"

import Button from "@/components/ui/Button"


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
   
    <section className="container  ">
      <h1 className="text-dark text-xl font-semibold w-2/3 my-4 ">Hello<br></br> Orlando Diggs.</h1>

      <article className=" relative ">
        <div className="bg-btnOscuro p-5 rounded-sm h-[150px]">
          <h3 className="text-white font-normal w-2/3 my-4">50% off take any courses</h3>
          <Button children="Buy Now" color="bg-orange" text="text-white"  />
          <img className="absolute bg-transparent top-[-31px] right-0 " src="girl-image.svg" alt="girl image" />
        </div>
      </article>

      <h2>Cursos</h2>

      <article>
        <div>12 curosos</div>
        <div>
          <div>cursos comprados</div>
          <div>crear curso</div>
        </div>
      </article>

      <h2>Cursos recientes</h2>
      <article>
        listado de cursos recientes
      </article>



    </section>
  )
}

export default UserDashboard