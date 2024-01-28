import { FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../../redux/store";
import { resetWallet, setWallet } from "../../../redux/slices/walletSlice";
import { useNavigate } from "react-router-dom";
import { getWalletData, web3 } from "../../../utils/utils";
import MetaMaskLogo from "../../svg/MetaMaskLogo/MetaMaskLogo";
import MetaMaskLogoActive from "../../svg/MetaMaskLogoActive/MetaMaskLogoActive";


const ConnectMetaMask: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const { hasProvider } = useSelector((state: RootState) => state.provider)
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

    const redirectToInstallMetaMask = () => {
        window.open('https://metamask.io/download.html', '_blank')
    }

    return (
        <>
            {!hasProvider &&
                <div className="space-x-5 items-center flex justify-end">
                    <button onClick={redirectToInstallMetaMask}>Instala MetaMask</button>
                </div>

            }

            {hasProvider && wallet.accounts.length <= 0 &&
                <MetaMaskLogo style="w-20 cursor-pointer" onClickFunction={handleConnect} />
            }

            {hasProvider && wallet.accounts.length > 0 &&
                <div className={`xl:space-x-5 lg:space-x-2 md:space-x-2 sm:md:space-x-2 phone:md:space-x-2 items-center flex  justify-end`}>
                    <label className="xl:text-md lg:text-md md:text-md sm:text-sm ">{wallet.balance}</label>
                    <MetaMaskLogoActive style="xl:w-20 lg:w-16 md:w-14 sm:w-12 phone:w-10 cursor-pointer" onClick={() => navigate('/perfil')} />
                </div>
            }
        </>
    )
}

export default ConnectMetaMask