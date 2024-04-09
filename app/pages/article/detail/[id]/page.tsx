'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllBoards } from "@/app/components/boards/service/board-service";
import { getAllBoards } from "@/app/components/boards/service/board-slice";
import BoardColumns from "@/app/components/boards/module/board-columns";
import { getArticleById } from "@/app/components/articles/service/article-slice";
import { findArticleById } from "@/app/components/articles/service/article-service";
import { MyTypography } from "@/app/components/common/style/cell";
// import React from "react";




export default function ArticleDetailPage (props:any) {
    const dispatch = useDispatch();
    const article = useSelector(getArticleById);

    useEffect(() => {
        dispatch(findArticleById(props.params.id))
    },[])

    return (
        <div>
        <h2>사용자 상세정보</h2>
        <span>No.</span>{MyTypography(article.id, "1rem")}
        <span>제목 : </span>{MyTypography(article.title, "1rem")}
        <span>내용 : </span>{MyTypography(article.content, "1rem")}
        <span>생성일자 : </span>{MyTypography(article.regDate, "1rem")}
        <span>최근 변경 일자 : </span>{MyTypography(article.modDate, "1rem")}
        </div>
    )
} 
