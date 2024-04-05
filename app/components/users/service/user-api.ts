import { instance } from "@/app/components/common/configs/axios-config"

export const fetchAllUsersAPI = async (page:number) => {
    try {
        console.log("3번")
        const response = await instance.get('/users', {
            params: {page,size: 10, limit:10}
        })
        console.log(JSON.stringify(response.data))
        return response.data
    } catch(error){
        console.log(error)
        return error
    }
}