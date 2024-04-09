'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import { Box, Button, Input } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllBoards } from "@/app/components/boards/service/board-service";
import { getAllBoards } from "@/app/components/boards/service/board-slice";
import BoardColumns from "@/app/components/boards/module/board-columns";
// import React from "react";




const BoardListPage: NextPage = ({ data }: any) => {
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

    <h1 className="text-center">사용자 목록</h1>


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

export default BoardListPage