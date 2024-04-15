'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { Box, Button, Input, Link } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllBoards } from "@/app/components/boards/service/board-service";
import { getAllBoards } from "@/app/components/boards/service/board-slice";
import BoardColumns from "@/app/components/boards/module/board-columns";
import { PG } from "@/app/components/common/enums/PG";
// import React from "react";

const cards = [
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];


export default function BoardListPage ({ data }: any) {
  const dispatch = useDispatch()

  const allBoards: [] = useSelector(getAllBoards)

  if (allBoards !== undefined) {
    console.log('allboards is not undefined')

    console.log('length is ' + allBoards.length)
    for (let i = 0; i < allBoards.length; i++) {
      console.log(JSON.stringify(allBoards[i]))
    }
  } else {
    console.log('allboards is undefined')
  }


  useEffect(() => {
    dispatch(findAllBoards(1))
  }, [])

  return (<>

    <h1 className="text-center">게시판 목록</h1>

    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
        {cards.map((data, index) => {
          return (
            <section
              className="flex-shrink-0 w-full snap-center justify-center items-center"
              key={index}
            >
              <img
                src={data}
                alt="Images to scroll horizontal"
                className="w-full h-[500px]"
              />
            </section>
          );
        })}
      </div>
    </div>
        <h1 className="text-center"><Link href={`${PG.ARTICLE}/save`}>게시판 글쓰기</Link></h1>
    <div style={{ height: 400, width: "100%" }}>
      {allBoards && <DataGrid
        rows={allBoards}
        columns={BoardColumns()}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
      />}
    </div>
  </>)
}
