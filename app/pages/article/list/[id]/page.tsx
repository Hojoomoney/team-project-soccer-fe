'use client'
import articleColumns from "@/app/components/articles/module/article-columns";
import { findAllArticles, findAllByBoardId, findCountArticles } from "@/app/components/articles/service/article-service";
import { getAllArticles, getAllByBoardId, getCountArticles } from "@/app/components/articles/service/article-slice";
import { alpha, gridClasses, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const articleListPage : NextPage = (props: any) => {
    const [pageSize, setPageSize] = useState(5);
    
    const dispatch = useDispatch();
    const allArticles: [] = useSelector(getAllByBoardId)

    useEffect(() => {
        console.log("1번 nnn  useEffect 내부")
        dispatch(findAllByBoardId(props.params.id))
    },[] )


    return(<>
    
    <h1 className="text-center">게시글 목록</h1>
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