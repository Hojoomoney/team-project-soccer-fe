'use client'
import UserColumns from "@/app/components/users/module/user-columns";
import { IUser } from "@/app/components/users/model/user-model";
import { fetchAllUsers } from "@/app/components/users/service/user-service";
import { getAllUsers } from "@/app/components/users/service/user-slice";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserListPage : NextPage = () => {
    const [pageSize, setPageSize] = useState(5);
    
    const dispatch = useDispatch()

    const allUsers : [] = useSelector(getAllUsers)
    if(allUsers !== undefined){
        console.log('끝번 : allUsers is defined')
        console.log('length is ' + allUsers.length)
        for (let i = 0; i < allUsers.length; i++) {
            console.log(JSON.stringify(allUsers[i]))
        }
    
    } else {
        console.log('끝번 : allUsers is undefined')
    }


    useEffect(() => {
        console.log("1번 nnn  useEffect 내부")
        dispatch(fetchAllUsers(1))
    },[] )


    return(<>
    
    <h1 className="text-center">사용자 목록</h1>
        

        <div style={{ height: 400, width: "100%" }}>
        <DataGrid
                    rows={allUsers}
                    columns={UserColumns()}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                />
    </div>
    </>)
}

export default UserListPage