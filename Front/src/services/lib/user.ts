import axiosClient from "../apiClient";



export function getOneUser(id:string){
    return axiosClient.get(`/users/${id}`)
}

