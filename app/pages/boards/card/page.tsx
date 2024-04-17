'use client'

import CardButton from "@/app/atom/button/CardButton"
import { IBoard } from "@/app/components/boards/model/board"
import { findAllBoards } from "@/app/components/boards/service/board-service"
import { getAllBoards} from "@/app/components/boards/service/board-slice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

export default function BoardCards() {

    const allBoards : [] = useSelector(getAllBoards)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllBoards(1))
    },[])
    return (<>
        {allBoards.map((board : IBoard) => (
            <CardButton key={board.id} id={board.id} title={board.title} description={board.description} regDate={""} modDate={""}/>
        ))}
    </>)
}