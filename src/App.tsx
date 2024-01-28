import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Profile from './pages/Profile/Profile'
import { web3, getWalletData } from './utils/utils'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { AppDispatch } from './redux/store'
import detectEthereumProvider from '@metamask/detect-provider'
import { resetWallet, setWallet } from './redux/slices/walletSlice'
import { useNavigate } from 'react-router-dom'
import APICall from './backend/axiosInstance'
import { deleteUserInfo, loadUserInfo } from './redux/slices/userSlice'
import { USER_ROUTES } from './backend/routes'
import { uuidV4 } from 'web3-utils'
import { hasProviderStatus } from './redux/slices/providerSlice'


function App() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const appConnectionStatus = async () => {
      const provider = await detectEthereumProvider({ silent: true })
      const hasProvider = Boolean(provider);
      dispatch(hasProviderStatus(hasProvider))
      if (hasProvider) {
        web3.currentProvider!.on("accountsChanged", refreshAccounts);
        web3.currentProvider!.on("chainChanged", refreshChain);
        const accounts = await web3.eth.getAccounts();
        if (accounts.length <= 0) {
          dispatch(resetWallet());
          navigate('/')
        } else {
          updateAccount()
        }
      }
    }
    appConnectionStatus();
    return () => {
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
      window.ethereum?.removeListener("chainChanged", refreshChain);
    }
  }, [])

  const refreshAccounts = async (accounts: string[]) => {
    if (accounts.length <= 0) {
      dispatch(resetWallet());

      navigate('/')
      return;
    }
    updateAccount()
  }

  const refreshChain = async () => {
    try {
      updateAccount();
    }
    catch (error) {
      handleError()
    }
  }

  const updateAccount = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWalletData(accounts)
      dispatch(setWallet(wallet));
      const user = await APICall.get(USER_ROUTES.findUser(accounts[0]));
      const exist = user.data.exist;
      if (exist) {
        const { exist, ...result } = user.data;
        dispatch(loadUserInfo(result));
      } else {
        const newUser = await APICall.post(USER_ROUTES.createUser, {
          accountAddress: accounts[0],
          username: uuidV4(),
          profilePhoto: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        })
        dispatch(loadUserInfo(newUser.data))
      }
    }
    catch (error) {
      dispatch(deleteUserInfo());
      handleError()
    }
  }

  const handleError = () => {
    return navigate('/')
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/perfil' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
