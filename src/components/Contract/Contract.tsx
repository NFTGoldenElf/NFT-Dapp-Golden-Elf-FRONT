import { FC } from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";

const web3 = new Web3(window.ethereum)

const ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_unlockTime",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "when",
                "type": "uint256"
            }
        ],
        "name": "Withdrawal",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unlockTime",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

const address: string = "0x3cfFc453c72b017E56DE46b40c21636eE75a394e"

const Contract: FC = () => {
    const getAccounts = async() => {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)
    }
    getAccounts()
    return (
        <>
        </>
    )
}

export default Contract