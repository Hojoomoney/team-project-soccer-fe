import { instance } from "@/app/components/common/configs/axios-config"

export const findAllUsersAPI = async (page:number) => {
    try {
        console.log("3번")
        const response = await instance.get('/users/list', {
            params: {page,size: 10, limit:10}
        })
        //console.log(JSON.stringify(response.data))
        return response.data
    } catch(error){
        console.log(error)
        return error
    }
}

export const findUserByIdAPI = async (id : number) => {
    try {
        const response = await instance.get('/users/detail', {
            params: {id}
        })
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error
    }
}