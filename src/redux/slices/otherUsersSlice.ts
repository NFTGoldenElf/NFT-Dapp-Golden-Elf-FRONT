import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type otherUsersState = {
    username: string;
    profilePhoto: string;
    accountAddress: string;
};

const initialState: otherUsersState[] = []

const otherUsersSlice = createSlice({
    name: 'otherUsers',
    initialState,
    reducers: {
        loadUsers: (_state, action: PayloadAction<otherUsersState[]>) => {
            return action.payload
        },
        resetUsers: () => {
            return initialState
        }
    }
})

export const { loadUsers, resetUsers } = otherUsersSlice.actions;
export default otherUsersSlice.reducer;