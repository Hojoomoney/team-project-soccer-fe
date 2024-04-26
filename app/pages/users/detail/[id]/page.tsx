'use client'

import { useRouter } from "next/navigation"
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input, TextField, Typography} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { NextPage } from "next";
import { findAllBoards } from "@/app/components/boards/service/board-service";
import { getAllBoards } from "@/app/components/boards/service/board-slice";
import BoardColumns from "@/app/components/boards/module/board-columns";
import { MyTypography } from "@/app/components/common/style/cell";
import { getAllUsers, getCountUsers, getUserById} from "@/app/components/users/service/user-slice";
import { deleteUser, findCountUsers, findUserById, modifyUser } from "@/app/components/users/service/user-service";
import { IUser } from "@/app/components/users/model/user";
import { PG } from "@/app/components/common/enums/PG";
import { useForm } from "react-hook-form";
// import React from "react";




export default function UserDetailPage (props:any) {

    const dispatch = useDispatch()
    const user : IUser = useSelector(getUserById)
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          id : props.params.id,
          username : user.username,
          password : user.password,
          email : user.email,
          name : user.name,
          phone : user.phone,
          job : user.job
        },
      })
    const router = useRouter();

    useEffect(() => {
        dispatch(findUserById(props.params.id))
    },[])

    const handleDelete = (e:any) => {
        dispatch(deleteUser(props.params.id))    
        alert("삭제되었습니다.")
        router.replace(`${PG.USER}/list`)
    }

    const onSubmit=(user: IUser)=>{
        dispatch(modifyUser(user))
          .then((res: any) => {
            console.log(res.payload)
            if(res.payload.message ==='SUCCESS'){
              alert("회원 정보 수정 완료");
              router.push(`${PG.BOARD}/list`);
            }else if(res.payload.message==='FAILURE'){
              alert("회원 정보 수정 실패");
            }
          })
          .catch((error: any) => {
          }).finally(()=>{
            location.reload();
          });
      }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" max-w-md mx-auto mb-10 mt-10">
        <label htmlFor="large" className="block mb-2 text-base font-medium text-gray-900 dark:text-white"></label>
        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          {MyTypography('회원 정보 수정', "1.5rem")}
          
          <div className="username-wrapper">
            <input
              {...register('username')}
              className="username mt-2 bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              type="text"
              defaultValue={user.username}
              readOnly
            />
            <span className="hover-message"></span>
          </div>
          <input
            {...register('password', {maxLength: 20,required : true})}
            className="password bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            defaultValue={user.password}
            type="text"
            name="password"
            />
        <input
            {...register('email', { maxLength: 50})}
            className="email bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            defaultValue={user.email}
            type="text"
            name="email"
           />
          <input
            {...register('name', {maxLength: 20})}
            className="name bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            defaultValue = {user.name}
            type="text"
            name="name" readOnly
             />
          <input
            {...register('phone', { maxLength: 20,required : true})}
            className="phone bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            defaultValue={user.phone}
            type="text"
            name="phone"
           />
          <input
            {...register('job', { maxLength: 20,required : true})}
            className="job bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
            defaultValue={user.job}
            type="text"
            name="job"
            />
          {/* <!-- buttons --> */}
          <div className="buttons flex justify-center gap-5">
            <div className="btn justify-items-center overflow-hidden relative w-30 bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- behtmlFore:block behtmlFore:absolute behtmlFore:h-full behtmlFore:w-1/2 behtmlFore:rounded-full
          behtmlFore:bg-pink-400 behtmlFore:top-0 behtmlFore:left-1/4 behtmlFore:transition-transhtmlForm behtmlFore:opacity-0 behtmlFore:hover:opacity-100 hover:text-200 hover:behtmlFore:animate-ping transition-all duration-00
          border border-gray-300 shadow-lg text-lg
          hover:bg-blue-100 focus:shadow-outline focus:outline-none
          "
              >취소</div>
            <input
              type="submit" value="SUBMIT"
              className="btn  overflow-hidden relative w-30 bg-white text-blue-500 p-3 px-4 rounded-xl font-bold uppercase -- behtmlFore:block behtmlFore:absolute behtmlFore:h-full behtmlFore:w-1/2 behtmlFore:rounded-full
          behtmlFore:bg-pink-400 behtmlFore:top-0 behtmlFore:left-1/4 behtmlFore:transition-transhtmlForm behtmlFore:opacity-0 behtmlFore:hover:opacity-100 hover:text-200 hover:behtmlFore:animate-ping transition-all duration-00
          border border-gray-300 shadow-lg text-lg
          hover:bg-blue-100 focus:shadow-outline focus:outline-none"
            />
          </div>
        </div>
        <div className="btn justify-items-center overflow-hidden relative ml-24 max-w-60 my-10 bg-blue-500 text-white text-center p-3 mx-16 rounded-xl text-xl font-bold uppercase -- behtmlFore:block behtmlFore:absolute behtmlFore:h-full behtmlFore:w-1/2 behtmlFore:rounded-full
          behtmlFore:bg-pink-400 behtmlFore:top-0 behtmlFore:left-1/4 behtmlFore:transition-transhtmlForm behtmlFore:opacity-0 behtmlFore:hover:opacity-100 hover:text-200 hover:behtmlFore:animate-ping transition-all duration-00
          border border-gray-300 shadow-lg hover:bg-blue-400 focus:shadow-outline focus:outline-none"
          onClick={handleDelete}>회원 탈퇴</div>
      </form>
    )
} 


