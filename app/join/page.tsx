"use client";

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
  };

  return (
    <>
      <h2>회원가입 페이지</h2>
      <p>
        아이디 : <input type="text" onChange={handleChangeUsername} />
      </p>
      <p>
        비밀번호 : <input type="text" onChange={handleChangePassword} />
      </p>
      <p>
        이름 : <input type="text" onChange={handleChangeName} />
      </p>
      <p>
        전화번호 : <input type="text" onChange={handleChangePhone} />
      </p>
      <p>
        주소 : <input type="text" onChange={handleChangeAddress} />
      </p>
      <button onClick={handleSubmit}>회원가입 하기</button>
    </>
  );
}
