import { FC } from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletState } from "../../redux/slices/walletSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { formatBalance, formatChainAsNum } from "../../utils/utils";
import { updateWallet, resetWallet } from "../../redux/slices/walletSlice";

class Wallet implements WalletState {
    accounts: string[];
    balance: string;
    chainId: string;
    numericChainId: number;
    constructor(accounts: string[], balance: string, chainId: string, numericChainId: number) {
        this.accounts = accounts;
        this.balance = balance;
        this.chainId = chainId;
        this.numericChainId = numericChainId
    }
}

const ConnectMetaMask: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [hasProvider, setHasProvider] = useState<boolean | null>(null)
    const [hasConnected, setHasConnected] = useState<boolean | null>(null)
    const [error, setError] = useState<string>("")

    const wallet = useSelector((state: RootState) => state.wallet)

    const handleConnect = async () => {
        try {
            const accounts: string[] = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            updateWalletData(accounts);
            setHasConnected(true)
        }
        catch (error) {
            setHasConnected(false)
            setError("Ha fallado la conexión con MetaMask.")
            dispatch(resetWallet());
        }
    }

    const updateWalletData = async (accounts: string[]) => {
        try {
            const balance = formatBalance(await window.ethereum.request({
                method: "eth_getBalance",
                params: [accounts[0], "latest"],
            }))
            const chainId = await window.ethereum.request({
                method: "eth_chainId"
            })
            const numericChainId = formatChainAsNum(chainId)
            const wallet = new Wallet(accounts, balance, chainId, numericChainId)
            dispatch(updateWallet(wallet))
            setHasConnected(true)
        }
        catch (error) {
            setHasConnected(false)
            setError('Algo ha salido mal en la conexión.')
            dispatch(resetWallet())
        }
    }

    const refreshAccounts = async (accounts: string[]) => {
        if (accounts.length > 0) {
            updateWalletData(accounts);
        } else {
            setHasConnected(false);
            dispatch(resetWallet());
        }
    }

    const installMetaMask = () => {
        window.open('https://metamask.io/download.html', '_blank');
    }

    useEffect(() => {
        const getProvider = async () => {
            try {
                const provider = await detectEthereumProvider({ silent: true })
                const hasProvider = Boolean(provider);
                setHasProvider(hasProvider)
                if (wallet.accounts.length > 0 && wallet.accounts[0].length > 0 && hasProvider) {
                    setHasConnected(true)
                }
                window.ethereum?.on("accountsChanged", refreshAccounts)
            }
            catch (error) {
                setHasConnected(false)
                setError("Algo ha salido mal.")
                dispatch(resetWallet())
            }

        }
        getProvider()
        return () => {
            window.ethereum?.removeListener("accountsChanged", refreshAccounts)
        }
    }, [])

    return (
        <>
            {hasProvider && !hasConnected &&
                <button onClick={handleConnect}>Connect MetaMask</button>
            }

            {!hasProvider &&
                <button onClick={installMetaMask}>Install MetaMask</button>
            }

            {hasConnected &&
                <>
                    <div>Dirección de la cuenta: {wallet.accounts[0]}</div>
                    <div>Balance de la cuenta: {wallet.balance}</div>
                    <div>Id de cadena: {wallet.chainId}</div>
                    <div>Id de cadena como número: {wallet.numericChainId}</div>
                </>
            }

            {error.length > 0 && <div>{error}</div>}

        </>
    )
}

export default ConnectMetaMask