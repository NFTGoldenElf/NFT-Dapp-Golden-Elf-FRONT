import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../redux/store";
import { getWalletData } from "../../utils/utils";
import { setWallet, resetWallet } from "../../redux/slices/walletSlice";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";

const web3 = new Web3(window.ethereum || "");

const ConnectMetaMask: FC<{ hasProvider: boolean | null }> = ({ hasProvider }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const wallet = useSelector((state: RootState) => state.wallet)

    const handleConnect = async () => {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const accounts = await web3.eth.getAccounts();
            updateWallet(accounts)
        }
        catch (error) {
            dispatch(resetWallet());
        }
    }

    const updateWallet = async (accounts: string[]) => {
        try {
            const wallet = await getWalletData(accounts)
            dispatch(setWallet(wallet));
        }
        catch (error) {
            dispatch(resetWallet());
        }
    }

    return (
        <>
            {!hasProvider &&
                <button>Instala MetaMask</button>
            }

            {hasProvider && wallet.accounts.length <= 0 &&
                <button onClick={handleConnect}>Conecta MetaMask</button>
            }

            {hasProvider && wallet.accounts.length > 0 &&
                <>
                    <div>{wallet.balance}</div>
                    <button onClick={() => navigate('/perfil')}>Ir al perfil</button>
                </>
            }
        </>
    )
}

export default ConnectMetaMask