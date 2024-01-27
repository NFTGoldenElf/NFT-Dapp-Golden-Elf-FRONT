import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type ProviderState = {
    hasProvider: boolean;
}

const initialState: ProviderState = {
    hasProvider: false,
}

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {
        hasProviderStatus: (state, action: PayloadAction<boolean>) => {
            state.hasProvider = action.payload
        }
    }
})

export const { hasProviderStatus } = providerSlice.actions;
export default providerSlice.reducer