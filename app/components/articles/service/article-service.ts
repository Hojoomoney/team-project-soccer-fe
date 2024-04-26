import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArticle } from "../model/article";
import { deleteArticleAPI, findAllArticlesAPI, findAllByBoardIdApi, findArticleByIdAPI, findCountArticlesAPI, modifyArticleApi, saveArticleApi } from "./article-api";
import axios from "axios";
import { API } from "@/app/components/common/enums/API";
import AxiosConfig from "@/app/components/common/configs/axios-config";
import { modifyUserApi } from "../../users/service/user-api";

export const findAllArticles: any = createAsyncThunk(
    'articles/findAllArticles',
    async (page: number)=>{
        console.log('findAllArticles page : '+ page)
        const data:any = await  findAllArticlesAPI(page);

        const {message, result}:any = data
        // console.log('----- API 를 사용한 경우 -----')
        // console.log('message : '+ message)
        // console.log(JSON.stringify(result))
        return data
    }
)

export const findArticleById: any = createAsyncThunk(
    'articles/findArticleById',
    async (id: number) => (await findArticleByIdAPI(id))
    
)

export const findCountArticles : any = createAsyncThunk(
    'articles/findArticlesCount',
    async () => (await findCountArticlesAPI())
)

export const deleteArticle : any = createAsyncThunk(
    'articles/deleteArticle',
    async (id : number) => (await deleteArticleAPI(id))
)

export const findAllByBoardId : any = createAsyncThunk(
    'articles/findAllByBoardId',
    async (id : number) => (await findAllByBoardIdApi(id))
)

export const saveArticle : any = createAsyncThunk(
    'articles/saveArticle',
    async (article : IArticle) => {
        
       const data : any = await saveArticleApi(article)
       console.log(data)
        return data
    }
)

export const modifyArticle : any = createAsyncThunk(
    'articles/saveArticle',
    async (article : IArticle) => {
        
       const data : any = await modifyArticleApi(article)
       console.log(data)
        return data
    }
)