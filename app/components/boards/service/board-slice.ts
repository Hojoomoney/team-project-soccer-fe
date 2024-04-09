import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from '../model/board';
import { initialState } from './board-init';
import { findAllBoards, findBoardById } from './board-service';

const boardThunks = [findAllBoards]

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
    }
})
export const getAllBoards = (state: any) => { //getter
    console.log('------------------ Before useSelector ---------------')
    console.log(JSON.stringify(state.board.array))
    return state.board.array;
}

export const getBoardById = (state: any) => state.board.array

export const {} = boardSlice.actions

export default boardSlice.reducer;