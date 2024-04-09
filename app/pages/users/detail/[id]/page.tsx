'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllBoards } from "@/app/components/boards/service/board-service";
import { getAllBoards } from "@/app/components/boards/service/board-slice";
import BoardColumns from "@/app/components/boards/module/board-columns";
import { MyTypography } from "@/app/components/common/style/cell";
import { getUserById } from "@/app/components/users/service/user-slice";
import { findUserById } from "@/app/components/users/service/user-service";
// import React from "react";




export default function UserDetailPage (props:any) {

    const dispatch = useDispatch();
    const user = useSelector(getUserById);

    useEffect(() => {
        dispatch(findUserById(props.params.id))
    },[])

    return (
        <div>
        <h2>사용자 상세정보</h2>
        <span>No.</span>{MyTypography(user.id, "1rem")}
        <span>아이디 : </span>{MyTypography(user.username, "1rem")}
        <span>비밀번호 : </span>{MyTypography(user.password, "1rem")}
        <span>이메일 : </span>{MyTypography(user.email, "1rem")}
        <span>이름 : </span>{MyTypography(user.name, "1rem")}
        <span>전화번호 : </span>{MyTypography(user.phone, "1rem")}
        <span>직업 : </span>{MyTypography(user.job, "1rem")}
        <span>생성일자 : </span>{MyTypography(user.regDate, "1rem")}
        <span>최근 변경 일자 : </span>{MyTypography(user.modDate, "1rem")}
        </div>
    )
} 
