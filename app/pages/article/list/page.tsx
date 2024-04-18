'use client'
import MoveButton from "@/app/atom/button/MoveButton";
import articleColumns from "@/app/components/articles/module/article-columns";
import { findAllArticles, findCountArticles } from "@/app/components/articles/service/article-service";
import { getAllArticles, getCountArticles } from "@/app/components/articles/service/article-slice";
import { PG } from "@/app/components/common/enums/PG";
import { alpha, gridClasses, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const articleListPage : NextPage = () => {
    const [pageSize, setPageSize] = useState(5);
    
    const dispatch = useDispatch();
    const count = useSelector(getCountArticles)
    const allArticles: [] = useSelector(getAllArticles)

    useEffect(() => {
        console.log("1번 nnn  useEffect 내부")
        dispatch(findAllArticles(1))
        dispatch(findCountArticles())
    },[] )


    return(<>
    
    <h1 className="text-center">게시글 목록 || 게시글 수 : {count}</h1>
        

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