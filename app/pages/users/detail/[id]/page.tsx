'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, TextField, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllBoards } from "@/app/components/boards/service/board-service";
import { getAllBoards } from "@/app/components/boards/service/board-slice";
import BoardColumns from "@/app/components/boards/module/board-columns";
import { MyTypography } from "@/app/components/common/style/cell";
import { getAllUsers, getCountUsers, getUserById, jobHandler, passwordHandler, phoneHandler } from "@/app/components/users/service/user-slice";
import { deleteUser, findCountUsers, findUserById, modifyUser } from "@/app/components/users/service/user-service";
import { IUser } from "@/app/components/users/model/user";
import { PG } from "@/app/components/common/enums/PG";
// import React from "react";




export default function UserDetailPage (props:any) {

    const dispatch = useDispatch()
    const user : IUser = useSelector(getUserById)
    const router = useRouter();
    const [modUser,setModUser] = useState({
        id : props.params.id,
        password : '',
        phone : '',
        job : ''
    }) 

    const handleChange = (e:any) => {
        const { target: {value, name} }= e;
            
        setModUser(modUser => ({
                ...modUser, [name] : value
            }))

    }

    useEffect(() => {
        dispatch(findUserById(props.params.id))
    },[])

    const handleDelete = (e:any) => {
        dispatch(deleteUser(props.params.id))    
        alert("삭제되었습니다.")
        router.replace(`${PG.USER}/list`)
    }

    const handleModify = () => {
        dispatch(modifyUser(modUser))
        alert("변경되었습니다.")
        router.push(`${PG.USER}/list`)
    }



    return (
        <div>
        <h2>사용자 상세정보</h2>
        <p className="text-base">id : {user.id}</p>
            <p className="text-base">아이디 : {user.username}</p>
            <span className="text-base">비밀번호 : </span><Input className="text-base" placeholder={user.password} name="password" onChange={handleChange} /><br />
            <p className="text-base">이름 : {user.name}</p>
            <span className="text-base">전화번호 : </span><Input className="text-base" placeholder={user.phone} name="phone" onChange={handleChange} /><br />
            <span className="text-base">직업 : </span><Input className="text-base" placeholder={user.job} name="job" onChange={handleChange} /><br />
        <span>생성일자 : </span><Input id="regDate" defaultValue={user.regDate} readOnly/><br />
        <span>최근 변경 일자 : </span><Input id="modDate" defaultValue={user.modDate} readOnly/><br />
        <Button variant="outlined" onClick={handleModify}>수정</Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>삭제</Button>
        </div>
    )
} 


