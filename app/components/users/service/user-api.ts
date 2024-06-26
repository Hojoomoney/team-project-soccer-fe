import instance from "@/app/components/common/configs/axios-config"
import { IUser } from "../model/user"

export const findAllUsersAPI = async (page:number) => {
    try {
        console.log("3번")
        const response = await instance().get('/users/list', {
            params: {page,size: 10, limit:10}
        })
        return response.data
    } catch(error){
        console.log(error)
        return error
    }
}

export const findUserByIdAPI = async (id : number) => {
    try {
        return (await instance().get('/users/detail', {
            params: {id}
        })).data;
    } catch (error) {
        return error
    }
}

export const findCountUsersAPI = async () => {
    try {
        return (await instance().get(`/users/count`)).data
    } catch (error) {
        return error
    }
}

export const deleteUserApi = async (id : number) => {
    try {
        await instance().delete(`/users/delete`, {
            params : {id}
        })
    } catch (error) {
        return error
    }
}

export const modifyUserApi = async (modUser : {}) => {
    try {
        return (await instance().put(`/users/modify`,modUser)).data
    } catch (error) {
        return error
    }
}

export const loginAPI = async (user : IUser) => {
    try {
        return (await instance().post(`/auth/login`,user)).data
    } catch (error) {
        return error
    }
}

export const existsByUsernameAPI = async (username : string) => {
    try {
        return (await instance().get(`/auth/exists-username`, {
            params : {username}
        }
        )).data
    } catch (error) {
        return error
    }
}

export const logoutAPI = async () => {
    try {
        return (await instance().get(`/users/logout`)).data
    } catch (error) {
        return error
    }
}