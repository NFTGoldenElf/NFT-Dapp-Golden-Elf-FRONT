import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type WalletState = {
    accounts: string[];
    balance: string;
    chainId: string;
    numericChainId: number | null;
}

const initialState: WalletState = {
    accounts: [],
    balance: "",
    chainId: "",
    numericChainId: null
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        updateWallet: (state, action: PayloadAction<WalletState>) => {
            return { ...state, ...action.payload }
        },
        resetWallet: (state) => {
            return { ...state, ...initialState }
        }
    }
})

export const { updateWallet, resetWallet } = walletSlice.actions;
export default walletSlice.reducer;