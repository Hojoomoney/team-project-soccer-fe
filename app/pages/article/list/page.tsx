'use client'
import articleColumns from "@/app/components/articles/module/article-columns";
import { findAllArticles } from "@/app/components/articles/service/article-service";
import { getAllArticles } from "@/app/components/articles/service/article-slice";
import { alpha, gridClasses, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const articleListPage : NextPage = () => {
    const [pageSize, setPageSize] = useState(5);
    
    const dispatch = useDispatch();

    const allArticles: [] = useSelector(getAllArticles)
    if(allArticles !== undefined){
        console.log('끝번 : allArticles is defined')
        console.log('length is ' + allArticles.length)
        for (let i = 0; i < allArticles.length; i++) {
            //console.log(JSON.stringify(allArticles[i]))
        }
    
    } else {
        console.log('끝번 : allArticles is undefined')
    }


    useEffect(() => {
        console.log("1번 nnn  useEffect 내부")
        dispatch(findAllArticles(1))
    },[] )


    return(<>
    
    <h1 className="text-center">사용자 목록</h1>
        

        <div style={{ height: 400, width: "100%" }}>
        {allArticles && <DataGrid
                    rows={allArticles}
                    columns={articleColumns()}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                /> }
    </div>
    </>)
}

export default articleListPage