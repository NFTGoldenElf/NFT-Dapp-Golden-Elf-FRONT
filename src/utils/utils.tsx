import { WalletState } from "../redux/slices/walletSlice"
import Web3 from "web3"
import abiContract from '../abis/abiContract.json';
import axios from "axios";

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

const NFTContract = new web3.eth.Contract(abiContract.abi, "0x653c21B1eC8EACbc8fcE0F1daDdc4788a1fC197F");
export const { mint, URITokensAndIds, getNFTsForSale, listNFTForSale, buyNFT, getNFTPrice, wallet } = NFTContract.methods;


export interface formattedNFTs {
    name: string;
    description: string;
    image: string;
    external_url: string;
    tokenId: number;
}

export const formatURITokensAndIds = async (nfts: any[] | void): Promise<formattedNFTs[]> => {
    let returnedNFTs: formattedNFTs[] = [];
    if (!nfts) {
        throw Error("No hay nfts para formatear")
    }
    for (let i = 0; i < nfts.length; i++) {
        const response = await axios.get(nfts[i]["1"]);

        const dataArray = {
            tokenId: Number(nfts[i]["0"]),
            ...response.data
        }

        if (dataArray.tokenId !== 0) {
            returnedNFTs.push(dataArray)
        }
    }

    return returnedNFTs;
}

export interface formattedNFTsSale {
    name: string;
    description: string;
    image: string;
    external_url: string;
    tokenId: number;
    price: number;
}

export const formatURITokensAndIdsAndPrice = async (nfts: any[] | void): Promise<formattedNFTsSale[]> => {
    let returnedNFTs: formattedNFTsSale[] = [];
    if (!nfts) {
        throw Error("No hay nfts para formatear")
    }
    for (let i = 0; i < nfts.length; i++) {
        const response = await axios.get(nfts[i]["1"]);
        const price: bigint = await getNFTPrice(Number(nfts[i]["0"])).call();
        const dataArray = {
            tokenId: Number(nfts[i]["0"]),
            ...response.data,
            price: Number(web3.utils.fromWei(price, 'ether'))
        }

        if (dataArray.tokenId !== 0) {
            returnedNFTs.push(dataArray)
        }
    }
    return returnedNFTs;
}

export const formatAmountInWei = (amountInEther: number): number => {
    return Number(web3.utils.toWei(amountInEther.toString(), 'ether'))
}

