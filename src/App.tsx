import './App.css'
import { increment, decrement, reset, incrementByAmount } from './redux/slices/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './redux/store'
import { useEffect } from 'react'
import APICall from './backend/axiosInstance'
import { USER_ROUTES } from './backend/routes'

function App() {
  //TESTING
  const counter: number = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();
  useEffect(()=>{
    const getUsers = async(): Promise<string> => {
      const data = await APICall.get(USER_ROUTES.getUsers, {
        headers: {
          'token': 'Hello I am a token',
        }
      })
      console.log(data.data)
      return data.data
    }
    getUsers()
  }, [])
  return (
    <>
      <div>
        {counter}
      </div>
      <div>
        <label onClick={() => dispatch(decrement())}>-</label>
        <label onClick={() => dispatch(increment())}>+</label>
        <label onClick={() => dispatch(reset())}>Reset</label>
        <label onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</label>
      </div>
    </>
  )
}

export default App
