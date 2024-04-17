import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from '../model/board';
import { findAllBoards, findBoardById, findCountBoards } from './board-service';


interface BoardState {
    json : IBoard,
    array : Array<IBoard>
    count : number
}

export const initialState:BoardState = {
    json : {} as IBoard,
    array : [],
    count : 0
}
const status = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

const handleFulfilled =  (state: any, {payload}: any) => {
    console.log('------------------ conclusion ---------------')
    state.array = payload
    console.log(state.array)

}


const handlePending = (state: any) => {
  
}

const handleRejected = (state: any) => {
  
}


export const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const {pending, rejected} = status;

        builder
        .addCase(findAllBoards.fulfilled, handleFulfilled) //switch case랑 유사 (findAllboards.fulfilled면 handleFulfilled함수를 실행해라)
        .addCase(findBoardById.fulfilled, (state:any,{payload} : any) => {state.array = payload})
        .addCase(findCountBoards.fulfilled, (state:any, {payload} : any) => {state.count = payload})
    }
})
export const getAllBoards = (state: any) => { //getter
    return state.board.array;
}
export const getSingleBoard = (state: any) => state.board.json
export const getCountBoards = (state : any) => state.board.count

export const {} = boardSlice.actions

export default boardSlice.reducer;