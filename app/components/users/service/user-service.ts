import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsersAPI } from "./user-api";

export const findAllUsers : any = createAsyncThunk(
    'users/findAllUsers',
    async (page:number) => {
        console.log('2번 findAllUsers page : '+ page)
        const data : any = await findAllUsersAPI(1);
    
        return data;
    }
)