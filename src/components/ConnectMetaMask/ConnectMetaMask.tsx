import { FC } from "react";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import detectEthereumProvider from '@metamask/detect-provider';
import { WalletState } from "../../redux/slices/walletSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { formatBalance, formatChainAsNum } from "../../utils/utils";
import { setWallet, resetWallet } from "../../redux/slices/walletSlice";
import Web3 from "web3";

class Wallet implements WalletState {
    accounts: string[];
    balance: string;
    chainId: number;
    constructor(accounts: string[], balance: string, chainId: number) {
        this.accounts = accounts;
        this.balance = balance;
        this.chainId = chainId;
    }
}

const web3 = new Web3(window.ethereum || "");

const ConnectMetaMask: FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [hasProvider, setHasProvider] = useState<boolean | null>(null)
    const [hasConnected, setHasConnected] = useState<boolean | null>(null)
    const [error, setError] = useState<string>("")

    const wallet = useSelector((state: RootState) => state.wallet)

    useEffect(() => {
        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true });
            const hasProvider = Boolean(provider)
            setHasProvider(hasProvider);
        }
        if (wallet.accounts.length > 0) setHasConnected(true)
        window.ethereum.on("accountsChanged", refreshAccounts)
        window.ethereum.on("chainChanged", refreshChain)
        getProvider();
        return () => {
            window.ethereum.removeListener("accountsChanged", refreshAccounts);
            window.ethereum.removeListener("chainChanged", refreshChain);
        }
    }, [])

    const handleConnect = async () => {
        try {
            setError("");
            const accounts = await web3.eth.getAccounts();
            updateWallet(accounts)
        }
        catch (error) {
            setError("Ha ocurrido un error en la conexión con MetaMask. Vuelva a intentarlo.");
            setHasConnected(false);
        }
    }

    const refreshAccounts = (accounts: string[]) => {
        if (accounts.length > 0) updateWallet(accounts)
    }

    const refreshChain = async () => {
        updateWallet(wallet.accounts)
    }

    const updateWallet = async (accounts: string[]) => {
        if (accounts.length === 0) {
            setHasConnected(false);
            dispatch(resetWallet());
            return;
        }
        try {
            const chainId: number = formatChainAsNum(await web3.eth.getChainId());
            const rawBalance = web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), "ether");
            const balance: string = formatBalance(Number(rawBalance));
            const wallet = new Wallet(accounts, balance, chainId);
            dispatch(setWallet(wallet));
            setHasConnected(true);
            setError("")
        }
        catch (error) {
            setError("Ha ocurrido un error durante la obtención de datos de la cuenta. Vuelva a intentarlo.");
            setHasConnected(false);
            dispatch(resetWallet());
        }
    }

    return (
        <>
            {!hasProvider &&
                <button>Install MetaMask</button>
            }

            {hasProvider && !hasConnected &&
                <button onClick={handleConnect}>Connect MetaMask</button>
            }

            {hasProvider && hasConnected &&
                <>
                    <div>Dirección pública de la cuenta: {wallet.accounts[0]}</div>
                    <div>Balance de la cuenta: {wallet.balance}</div>
                    <div>Id de cadena: {wallet.chainId}</div>
                </>
            }

            {error.length !== 0 &&
                <div>{error}</div>
            }

        </>
    )
}

export default ConnectMetaMask