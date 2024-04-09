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
import { rowSelectionStateInitializer } from "@mui/x-data-grid/internals";
import { propsToClassKey } from "@mui/styles";
// import React from "react";




export default function BoardDetailPage (props:any) {
    useEffect(() => {
        console.log("1번 nnn  useEffect 내부")
        //dispatch(findBoardById(props.params.id))
    },[] )
    return (<>
        게시판 상세 
        <span>ID</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> {props.params.id} </Typography>
        <span>게시판이름</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> </Typography>
        <span>게시판타입</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> </Typography>
        <span>등록일</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}> </Typography>
        <span>수정일</span><Typography textAlign="center" sx={{fontSize:"1.5rem"}}>  </Typography>


    </>)
} 
