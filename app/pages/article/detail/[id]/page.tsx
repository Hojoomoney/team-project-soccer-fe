'use client'

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getArticleById } from "@/app/components/articles/service/article-slice";
import { deleteArticle, findArticleById, modifyArticle } from "@/app/components/articles/service/article-service";
import { MyTypography } from "@/app/components/common/style/cell";
import { Button, Input, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { PG } from "@/app/components/common/enums/PG";
import { IArticle } from "@/app/components/articles/model/article";
// import React from "react";




export default function ArticleDetailPage (props:any) {
    const dispatch = useDispatch();
    const article = useSelector(getArticleById);
    const router = useRouter()
    const [newArticle, setNewArticle] = useState({id : props.params.id} as IArticle)

    useEffect(() => {
        dispatch(findArticleById(props.params.id))
    },[])
    
    

    const handleChangeTitle = (e: any) => {
        setNewArticle({
          ...newArticle,
          title: e.target.value
        })
      }
      const handleChangeContent = (e: any) => {
        setNewArticle({
          ...newArticle,
          content: e.target.value
        })
      }

    const handleDelete = (e:any) => {
        dispatch(deleteArticle(props.params.id))    
        alert("삭제되었습니다.")
        router.back()
    }

    const handleModify = () => {
        dispatch(modifyArticle(newArticle))
        alert("변경되었습니다.")
        router.back()
    }


    return (<div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <p className="text-xl">Article Detail</p><br />
    <p className="text-base">ID : {article.id}</p>
    <input 
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder={article.title} onChange={handleChangeTitle}
          spellCheck="false"
          type="text"
        />
        <textarea 
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          placeholder={article.content} onChange={handleChangeContent}
          spellCheck="false"
        />
    <p className="text-base">Register Date :</p>
    <p className="text-base">Modified Date : </p>
    <Button onClick={handleModify}>Update</Button>
    <Button onClick={handleDelete}>Delete</Button>
</div>)
} 
