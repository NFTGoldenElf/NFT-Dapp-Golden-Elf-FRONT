import { WalletState } from "../redux/slices/walletSlice"
import Web3 from "web3"

export const web3 = new Web3(window.ethereum || "");

export const formatBalance = (rawBalance: number): string => {
    const balance = rawBalance.toFixed(2)
    return `${balance} ETH`
}

export const formatChainAsNum = (chainId: bigint): number => {
    const chainIdNum = Number(chainId)
    return chainIdNum
}


export const getWalletData = async (accounts: string[]): Promise<WalletState> => {
    const chainId: number = formatChainAsNum(await web3.eth.getChainId());
    const rawBalance = web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), "ether");
    const balance: string = formatBalance(Number(rawBalance));
    const wallet = new Wallet(accounts, balance, chainId);
    return wallet;
}

export class Wallet implements WalletState {
    accounts: string[];
    balance: string;
    chainId: number;
    constructor(accounts: string[], balance: string, chainId: number) {
        this.accounts = accounts;
        this.balance = balance;
        this.chainId = chainId;
    }
}

