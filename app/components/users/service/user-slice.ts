import { createSlice } from "@reduxjs/toolkit";
import {
  findCountUsers,
  findAllUsers,
  findUserById,
  deleteUser,
  modifyUser,
  login,
} from "./user-service";
import { IUser } from "../model/user";

const status = {
  pending: "pending",
  fulfilled: "fulfilled",
  rejected: "rejected",
};

const handleFulfilled = (state: any, { payload }: any) => {
  console.log("------------------ handleFulfilled 실행 ---------------");
  state.array = payload;
  console.log(state.array);
};
interface IAuth {
  message?: string;
  token?: string;
}
interface UserState {
  array?: Array<IUser>;
  json?: IUser;
  auth?: IAuth;
}

export const initialState: UserState = {
  json: {} as IUser,
  array: [],
  auth: {} as IAuth,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    const { pending, rejected } = status;

    builder
      .addCase(findAllUsers.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(findUserById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(findCountUsers.fulfilled, (state: any, { payload }: any) => {
        state.count = payload;
      })
      .addCase(modifyUser.fulfilled, (state: any, { payload }: any) => {
        state.json = payload;
      })
      .addCase(login.fulfilled, (state: any, { payload }: any) => {
        state.auth = payload;
      });
  },
});
export const getAllUsers = (state: any) => {
  console.log(
    "----------------33번 Slice : getAllUsers 실행 -----------------"
  );
  //console.log(JSON.stringify(state.user.array))
  return state.user.array;
};

export const getUserById = (state: any) => state.user.array;
export const getCountUsers = (state: any) => state.user.count;
export const getAuth = (state: any) => state.user.auth;

export default userSlice.reducer;
