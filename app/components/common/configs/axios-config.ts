import axios, { AxiosInstance } from "axios";
import { parseCookies } from "nookies";

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
export default function instance() {
  const instance = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
  setIntercepter(instance)
  return instance
}

export const setIntercepter = (inputInstance:AxiosInstance) => {
    inputInstance.interceptors.request.use(
    (config) => {
      //성공
      console.log("Axios Intercepter Parsing Cookies Token : Success");
      config.headers["Content-Type"] = "application/json";
      config.headers["Authorization"] = `Bearer ${parseCookies().accessToken}`;
      return config;
    },
    (error) => {
      //실패
      console.log("Axios Intercepter Error : " + error);
      return Promise.reject(error);
    }
  );

  inputInstance.interceptors.response.use(
    (response) => {
    if (response.status === 404) {
      console.log("404 page Reason : No Token!! - Axios Intercepter Error");
    }
    return response;
  });

}