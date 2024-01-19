import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
    username: string;
    profilePhoto: string;
}

const initialState: UserState = {
    username: "",
    profilePhoto: "",
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
