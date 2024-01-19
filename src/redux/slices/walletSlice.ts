import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type WalletState = {
    accounts: string[];
    balance: string;
    chainId: number | null;
}

const initialState: WalletState = {
    accounts: [],
    balance: "",
    chainId: null
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setWallet: (state, action: PayloadAction<WalletState>) => {
            return { ...state, ...action.payload }
        },
        resetWallet: (state) => {
            return { ...state, ...initialState }
        }
    }
})

export const { setWallet, resetWallet } = walletSlice.actions;
export default walletSlice.reducer;