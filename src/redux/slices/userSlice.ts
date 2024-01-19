import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
    username: string;
    profilePhoto: string;
    accountAddress: string;
    _id: string;
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
    }
});

export const { loadUserInfo, deleteUserInfo } = userSlice.actions;
export default userSlice.reducer;
