import axios from "axios"
import { parseCookies } from "nookies"

// export default function AxiosConfig(){
//     return {
//         headers: {
//             "Cache-Control": "no-cache",
//             "Content-Type": "application/json",
//             Authorization: `Bearer blah ~`,
//             "Access-Control-Allow-Origin": "*",
//         }
//     }
// }

const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL})

instance.interceptors.request.use(
    (config) => {  //성공
        const accessToken = parseCookies().accessToken;
        console.log('Axios Intercepter Parsing Cookies Token : Success')
        config.headers['Content-Type'] = "application/json"
        config.headers['Authorization'] = `Bearer ${accessToken}`
        return config
    },
    (error) => {   //실패
        console.log('Axios Intercepter Error : ' + error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    (response) => {

        if(response.status === 404){
            console.log('404 page Reason : No Token Axios Intercepter Error')
        }
        return response
    }
)

export default instance 