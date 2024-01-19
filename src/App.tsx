import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profile/Profile'
import { Wallet, web3, formatBalance, formatChainAsNum } from './utils/utils'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { AppDispatch } from './redux/store'
import detectEthereumProvider from '@metamask/detect-provider'
import { resetWallet, setWallet } from './redux/slices/walletSlice'
import { useNavigate } from 'react-router-dom'

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [hasProvider, setHasProvider] = useState<boolean | null>(null);

  useEffect(() => {
    const appConnectionStatus = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      const hasProvider = Boolean(provider);
      setHasProvider(hasProvider)
      if (hasProvider) {
        web3.currentProvider!.on("accountsChanged", refreshAccounts);
        web3.currentProvider!.on("chainChanged", refreshChain);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length <= 0) {
          dispatch(resetWallet());
          navigate('/')
        }
      }
    }
    appConnectionStatus();
    return () => {
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
      window.ethereum?.removeListener("chainChanged", refreshChain);
    }
  }, [])

  const refreshAccounts = (accounts: string[]) => {
    if (accounts.length <= 0) {
      dispatch(resetWallet());
      navigate('/')
      return;
    }
    updateWallet(accounts)
  }

  const refreshChain = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      updateWallet(accounts);
    }
    catch (error) {
      handleError()
    }
  }

  const updateWallet = async (accounts: string[]) => {
    try {
      const chainId = formatChainAsNum(await web3.eth.getChainId());
      const rawBalance = web3.utils.fromWei(await web3.eth.getBalance(accounts[0]), "ether");
      const balance = formatBalance(Number(rawBalance));
      const wallet = new Wallet(accounts, balance, chainId);
      dispatch(setWallet(wallet));
    }
    catch (error) {
      handleError()
    }
  }

  const handleError = () => {
    return navigate('/')
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing hasProvider={hasProvider} />} />
        <Route path='/perfil' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
