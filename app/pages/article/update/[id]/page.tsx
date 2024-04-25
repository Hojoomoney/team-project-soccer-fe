'use client'

import { IArticle } from "@/app/components/articles/model/article"
import { saveArticle } from "@/app/components/articles/service/article-service"
import { getMessageSave } from "@/app/components/articles/service/article-slice"
import { IBoard } from "@/app/components/boards/model/board"
import { findAllBoards } from "@/app/components/boards/service/board-service"
import { getAllBoards } from "@/app/components/boards/service/board-slice"
import { PG } from "@/app/components/common/enums/PG"
import { NextPage } from "next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { jwtDecode } from "jwt-decode"
import { parseCookies } from "nookies"

export default function UpdateArticlePage() {

  const {register, handleSubmit, formState : {errors} } = useForm();
  const [content, setContent] = useState("")
  const boards = useSelector(getAllBoards)
  const message = useSelector(getMessageSave)
  const [article, setArticle] = useState({} as IArticle)
  const router = useRouter()
  const dispatch = useDispatch()
  const selectHandler = (e: any) => {
    setArticle({
      ...article,
      boardId: e.target.value
    })
  }
  const handleChangeTitle = (e: any) => {
    setArticle({
      ...article,
      title: e.target.value
    })
  }
  const handleChangeContent = (e: any) => {
    setArticle({
      ...article,
      content: e.target.value
    })
  }

  const handleCancel = () => {
    console.log("canceled")
  }

  const handleSubmit1 = () => {
    dispatch(saveArticle(article));
    alert(JSON.stringify(message.message));
    router.push(`${PG.ARTICLE}/list/${article.boardId}`)
  }


  useEffect(() => {
    console.log('토큰의 아이디 : ' + jwtDecode<any>(parseCookies().accessToken).id)
  }, [])

  const onSubmit = (data : any) => {
    alert(JSON.stringify(data))
    dispatch(saveArticle(data))
    .then((res:any) => {
      alert(`게시글 작성 완료 ${res.payload.id}`)
      const boardId = res.payload.id
      router.push(`/pages/article/list/${boardId}`) 
    })
    .catch((err:any) => {

    })
  }

  return (

  

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select defaultValue={1}
        {...register('boardId', {required : true})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {boards.map((board : any) => (
            <option key={board.id} title={board.title} value={board.id}>{board.content}</option>
          ))
          }
        </select>
      

      <div className="heading text-center font-bold text-2xl m-5 text-gray-800">
        게시글 작성
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: '  body {background:white !important;}'
        }}
      />
      <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
        <input type="hidden" {...register('writerId', {required : true})} value={jwtDecode<any>(parseCookies().accessToken).id} readOnly/>
        <input {...register('title', {required : true, maxLength : 50})}
          className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
          placeholder="제목을 입력하세요."
          spellCheck="false"
          type="text"
        />
        <textarea {...register('content', {required : true, maxLength : 333})}
          className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
          placeholder="내용을 입력하세요."
          spellCheck="false"
        />
        <div className="icons flex text-gray-500 m-2">
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <svg
            className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
          <div className="count ml-auto text-gray-400 text-xs font-semibold">
            0/300
          </div>
        </div>
        <div className="buttons flex">
          <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-grey-500 ml-auto" onClick={handleCancel}>
            Cancel
          </div>
          {/* <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" onClick={handleSubmit1}>
            Post
          </div> */}
          <input className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" type="submit" value="SUBMIT" />
        </div>
      </div>
    </form>

  )
}

