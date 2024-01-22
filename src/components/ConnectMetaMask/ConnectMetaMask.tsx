import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../redux/store";
import { resetWallet, setWallet } from "../../redux/slices/walletSlice";
import { useNavigate } from "react-router-dom";
import { getWalletData, web3 } from "../../utils/utils";

const ConnectMetaMask: FC<{ hasProvider: boolean | null }> = ({ hasProvider }) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const wallet = useSelector((state: RootState) => state.wallet)

    const handleConnect = async () => {
        try {
            //In case an error occurs while mounting the application, the following code will allow the connect button with MetaMask to continue working correctly
            const accounts = await web3.eth.getAccounts();
            if (accounts.length) {
                const walletData = await getWalletData(accounts);
                dispatch(setWallet(walletData))
            }
            //---
            await window.ethereum.request({ method: 'eth_requestAccounts' });
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