import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
    username: string;
    profilePhoto: string;
    accountAddress: string;
    _id: string;
}

export type UserEdit = {
    username: string;
    profilePhoto: string;
}

const initialState: UserState = {
    username: "",
    profilePhoto: "",
    accountAddress: "",
    _id: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUserInfo: (state, action: PayloadAction<UserState>) => {
            return { ...state, ...action.payload }
        },
        deleteUserInfo: (state) => {
            return { ...state, ...initialState }
        },
        editUserInfo: (state, action: PayloadAction<UserEdit>) => {
            return { ...state, ...action.payload }
        }
    }
});

export const { loadUserInfo, deleteUserInfo, editUserInfo } = userSlice.actions;
export default userSlice.reducer;
