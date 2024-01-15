import './App.css'
import { increment, decrement, reset, incrementByAmount } from './redux/slices/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from './redux/store'

function App() {
  const counter: number = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();
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
