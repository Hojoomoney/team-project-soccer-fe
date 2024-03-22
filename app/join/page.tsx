"use client";

import axios from "axios";
import { useState } from "react";
const SERVER = "http://localhost:8080";

export default function Join() {
  const [join, setJoin] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    address: "",
  });

  const url = `${SERVER}/join`;
  const data = { join };
  const config = {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer blah ~`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  const handleChangeUsername = (e: any) => {
    setJoin({ ...join, username: e.target.value });
  };
  const handleChangePassword = (e: any) => {
    setJoin({ ...join, password: e.target.value });
  };
  const handleChangeName = (e: any) => {
    setJoin({ ...join, name: e.target.value });
  };
  const handleChangePhone = (e: any) => {
    setJoin({ ...join, phone: e.target.value });
  };
  const handleChangeAddress = (e: any) => {
    setJoin({ ...join, address: e.target.value });
  };

  const handleSubmit = () => {
    alert("리퀘스트가 가져가는 이름 : " + join.username);

    axios.post(url, data, config).then((res) => {
      alert("리스폰스가 가져온 이름 : " + JSON.stringify(res.data));
    });
  };

  return (
    <>
      <h1>회원가입 페이지</h1>
      <p>아이디</p>
      <input type="text" onChange={handleChangeUsername} />
      <p>비밀번호</p>
      <input type="text" onChange={handleChangePassword} />
      <p>이름</p>
      <input type="text" onChange={handleChangeName} />
      <p>전화번호</p>
      <input type="text" onChange={handleChangePhone} />
      <p>주소</p>
      <input type="text" onChange={handleChangeAddress} />
      <button onClick={handleSubmit}>회원가입 하기</button>
    </>
  );
}
