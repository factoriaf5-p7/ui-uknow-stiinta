import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `http://localhost:3000`,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

axiosClient.interceptors.response.use(
    function(response) {
        console.log(response)
        return response;
    },
    function(error) {
        const res = error.response;
        if (res.status == 401) {
            console.log('Redirigir al home');//cambiar esto por la ruta válida del home            
        }
        console.error(`Looks like there was a problem. Status Code: ${res.status}`);
        return Promise.reject(error);
    }
)

export default (
    axiosClient
  )