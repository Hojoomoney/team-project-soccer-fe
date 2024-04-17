'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllBoards, findBoardById } from "@/app/components/boards/service/board-service";
import { getAllBoards, getSingleBoard } from "@/app/components/boards/service/board-slice";
import BoardColumns from "@/app/components/boards/module/board-columns";
import { rowSelectionStateInitializer } from "@mui/x-data-grid/internals";
import { propsToClassKey } from "@mui/styles";
import { MyTypography } from "@/app/components/common/style/cell";
// import React from "react";




export default function BoardDetailPage (props:any) {

    const dispatch = useDispatch();
    const board = useSelector(getSingleBoard)

    useEffect(() => {
        console.log("1번 nnn  useEffect 내부")
        dispatch(findBoardById(props.params.id))
    },[] )
    return (<>
        게시판 상세 
        <span>ID</span>{MyTypography(board.id, "1rem")}
        <span>게시판이름</span>{MyTypography(board.boardName, "1rem")}
        <span>게시판타입</span>{MyTypography(board.boardType, "1rem")}
        <span>등록일</span>{MyTypography(board.regDate, "1rem")}
        <span>수정일</span>{MyTypography(board.modDate, "1rem")}


    </>)
} 
